import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LogsComponent } from './logs.component';
import { LogsTableComponent } from './components/logs-table/logs-table.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: LogsComponent,
    children: [
      { path: 'logs-table', component: LogsTableComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
