import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ReasonsComponent } from './reasons.component';
import { ReasonsTableComponent } from './components/reasons-table/reasons-table.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ReasonsComponent,
    children: [
      { path: 'reasons-table', component: ReasonsTableComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
