import { FilesUploadModalComponent } from './../../../../../../shared/components/files-upload-modal/files-upload-modal.component';
import { DialogService } from 'ng2-bootstrap-modal';
import { TipoObraResponseInterface } from './tipo-obra-response.interface';
import { ToastrService } from 'ngx-toastr';
import { TipoObraInterface } from './tipo-obra.interface';
import { Component, OnInit } from '@angular/core';
import { TipoObraService } from './tipo-obra.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoObraAddModalComponent } from './tipo-obra-add-modal/tipo-obra-add-modal.component';
import { TipoObraEditModalComponent } from './tipo-obra-edit-modal/tipo-obra-edit-modal.component';
import { TipoObraUploadModalComponent } from './tipo-obra-upload-modal/tipo-obra-upload-modal.component';

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
      private toastrService: ToastrService,
      private dialogService: DialogService
    ) {}

    toInt(num: string) {
        return +num;
    }

    addTipoObraModalShow() {
      const disposable = this.dialogService.addDialog(TipoObraAddModalComponent)
        .subscribe( data => {
          if (data) {
            this.showToast(data);
          }
        })
    }

    editTipoObraModalShow( tipoObra: TipoObraInterface ) {
      const disposable = this.dialogService.addDialog(TipoObraEditModalComponent, tipoObra)
        .subscribe( data => {
          if (data) {
            this.showToast(data);
          }
        },
        error => console.log(error),
        () => console.log('Modified complete'));
    }

    uploadTipoObraModalShow(id: number) {
      const activeModal = this.modalService.open(TipoObraUploadModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Archivo a Tipo de Obra';
      activeModal.componentInstance.id = id;
    }

    filesModalShow(id: number) {
      const activeModal = this.modalService.open(FilesUploadModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Ver Archivos de Tipo de Obra';
      activeModal.componentInstance.id = id;
      activeModal.componentInstance.referencia = 'TipoObra';
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
