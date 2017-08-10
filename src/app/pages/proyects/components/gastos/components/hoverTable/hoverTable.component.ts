import {Component} from '@angular/core';

import {GastosService} from '../../gastos.service';

@Component({
  selector: 'hover-table',
  templateUrl: './hoverTable.html'
})
export class HoverTable {

  metricsTableData:Array<any>;

  constructor(private _gastosService: GastosService) {
    this.metricsTableData = _gastosService.metricsTableData;
  }
}
