import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './materials.routing';

import { MaterialsComponent } from './materials.component';
import { MaterialsAddModalComponent } from './components/materials-table/materials-add-modal/materials-add-modal.component';
import { MaterialsEditModalComponent } from './components/materials-table/materials-edit-modal/materials-edit-modal.component';
import { MaterialsTableComponent } from './components/materials-table/materials-table.component';
import { MaterialsService } from './components/materials-table/materials.service';

import { DataFilterPipe } from './components/materials-table/data-filter.pipe';

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
    MaterialsComponent,
    MaterialsTableComponent,
    DataFilterPipe,
    MaterialsAddModalComponent,
    MaterialsEditModalComponent
  ],
  entryComponents: [
    MaterialsAddModalComponent,
    MaterialsEditModalComponent
  ],
  providers: [
    MaterialsService
  ]
})
export class MaterialsModule {
}
