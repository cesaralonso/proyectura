import { ObracategoriesComponent } from './components/obracategories/obracategories.component';
import { TipoObraComponent } from './components/tipo-obra/tipo-obra.component';
import { ReasonsComponent } from './components/reasons/reasons.component';
import { LogsComponent } from './components/logs/logs.component';
import { PermissionsComponent } from './components/permissions/permissions.component';
import { GroupsComponent } from './components/groups/groups.component';
import { Routes, RouterModule } from '@angular/router';

import { Admin } from './admin.component';
import { Users } from './components/users/users.component';
import { ProfileEdit } from './components/profile-edit/profile-edit.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Admin,
    children: [
      { path: 'users', component: Users },
      { path: 'profile-edit', component: ProfileEdit },
      { path: 'groups', component: GroupsComponent },
      { path: 'permissions', component: PermissionsComponent },
      { path: 'logs', component: LogsComponent },
      { path: 'social-reasons', component: ReasonsComponent },
      { path: 'tipo-obra', component: TipoObraComponent },
      { path: 'obra-categories', component: ObracategoriesComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
