import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './budgets.routing';

import { BudgetsComponent } from './budgets.component';
import { BudgetsAddModalComponent } from './components/budgets-table/budgets-add-modal/budgets-add-modal.component';
import { BudgetsEditModalComponent } from './components/budgets-table/budgets-edit-modal/budgets-edit-modal.component';
import { BudgetsTableComponent } from './components/budgets-table/budgets-table.component';
import { BudgetsService } from './components/budgets-table/budgets.service';

import { DataFilterPipe } from './components/budgets-table/data-filter.pipe';

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
    BudgetsComponent,
    BudgetsTableComponent,
    DataFilterPipe,
    BudgetsAddModalComponent,
    BudgetsEditModalComponent
  ],
  entryComponents: [
    BudgetsAddModalComponent,
    BudgetsEditModalComponent
  ],
  providers: [
    BudgetsService
  ]
})
export class BudgetsModule {
}
