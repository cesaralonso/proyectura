import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule as AngularFormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular2-datatable';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './admin.routing';
import { Admin } from './admin.component';

import { ProfileEdit } from './components/profile-edit/profile-edit.component';
import { UsuariosEditForm } from './components/profile-edit/components/usuarios-edit-form';

import { Users } from './components/users/users.component';
import { UsuariosTable } from './components/users/components/usuarios-table/usuarios-table.component';
import { UserAddModalComponent } from './components/users/components/usuarios-table/user-add-modal/user-add-modal.component';
import { UserEditModalComponent } from './components/users/components/usuarios-table/user-edit-modal/user-edit-modal.component';
import { UserService } from './components/users/components/usuarios-table/user.service';

import { DataFilterPipe } from './data-filter.pipe';

import { GroupsComponent } from './components/groups/groups.component';
import { GroupsService } from './components/groups/components/groups-table/groups.service';
import { GroupsTableComponent } from './components/groups/components/groups-table/groups-table.component';
import { GroupsEditModalComponent } from './components/groups/components/groups-table/groups-edit-modal/groups-edit-modal.component';
import { GroupsAddModalComponent } from './components/groups/components/groups-table/groups-add-modal/groups-add-modal.component';

import { PermissionsComponent } from './components/permissions/permissions.component';
import { PermissionsService } from './components/permissions/components/permissions-table/permissions.service';
import { PermissionsTableComponent } from './components/permissions/components/permissions-table/permissions-table.component';
import { PermissionsEditModalComponent } from './components/permissions/components/permissions-table/permissions-edit-modal/permissions-edit-modal.component';
import { PermissionsAddModalComponent } from './components/permissions/components/permissions-table/permissions-add-modal/permissions-add-modal.component';

import { LogsComponent } from './components/logs/logs.component';
import { LogsService } from './components/logs/components/logs-table/logs.service';
import { LogsTableComponent } from './components/logs/components/logs-table/logs-table.component';
import { LogsEditModalComponent } from './components/logs/components/logs-table/logs-edit-modal/logs-edit-modal.component';
import { LogsAddModalComponent } from './components/logs/components/logs-table/logs-add-modal/logs-add-modal.component';

import { ReasonsComponent } from './components/reasons/reasons.component';
import { ReasonsService } from './components/reasons/components/reasons-table/reasons.service';
import { ReasonsTableComponent } from './components/reasons/components/reasons-table/reasons-table.component';
import { ReasonsEditModalComponent } from './components/reasons/components/reasons-table/reasons-edit-modal/reasons-edit-modal.component';
import { ReasonsAddModalComponent } from './components/reasons/components/reasons-table/reasons-add-modal/reasons-add-modal.component';


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    AppTranslationModule,
    ReactiveFormsModule,
    NgaModule,
    NgbRatingModule,
    routing,
    DataTableModule,
    NgbModalModule
  ],
  declarations: [
    Users,
    ProfileEdit,
    Admin,
    UsuariosEditForm,
    UsuariosTable,
    DataFilterPipe,
    UserAddModalComponent,
    UserEditModalComponent,
    GroupsComponent,
    GroupsTableComponent,
    GroupsAddModalComponent,
    GroupsEditModalComponent,
    PermissionsComponent,
    PermissionsTableComponent,
    PermissionsAddModalComponent,
    PermissionsEditModalComponent,
    LogsComponent,
    LogsTableComponent,
    LogsAddModalComponent,
    LogsEditModalComponent,
    ReasonsComponent,
    ReasonsTableComponent,
    ReasonsAddModalComponent,
    ReasonsEditModalComponent
  ],
  entryComponents: [
    UserAddModalComponent,
    UserEditModalComponent,
    GroupsAddModalComponent,
    GroupsEditModalComponent,
    PermissionsAddModalComponent,
    PermissionsEditModalComponent,
    LogsAddModalComponent,
    LogsEditModalComponent,
    ReasonsAddModalComponent,
    ReasonsEditModalComponent
  ],
  providers: [
    UserService,
    GroupsService,
    PermissionsService,
    LogsService,
    ReasonsService
  ]
})
export class AdminModule {
}
