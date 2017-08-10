import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './categories.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriesAddModalComponent } from './categories-add-modal/categories-add-modal.component';
import { CategoriesEditModalComponent } from './categories-edit-modal/categories-edit-modal.component';

@Component({
  selector: 'categories-table',
  templateUrl: './categories-table.html',
  styleUrls: ['./categories-table.scss']
})
export class CategoriesTableComponent implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: CategoriesService, private modalService: NgbModal) {
    }

    toInt(num: string) {
        return +num;
    }

    addCategoriesModalShow() {
      const activeModal = this.modalService.open(CategoriesAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Costo';
    }

    editCategoriesModalShow(id: any) {
      const activeModal = this.modalService.open(CategoriesEditModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Costo';
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
        this.getAllCategories();
    }
    
    private getAllCategories(): void {

      this.service.getAllCategories().then((data) => {
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
