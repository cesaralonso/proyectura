import { Component, OnInit } from '@angular/core';
import { ReportsService } from './reports.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReportsAddModalComponent } from './reports-add-modal/reports-add-modal.component';
import { ReportsEditModalComponent } from './reports-edit-modal/reports-edit-modal.component';

@Component({
  selector: 'reports-table',
  templateUrl: './reports-table.html',
  styleUrls: ['./reports-table.scss']
})
export class ReportsTableComponent implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: ReportsService, private modalService: NgbModal) {
    }

    toInt(num: string) {
        return +num;
    }

    addReportsModalShow() {
      const activeModal = this.modalService.open(ReportsAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Reporte';
    }

    editReportsModalShow(id: any) {
      const activeModal = this.modalService.open(ReportsEditModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Reporte';
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
        this.getAllReports();
    }
    
    private getAllReports(): void {

      this.service.getAllReports().then((data) => {
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
