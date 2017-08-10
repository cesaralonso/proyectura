import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './reports.routing';

import { ReportsComponent } from './reports.component';
import { ReportsAddModalComponent } from './components/reports-table/reports-add-modal/reports-add-modal.component';
import { ReportsEditModalComponent } from './components/reports-table/reports-edit-modal/reports-edit-modal.component';
import { ReportsTableComponent } from './components/reports-table/reports-table.component';
import { ReportsService } from './components/reports-table/reports.service';

import { DataFilterPipe } from './components/reports-table/data-filter.pipe';

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
    ReportsComponent,
    ReportsTableComponent,
    DataFilterPipe,
    ReportsAddModalComponent,
    ReportsEditModalComponent
  ],
  entryComponents: [
    ReportsAddModalComponent,
    ReportsEditModalComponent
  ],
  providers: [
    ReportsService
  ]
})
export class ReportsModule {
}
