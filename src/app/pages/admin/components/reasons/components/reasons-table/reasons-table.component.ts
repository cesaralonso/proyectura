import { Component, OnInit } from '@angular/core';
import { ReasonsService } from './reasons.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReasonsAddModalComponent } from './reasons-add-modal/reasons-add-modal.component';
import { ReasonsEditModalComponent } from './reasons-edit-modal/reasons-edit-modal.component';

@Component({
  selector: 'reasons-table',
  templateUrl: './reasons-table.html',
  styleUrls: ['./reasons-table.scss']
})
export class ReasonsTableComponent implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: ReasonsService, private modalService: NgbModal) {
    }

    toInt(num: string) {
        return +num;
    }

    addReasonsModalShow() {
      const activeModal = this.modalService.open(ReasonsAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Razón Social';
    }

    editReasonsModalShow(id: any) {
      const activeModal = this.modalService.open(ReasonsEditModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Razón Social';
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
        this.getAllReasons();
    }
    
    private getAllReasons(): void {

      /*
      this.service.getAllReasons().then((data) => {
        this.data = data;
      });
      */

      this.service
          .getAll()
          .subscribe(
              (data:any[]) => console.log(data),
              error => console.log(error),
              () => console.log('Get all Items complete'));
    }

    
}
