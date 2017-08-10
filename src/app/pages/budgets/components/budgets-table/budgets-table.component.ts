import { Component, OnInit } from '@angular/core';
import { BudgetsService } from './budgets.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BudgetsAddModalComponent } from './budgets-add-modal/budgets-add-modal.component';
import { BudgetsEditModalComponent } from './budgets-edit-modal/budgets-edit-modal.component';

@Component({
  selector: 'budgets-table',
  templateUrl: './budgets-table.html',
  styleUrls: ['./budgets-table.scss']
})
export class BudgetsTableComponent implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: BudgetsService, private modalService: NgbModal) {
    }

    toInt(num: string) {
        return +num;
    }

    addBudgetsModalShow() {
      const activeModal = this.modalService.open(BudgetsAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Budget';
    }

    editBudgetsModalShow(id: any) {
      const activeModal = this.modalService.open(BudgetsEditModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Budget';
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
        this.getAllBudgets();
    }
    
    private getAllBudgets(): void {

      this.service.getAllBudgets().then((data) => {
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
