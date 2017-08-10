import { Component, OnInit } from '@angular/core';
import { LogsService } from './logs.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogsAddModalComponent } from './logs-add-modal/logs-add-modal.component';
import { LogsEditModalComponent } from './logs-edit-modal/logs-edit-modal.component';

@Component({
  selector: 'logs-table',
  templateUrl: './logs-table.html',
  styleUrls: ['./logs-table.scss']
})
export class LogsTableComponent implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: LogsService, private modalService: NgbModal) {
    }

    toInt(num: string) {
        return +num;
    }

    addLogsModalShow() {
      const activeModal = this.modalService.open(LogsAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Log';
    }

    editLogsModalShow(id: any) {
      const activeModal = this.modalService.open(LogsEditModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Log';
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
        this.getAllLogs();
    }
    
    private getAllLogs(): void {

      this.service.getAllLogs().then((data) => {
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
