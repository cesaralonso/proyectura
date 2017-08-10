import { Routes, RouterModule } from '@angular/router';

import { Proyects } from './proyects.component';
import { Expenses } from './components/expenses/expenses.component';
import { List } from './components/list/list.component';
import { Gastos } from './components/gastos/gastos.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Proyects,
    children: [
      { path: 'expenses', component: Expenses },
      { path: 'list', component: List },
      { path: 'gastos', component: Gastos }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
