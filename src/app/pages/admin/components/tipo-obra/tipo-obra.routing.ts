import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TipoObraComponent } from './tipo-obra.component';
import { TipoObraTableComponent } from './components/tipo-obra-table/tipo-obra-table.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: TipoObraComponent,
    children: [
      { path: 'tipo-obra-table', component: TipoObraTableComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
