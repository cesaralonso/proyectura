import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { ObracategoriesService } from './obracategories.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ObracategoriesAddModalComponent } from './obracategories-add-modal/obracategories-add-modal.component';
import { ObracategoriesEditModalComponent } from './obracategories-edit-modal/obracategories-edit-modal.component';

@Component({
  selector: 'obracategories-table',
  templateUrl: './obracategories-table.html',
  styleUrls: ['./obracategories-table.scss']
})
export class ObracategoriesTableComponent implements OnInit {

    data;
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'idcategoria';
    sortOrder = 'asc';

    constructor(private service: ObracategoriesService, private modalService: NgbModal, private toastrService: ToastrService) {
    }

    toInt(num: string) {
        return +num;
    }

    addObracategoriesModalShow() {
      const activeModal = this.modalService.open(ObracategoriesAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Categoría de Obra';
    }

    editObracategoriesModalShow(id: any) {
      const activeModal = this.modalService.open(ObracategoriesEditModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Categoría de Obra';
      activeModal.componentInstance.id = id;
      // AQUÍ ES DONDE SE VA A CARGAR LOS DATOS Y AGREGARSE POR MEDIO DEL COMPONENT INSTANCE

    }
    
    onDeleteConfirm(event, id): void {
      if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
        console.log('item.id a borrar', id);
          this.service.deleteObracategories(id)
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
        this.getAllObracategories();
      } else {
        this.toastrService.error(data.mensajeRespuesta);
      }
    }

    ngOnInit() {
        this.getAllObracategories();
    }
    
    private getAllObracategories(): void {
      this.service
          .getAll()
          .subscribe(
              (data: any[]) => this.data = data,
              error => console.log(error),
              () => console.log('Get all Items complete'));
    }

    
}
