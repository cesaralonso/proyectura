import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ObracategoriesComponent } from './obracategories.component';
import { ObracategoriesTableComponent } from './components/obracategories-table/obracategories-table.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ObracategoriesComponent,
    children: [
      { path: 'obracategories-table', component: ObracategoriesTableComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
