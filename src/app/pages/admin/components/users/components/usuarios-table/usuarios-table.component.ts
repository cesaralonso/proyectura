import { ToastrService } from 'ngx-toastr';
import { UserInterface } from './user.interface';
import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserAddModalComponent } from './user-add-modal/user-add-modal.component';
import { UserEditModalComponent } from './user-edit-modal/user-edit-modal.component';


@Component({
  selector: 'usuarios-table',
  templateUrl: './usuarios-table.html',
  styleUrls: ['./usuarios-table.scss']
})
export class UsuariosTable implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: UserService, private modalService: NgbModal, private toastrService: ToastrService) {
    }

    toInt(num: string) {
        return +num;
    }

    addUserModalShow() {
      const activeModal = this.modalService.open(UserAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Usuario';
    }

    editUserModalShow(id: any) {
      const activeModal = this.modalService.open(UserEditModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Usuario';
      activeModal.componentInstance.id = id;

      // AQUÍ PODRÍA CARGAR LOS DATOS DEL USUARIO Y AGREGARSE POR MEDIO DEL COMPONENT INSTANCE

    }
    
    onDeleteConfirm(event, id): void {
      if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
        console.log('item.id a borrar', id);

        this.service.deleteUser(id)
          .subscribe(
            (data) => this.showToast(data),
            error => console.log(error),
            () => console.log('Delete completed')
          );

      } else {
        console.log('item.id cancelando', id);
      }
    }

    showToast(data) {
      if (data.idRespuesta === 0) {
        this.toastrService.success(data.mensajeRespuesta);
        this.getAllUsers();
      } else {
        this.toastrService.error(data.mensajeRespuesta);
      }
    }

    ngOnInit() {
        this.getAllUsers();
    }
    
    private getAllUsers(): void {
        this.service
          .getAllUsers()
          .subscribe(
              (data: UserInterface[]) => this.data = data,
              error => console.log(error),
              () => console.log('Get all Items complete'));
    }

    
}
