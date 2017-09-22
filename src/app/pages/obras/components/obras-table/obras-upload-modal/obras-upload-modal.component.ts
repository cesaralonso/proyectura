import { ToastrService } from 'ngx-toastr';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ObrasService } from './../obras.service';
import { ProfileEditService } from './../../../../admin/components/profile-edit/profile-edit.service';

import { AuthLocalstorage } from './../../../../../shared/auth-localstorage.service';
import { CredentialsInterface } from './../../../../../shared/credentials.interface';
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
  styleUrls: [('./obras-upload-modal.component.scss')],
  templateUrl: './obras-upload-modal.component.html'
})
export class ObrasUploadModalComponent implements OnInit {

  private credentials: CredentialsInterface = this.authLocalstorage.getCredentials();

  id: number;

  defaultPicture = 'assets/img/theme/no-photo.png';

  profile: any = {
    picture: 'assets/images/file.png',
  };

  fileUploaderOptions: NgUploaderOptions = {
    url: 'http://localhost/proyectura_api/v1/uploadImagen/obra-',
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
            proceso: 'Obras',
            tipoarchivo: response.type,
            urlarchivo: response.src,
        }
        this.service.setFile(archivo)
          .subscribe(
            (data: any) => this.showToast(data),
            error => console.log(error),
            () => this.activeModal.close());
      }
    }
  }

  showToast(data) {
    if (data.idRespuesta === 0) {
      this.toastrService.success(data.mensajeRespuesta);
    } else {
      this.toastrService.error(data.mensajeRespuesta);
    }
  }

  constructor(private service: ObrasService, 
              private authLocalstorage: AuthLocalstorage, 
              private activeModal: NgbActiveModal,
              private toastrService: ToastrService) {
  }

  closeModal() {
    this.activeModal.close();
  }

  ngOnInit() {
  }
}
