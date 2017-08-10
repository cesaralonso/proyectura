import { Component, OnInit } from '@angular/core';
import { MaterialsService } from './materials.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MaterialsAddModalComponent } from './materials-add-modal/materials-add-modal.component';
import { MaterialsEditModalComponent } from './materials-edit-modal/materials-edit-modal.component';

@Component({
  selector: 'materials-table',
  templateUrl: './materials-table.html',
  styleUrls: ['./materials-table.scss']
})
export class MaterialsTableComponent implements OnInit {

    data;
    filterQuery = "";
    rowsOnPage = 10;
    sortBy = "nombre";
    sortOrder = "asc";

    constructor(private service: MaterialsService, private modalService: NgbModal) {
    }

    toInt(num: string) {
        return +num;
    }

    addMaterialsModalShow() {
      const activeModal = this.modalService.open(MaterialsAddModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Agregar Materialo';
    }

    editMaterialsModalShow(id: any) {
      const activeModal = this.modalService.open(MaterialsEditModalComponent, { size: 'lg' });
      activeModal.componentInstance.modalHeader = 'Editar Materialo';
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
        this.getAllMaterials();
    }
    
    private getAllMaterials(): void {

      this.service.getAllMaterials().then((data) => {
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
