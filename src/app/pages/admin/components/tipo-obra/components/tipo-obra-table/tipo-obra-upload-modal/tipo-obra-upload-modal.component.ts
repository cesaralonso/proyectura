import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TipoObraService } from './../tipo-obra.service';
import { ProfileEditService } from './../../../../../../admin/components/profile-edit/profile-edit.service';

import { AuthLocalstorage } from './../../../../../../../shared/auth-localstorage.service';
import { CredentialsInterface } from './../../../../../../../shared/credentials.interface';
import { Response } from '@angular/http';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { NgUploaderOptions } from 'ngx-uploader';

export interface ArchivoInterface {
  nicknameauth: string;
  usuarioauth: string;
  claveauth: string;
  idreferencia: number;
  proceso: string;
  tipoarchivo: string;
  urlarchivo: string;
}

@Component({
  selector: 'upload-service-modal',
  styleUrls: [('./tipo-obra-upload-modal.component.scss')],
  templateUrl: './tipo-obra-upload-modal.component.html'
})
export class TipoObraUploadModalComponent implements OnInit {

  private credentials: CredentialsInterface = this.authLocalstorage.getCredentials();

  id: number;

  defaultPicture = 'assets/img/theme/no-photo.png';

  profile: any = {
    picture: 'assets/images/file.png',
  };

  fileUploaderOptions: NgUploaderOptions = {
    url: 'http://localhost/slim/v1/uploadImagen/tipoobra-',
  };

  uploadCompled(event: any) {
    if (event.done) {
      const response = JSON.parse(event.response);
      if (response.status === 'success') {
        const archivo: ArchivoInterface = {
            nicknameauth: this.credentials.nicknameauth,
            usuarioauth: this.credentials.usuarioauth,
            claveauth: this.credentials.claveauth,
            idreferencia: this.id,
            proceso: 'TipoObra',
            tipoarchivo: response.type,
            urlarchivo: response.src,
        }
        this.service.setFile(archivo)
          .subscribe(
            (data: any) => console.log(data)
          );
      }
    }
  }

  constructor(private service: TipoObraService, 
              private authLocalstorage: AuthLocalstorage, 
              private activeModal: NgbActiveModal) {
  }

  closeModal() {
    this.activeModal.close();
  }

  ngOnInit() {
  }
}
