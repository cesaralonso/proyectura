import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CategoriesComponent } from './categories.component';
import { CategoriesTableComponent } from './components/categories-table/categories-table.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      { path: 'categories-table', component: CategoriesTableComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
