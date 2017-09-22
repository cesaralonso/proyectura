import { FilesUploadModalService } from './../../shared/components/files-upload-modal/file-upload-modal.service';
import { FilesUploadModalComponent } from './../../shared/components/files-upload-modal/files-upload-modal.component';


import { ProfileEditService } from './components/profile-edit/profile-edit.service';
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
import { DataFilterReasonsPipe } from './data-filter-reasons.pipe';

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

import { TipoObraComponent } from './components/tipo-obra/tipo-obra.component';
import { TipoObraService } from './components/tipo-obra/components/tipo-obra-table/tipo-obra.service';
import { TipoObraTableComponent } from './components/tipo-obra/components/tipo-obra-table/tipo-obra-table.component';
import { TipoObraEditModalComponent } from './components/tipo-obra/components/tipo-obra-table/tipo-obra-edit-modal/tipo-obra-edit-modal.component';
import { TipoObraAddModalComponent } from './components/tipo-obra/components/tipo-obra-table/tipo-obra-add-modal/tipo-obra-add-modal.component';
import { TipoObraUploadModalComponent } from './components/tipo-obra/components/tipo-obra-table/tipo-obra-upload-modal/tipo-obra-upload-modal.component';

import { ObracategoriesComponent } from './components/obracategories/obracategories.component';
import { ObracategoriesService } from './components/obracategories/components/obracategories-table/obracategories.service';
import { ObracategoriesTableComponent } from './components/obracategories/components/obracategories-table/obracategories-table.component';
import { ObracategoriesEditModalComponent } from './components/obracategories/components/obracategories-table/obracategories-edit-modal/obracategories-edit-modal.component';
import { ObracategoriesAddModalComponent } from './components/obracategories/components/obracategories-table/obracategories-add-modal/obracategories-add-modal.component';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';

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
    NgbModalModule,
    BootstrapModalModule.forRoot({ container: document.body })    
  ],
  declarations: [
    Users,
    ProfileEdit,
    Admin,
    UsuariosEditForm,
    UsuariosTable,
    DataFilterPipe,
    DataFilterReasonsPipe,
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
    ReasonsEditModalComponent,
    TipoObraComponent,
    TipoObraTableComponent,
    TipoObraAddModalComponent,
    TipoObraEditModalComponent,
    TipoObraUploadModalComponent,
    ObracategoriesComponent,
    ObracategoriesTableComponent,
    ObracategoriesAddModalComponent,
    ObracategoriesEditModalComponent,
    FilesUploadModalComponent,
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
    ReasonsEditModalComponent,
    TipoObraAddModalComponent,
    TipoObraEditModalComponent,
    TipoObraUploadModalComponent,
    ObracategoriesAddModalComponent,
    ObracategoriesEditModalComponent,
    FilesUploadModalComponent,
  ],
  providers: [
    UserService,
    GroupsService,
    PermissionsService,
    LogsService,
    ReasonsService,
    TipoObraService,
    ObracategoriesService,
    ProfileEditService,
    FilesUploadModalService,
  ]
})
export class AdminModule {
}
