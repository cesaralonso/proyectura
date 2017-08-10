import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'categories',
  templateUrl: './categories.html'
})
export class CategoriesComponent implements OnInit {

  constructor() {

  }

  onDeleteConfirm(event): void {
    if (window.confirm('¿Estas seguro de querer eliminar este registro?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  ngOnInit() {
  
  }

}
