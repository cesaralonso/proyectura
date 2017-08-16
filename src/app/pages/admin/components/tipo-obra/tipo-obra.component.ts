import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tipo-obra',
  templateUrl: './tipo-obra.html'
})
export class TipoObraComponent implements OnInit {

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
