import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ObrasService } from './../obras.service';
import { ProfileEditService } from './../../../../admin/components/profile-edit/profile-edit.service';

import { AuthLocalstorage } from './../../../../../shared/auth-localstorage.service';
import { CredentialsInterface } from './../../../../../shared/credentials.interface';
import { Response } from '@angular/http';
import { Component, OnInit, EventEmitter } from '@angular/core';


@Component({
  selector: 'files-service-modal',
  styleUrls: [('./files-upload-modal.component.scss')],
  templateUrl: './files-upload-modal.component.html'
})
export class FilesUploadModalComponent implements OnInit {

  private credentials: CredentialsInterface = this.authLocalstorage.getCredentials();

  id: number;
  referencia: string;
  files: any[];

  constructor(private service: ObrasService, 
              private authLocalstorage: AuthLocalstorage, 
              private activeModal: NgbActiveModal) {
  }

  closeModal() {
    this.activeModal.close();
  }

  ngOnInit() {
    this.getFiles();
  }

  getFiles() {
    this.service.getFiles(this.id, this.referencia)
      .subscribe(
        (data) => this.files = data,
      );
  }
}
