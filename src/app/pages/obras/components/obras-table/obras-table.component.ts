import { Component, OnInit } from '@angular/core';
import { ObrasService } from './obras.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ObrasAddModal } from './obras-add-modal/obras-add-modal.component';
import { ObrasEditModal } from './obras-edit-modal/obras-edit-modal.component';

@Component({
  selector: 'obras-table',
  templateUrl: './obras-table.html',
  styleUrls: ['./obras-table.scss']
})
export class ObrasTable implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: ObrasService, private modalService: NgbModal) {
    }

    toInt(num: string) {
        return +num;
    }

    addObrasModalShow() {
      const activeModal = this.modalService.open(ObrasAddModal, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Obra';
    }

    editObrasModalShow(id: any) {
      const activeModal = this.modalService.open(ObrasEditModal, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Obra';
      activeModal.componentInstance.id = id;
      // AQUÍ ES DONDE SE VA A CARGAR LOS DATOS DEL USUARIO Y AGREGARSE POR MEDIO DEL COMPONENT INSTANCE

    }
    
    onDeleteConfirm(event, item): void {
      if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
        console.log('item.id a borrar', item.id);
      } else {
        console.log('item.id cancelando', item.id);
      }
    }


    ngOnInit() {
        this.getAllObrass();
    }
    
    private getAllObrass(): void {

      this.service.getAllObrass().then((data) => {
        this.data = data;
      });


      /*
        this.service
            .getAllObrass()
            .subscribe(
                (data:any[]) => console.log(data),
                error => console.log(error),
                () => console.log('Get all Items complete'));*/
    }

    
}
