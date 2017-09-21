import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './obras.routing';
import { ObrasComponent } from './obras.component';

import { ObrasAddModalComponent } from './components/obras-table/obras-add-modal/obras-add-modal.component';
import { ObrasEditModalComponent } from './components/obras-table/obras-edit-modal/obras-edit-modal.component';
import { ObrasUploadModalComponent } from './components/obras-table/obras-upload-modal/obras-upload-modal.component';
import { FilesUploadModalComponent } from './components/obras-table/files-upload-modal/files-upload-modal.component';

import { ObrasService } from './components/obras-table/obras.service';

import { ObrasTableComponent } from './components/obras-table/obras-table.component';
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
    ObrasComponent,
    ObrasTableComponent,
    DataFilterPipe,
    ObrasAddModalComponent,
    ObrasEditModalComponent,
    ObrasUploadModalComponent,
    FilesUploadModalComponent
  ],
  entryComponents: [
    ObrasAddModalComponent,
    ObrasEditModalComponent,
    ObrasUploadModalComponent,
    FilesUploadModalComponent
  ],
  providers: [
    ObrasService
  ]
})
export class ObrasModule {
}
