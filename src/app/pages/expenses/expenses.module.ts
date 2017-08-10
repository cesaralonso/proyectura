import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './expenses.routing';

import { ExpensesComponent } from './expenses.component';
import { ExpensesAddModalComponent } from './components/expenses-table/expenses-add-modal/expenses-add-modal.component';
import { ExpensesEditModalComponent } from './components/expenses-table/expenses-edit-modal/expenses-edit-modal.component';
import { ExpensesTableComponent } from './components/expenses-table/expenses-table.component';
import { ExpensesService } from './components/expenses-table/expenses.service';

import { DataFilterPipe } from './components/expenses-table/data-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    AppTranslationModule,
    ReactiveFormsModule,
    NgaModule,
    NgbRatingModule,
    routing,
    DataTableModule,
    NgbModalModule
  ],
  declarations: [
    ExpensesComponent,
    ExpensesTableComponent,
    DataFilterPipe,
    ExpensesAddModalComponent,
    ExpensesEditModalComponent
  ],
  entryComponents: [
    ExpensesAddModalComponent,
    ExpensesEditModalComponent
  ],
  providers: [
    ExpensesService
  ]
})
export class ExpensesModule {
}
