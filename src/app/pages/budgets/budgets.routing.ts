import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { BudgetsComponent } from './budgets.component';
import { BudgetsTableComponent } from './components/budgets-table/budgets-table.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: BudgetsComponent,
    children: [
      { path: 'budgets-table', component: BudgetsTableComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
