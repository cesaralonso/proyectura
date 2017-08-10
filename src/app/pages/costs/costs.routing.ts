import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CostsComponent } from './costs.component';
import { CostsTableComponent } from './components/costs-table/costs-table.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: CostsComponent,
    children: [
      { path: 'costs-table', component: CostsTableComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
