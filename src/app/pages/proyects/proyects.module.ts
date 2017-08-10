import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HttpModule } from "@angular/http";

import { routing } from './proyects.routing';
import { Proyects } from './proyects.component';

import { Expenses } from './components/expenses/expenses.component';
import { List } from './components/list/list.component';
import { Gastos } from './components/gastos/gastos.component';
import { ExpensesService } from './components/expenses/expenses.service';
import { ListService } from './components/list/list.service';
import { GastosService } from './components/gastos/gastos.service';


import { HoverTable } from './components/gastos/components/hoverTable';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    HttpModule,
  ],
  declarations: [
    Proyects,
    Expenses,
    List,
    Gastos,
    HoverTable

  ],
  providers: [
    ExpensesService,
    ListService,
    GastosService
  ]
})
export class ProyectsModule {
}
