import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ExpensesComponent } from './expenses.component';
import { ExpensesTableComponent } from './components/expenses-table/expenses-table.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ExpensesComponent,
    children: [
      { path: 'expenses-table', component: ExpensesTableComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
