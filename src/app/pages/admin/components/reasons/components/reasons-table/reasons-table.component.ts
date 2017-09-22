import { DialogService } from 'ng2-bootstrap-modal';
import { ReasonsInterface } from './reasons.interface';
import { ToastrService } from 'ngx-toastr';
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
    filterQuery = '';
    rowsOnPage = 10;
    sortBy = 'idrazonsocial';
    sortOrder = 'asc';

    constructor(
      private service: ReasonsService, 
      private modalService: NgbModal, 
      private toastrService: ToastrService,
      private dialogService: DialogService
    ) {
    }

    toInt(num: string) {
        return +num;
    }

    addReasonsModalShow() {
      const disposable = this.dialogService.addDialog(ReasonsAddModalComponent)
        .subscribe( data => {
          if (data) {
            this.showToast(data);
          }
        })
    }

    editReasonsModalShow( groups: ReasonsInterface ) {
      const disposable = this.dialogService.addDialog(ReasonsEditModalComponent, groups)
        .subscribe( data => {
          if (data) {
            this.showToast(data);
          }
        },
        error => console.log(error),
        () => console.log('Modified complete'));
    }
    
    onDeleteConfirm(event, id): void {
      if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
        console.log('item.id a borrar', id);
          this.service.deleteReasons(id)
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
        this.getAllReasons();
      } else {
        this.toastrService.error(data.mensajeRespuesta);
      }
    }

    ngOnInit() {
        this.getAllReasons();
    }
    
    private getAllReasons(): void {
      this.service
          .getAll()
          .subscribe(
              (data: any[]) => this.data = data,
              error => console.log(error),
              () => console.log('Get all Items complete'));
    }

    
}
