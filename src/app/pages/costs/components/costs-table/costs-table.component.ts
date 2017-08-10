import { Component, OnInit } from '@angular/core';
import { CostsService } from './costs.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CostsAddModalComponent } from './costs-add-modal/costs-add-modal.component';
import { CostsEditModalComponent } from './costs-edit-modal/costs-edit-modal.component';

@Component({
  selector: 'costs-table',
  templateUrl: './costs-table.html',
  styleUrls: ['./costs-table.scss']
})
export class CostsTableComponent implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: CostsService, private modalService: NgbModal) {
    }

    toInt(num: string) {
        return +num;
    }

    addCostsModalShow() {
      const activeModal = this.modalService.open(CostsAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Costo';
    }

    editCostsModalShow(id: any) {
      const activeModal = this.modalService.open(CostsEditModalComponent, { size: 'lg' });
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
        this.getAllCosts();
    }
    
    private getAllCosts(): void {

      this.service.getAllCosts().then((data) => {
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
