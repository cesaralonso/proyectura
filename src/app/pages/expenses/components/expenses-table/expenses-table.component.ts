import { Component, OnInit } from '@angular/core';
import { ExpensesService } from './expenses.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ExpensesAddModalComponent } from './expenses-add-modal/expenses-add-modal.component';
import { ExpensesEditModalComponent } from './expenses-edit-modal/expenses-edit-modal.component';

@Component({
  selector: 'expenses-table',
  templateUrl: './expenses-table.html',
  styleUrls: ['./expenses-table.scss']
})
export class ExpensesTableComponent implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: ExpensesService, private modalService: NgbModal) {
    }

    toInt(num: string) {
        return +num;
    }

    addExpensesModalShow() {
      const activeModal = this.modalService.open(ExpensesAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Gasto';
    }

    editExpensesModalShow(id: any) {
      const activeModal = this.modalService.open(ExpensesEditModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Gasto';
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
        this.getAllExpenses();
    }
    
    private getAllExpenses(): void {

      this.service.getAllExpenses().then((data) => {
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
