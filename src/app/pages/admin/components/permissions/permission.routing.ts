import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PermissionsComponent } from './permissions.component';
import { PermissionsTableComponent } from './components/permissions-table/permissions-table.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: PermissionsComponent,
    children: [
      { path: 'permissions-table', component: PermissionsTableComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
