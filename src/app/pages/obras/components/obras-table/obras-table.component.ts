import { ToastrService } from 'ngx-toastr';
import { ObrasInterface } from './obras.interface';
import { ObrasResponseInterface } from './obras-response.interface';
import { Component, OnInit } from '@angular/core';
import { ObrasService } from './obras.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ObrasAddModal } from './obras-add-modal/obras-add-modal.component';
import { ObrasEditModal } from './obras-edit-modal/obras-edit-modal.component';

@Component({
  selector: 'obras-table',
  templateUrl: './obras-table.html',
  styleUrls: ['./obras-table.scss'],
})
export class ObrasTable implements OnInit {

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'idobra';
    sortOrder = 'asc';

    constructor(private service: ObrasService, private modalService: NgbModal, private toastrService: ToastrService) {
    }

    toInt(num: string) {
        return +num;
    }

    addObrasModalShow() {
      const activeModal = this.modalService.open(ObrasAddModal, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Obra';
      console.log('Add Modal opened');
    }

    editObrasModalShow(id: any) {
      const activeModal = this.modalService.open(ObrasEditModal, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Obra';
      activeModal.componentInstance.id = id;
      // AQUÍ ES DONDE SE VA A CARGAR LOS DATOS DEL USUARIO Y AGREGARSE POR MEDIO DEL COMPONENT INSTANCE

    }

    onDeleteConfirm(event, id): void {
      if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {

        this.service.cancelarObra(id)
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
        this.getAllObras();
      } else {
        this.toastrService.error(data.mensajeRespuesta);
      }
    }

    ngOnInit() {
        this.getAllObras();
    }
    
    private getAllObras(): void {

      this.service
          .getAllObras()
          .subscribe(
              (data: ObrasInterface[]) =>  {
                this.data = data;
                console.log(this.data);
              },
              error => console.log(error),
              () => console.log('Get all Items complete'));
    } 
}
