import { Component } from '@angular/core';

import { ListService } from './list.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'smart-table',
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class List {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      nombre: {
        title: 'Nombre',
        type: 'string'
      },
      descripcion: {
        title: 'Descripción',
        type: 'string'
      },
      tipo: {
        title: 'Tipo Proyecto',
        type: 'string'
      },
      contacto_nombre: {
        title: 'Contacto Nombre',
        type: 'number'
      },
      contacto_direccion: {
        title: 'Contacto Dirección',
        type: 'string'
      },
      contacto_correo: {
        title: 'Contacto Correo',
        type: 'string'
      },
      contacto_telefono: {
        title: 'Contacto Teléfono',
        type: 'string'
      },
      fecha: {
        title: 'Fecha',
        type: 'date'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ListService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
