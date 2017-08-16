import { TipoObraResponseInterface } from './tipo-obra-response.interface';
import { ToastrService } from 'ngx-toastr';
import { TipoObraInterface } from './tipo-obra.interface';
import { Component, OnInit } from '@angular/core';
import { TipoObraService } from './tipo-obra.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoObraAddModalComponent } from './tipo-obra-add-modal/tipo-obra-add-modal.component';
import { TipoObraEditModalComponent } from './tipo-obra-edit-modal/tipo-obra-edit-modal.component';


@Component({
  selector: 'tipo-obra-table',
  templateUrl: './tipo-obra-table.html',
  styleUrls: ['./tipo-obra-table.scss']
})
export class TipoObraTableComponent implements OnInit {

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'idtipoobra';
    sortOrder = 'asc';

    constructor(
      private service: TipoObraService, 
      private modalService: NgbModal, 
      private toastrService: ToastrService) {}

    toInt(num: string) {
        return +num;
    }

    addTipoObraModalShow() {
      const activeModal = this.modalService.open(TipoObraAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Tipo de Obra';
    }

    editTipoObraModalShow(id: any) {
      const activeModal = this.modalService.open(TipoObraEditModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Tipo de Obra';
      activeModal.componentInstance.id = id;
    }
    
    onDeleteConfirm(event, id): void {
      if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
        this.service.deleteTipoObra(id)
          .subscribe(
            (data) => this.showToast(data),
            error => console.log(error),
            () => console.log('Delete completed')
          );
      }
    }

    showToast(data) {
      if (data.idRespuesta === 0) {
        this.toastrService.success(data.mensajeRespuesta);
        this.getAllTipoObras();
      } else {
        this.toastrService.error(data.mensajeRespuesta);
      }
    }

    ngOnInit() {
        this.getAllTipoObras();
    }
    
    private getAllTipoObras(): void {
        this.service
          .getAllTipoObras()
          .subscribe(
              (data: TipoObraInterface[]) => this.data = data,
              error => console.log(error),
              () => console.log('Get all Items complete'));
    }

    
}
