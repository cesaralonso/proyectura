import { Component, OnInit } from '@angular/core';
import { PermissionsService } from './permissions.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PermissionsAddModalComponent } from './permissions-add-modal/permissions-add-modal.component';
import { PermissionsEditModalComponent } from './permissions-edit-modal/permissions-edit-modal.component';

@Component({
  selector: 'permissions-table',
  templateUrl: './permissions-table.html',
  styleUrls: ['./permissions-table.scss']
})
export class PermissionsTableComponent implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: PermissionsService, private modalService: NgbModal) {
    }

    toInt(num: string) {
        return +num;
    }

    addPermissionsModalShow() {
      const activeModal = this.modalService.open(PermissionsAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Permiso';
    }

    editPermissionsModalShow(id: any) {
      const activeModal = this.modalService.open(PermissionsEditModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Permiso';
      activeModal.componentInstance.id = id;
      // AQUÍ ES DONDE SE VA A CARGAR LOS DATOS Y AGREGARSE POR MEDIO DEL COMPONENT INSTANCE

    }
    
    onDeleteConfirm(event, item): void {
      if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
        console.log('item.id a borrar', item.id);
      } else {
        console.log('item.id cancelando', item.id);
      }
    }


    ngOnInit() {
        this.getAllPermissions();
    }
    
    private getAllPermissions(): void {

      this.service.getAllPermissions().then((data) => {
        this.data = data;
      });


      /*
        this.service
            .getAllUsers()
            .subscribe(
                (data:any[]) => console.log(data),
                error => console.log(error),
                () => console.log('Get all Items complete'));*/
    }

    
}
