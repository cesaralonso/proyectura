import { Component } from '@angular/core';

import { ExpensesService } from './expenses.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'smart-table',
  templateUrl: './expenses.html',
  styleUrls: ['./expenses.scss']
})
export class Expenses {

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
      proveedor: {
        title: 'Proveedor',
        type: 'string'
      },
      folio: {
        title: 'No. Folio',
        type: 'string'
      },
      importe: {
        title: 'Importe',
        type: 'number'
      },
      file: {
        title: 'File',
        type: 'string'
      },
      pdf: {
        title: 'PDF',
        type: 'string'
      },
      xml: {
        title: 'XML',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ExpensesService) {
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
