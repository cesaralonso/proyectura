import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ReportsComponent } from './reports.component';
import { ReportsTableComponent } from './components/reports-table/reports-table.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      { path: 'reports-table', component: ReportsTableComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
