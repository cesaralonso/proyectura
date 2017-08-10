import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './categories.routing';

import { CategoriesComponent } from './categories.component';
import { CategoriesAddModalComponent } from './components/categories-table/categories-add-modal/categories-add-modal.component';
import { CategoriesEditModalComponent } from './components/categories-table/categories-edit-modal/categories-edit-modal.component';
import { CategoriesTableComponent } from './components/categories-table/categories-table.component';
import { CategoriesService } from './components/categories-table/categories.service';

import { DataFilterPipe } from './components/categories-table/data-filter.pipe';

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
    CategoriesComponent,
    CategoriesTableComponent,
    DataFilterPipe,
    CategoriesAddModalComponent,
    CategoriesEditModalComponent
  ],
  entryComponents: [
    CategoriesAddModalComponent,
    CategoriesEditModalComponent
  ],
  providers: [
    CategoriesService
  ]
})
export class CategoriesModule {
}
