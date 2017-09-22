import { NgModule } from '@angular/core';
import { FilesUploadModalService } from './file-upload-modal.service';
import { FilesUploadModalComponent } from './files-upload-modal.component';


@NgModule({
  imports: [
  ],
  declarations: [
    FilesUploadModalComponent,
  ],
  entryComponents: [
    FilesUploadModalComponent,
  ],
  providers: [
    FilesUploadModalService,
  ]
})
export class FilesUploadModalModule {
}
