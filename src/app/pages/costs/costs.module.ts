import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './costs.routing';

import { CostsComponent } from './costs.component';
import { CostsAddModalComponent } from './components/costs-table/costs-add-modal/costs-add-modal.component';
import { CostsEditModalComponent } from './components/costs-table/costs-edit-modal/costs-edit-modal.component';
import { CostsTableComponent } from './components/costs-table/costs-table.component';
import { CostsService } from './components/costs-table/costs.service';

import { DataFilterPipe } from './components/costs-table/data-filter.pipe';

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
    CostsComponent,
    CostsTableComponent,
    DataFilterPipe,
    CostsAddModalComponent,
    CostsEditModalComponent
  ],
  entryComponents: [
    CostsAddModalComponent,
    CostsEditModalComponent
  ],
  providers: [
    CostsService
  ]
})
export class CostsModule {
}
