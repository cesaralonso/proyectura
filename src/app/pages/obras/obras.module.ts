import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './obras.routing';
import { Obras } from './obras.component';

import { ObrasAddModal } from './components/obras-table/obras-add-modal/obras-add-modal.component';
import { ObrasEditModal } from './components/obras-table/obras-edit-modal/obras-edit-modal.component';
import { ObrasService } from './components/obras-table/obras.service';

import { ObrasTable } from './components/obras-table/obras-table.component';
import { DataFilterPipe } from './components/obras-table/data-filter.pipe';

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
    Obras,
    ObrasTable,
    DataFilterPipe,
    ObrasAddModal,
    ObrasEditModal
  ],
  entryComponents: [
    ObrasAddModal,
    ObrasEditModal
  ],
  providers: [
    ObrasService
  ]
})
export class ObrasModule {
}
