import { AuthService } from './../../../../shared/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CredentialsInterface } from './../../../../shared/credentials.interface';
import { AuthLocalstorage } from './../../../../shared/auth-localstorage.service';
import { Response } from '@angular/http';
import { ProfileEditService } from './profile-edit.service';
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
  selector: 'profile-edit',
  templateUrl: './profile-edit.html',
})
export class ProfileEdit implements OnInit {

  urlProfile: string;

  private credentials: CredentialsInterface = this.authLocalstorage.getCredentials();
  private idusuario: string = this.authLocalstorage.getIdUsuario();

  defaultPicture = 'assets/img/theme/no-photo.png';

  profile: any = {
    picture: this.urlProfile,
  };

  fileUploaderOptions: NgUploaderOptions = {
    url: 'http://aidihosting.com/proyectos/proyectura_api/v1/uploadImagen/profile-',
  };

  uploadCompled(event: any) {

    console.log("event", event);

    if (event.done) {
      const response = JSON.parse(event.response);
      if (response.status === 'success') {
        const archivo: ArchivoInterface = {
            nicknameauth: this.credentials.nicknameauth,
            usuarioauth: this.credentials.usuarioauth,
            claveauth: this.credentials.claveauth,
            idreferencia: +this.idusuario,
            proceso: "Usuario",
            tipoarchivo: response.type,
            urlarchivo: response.src,
        }
        this.service.setProfileImage(archivo)
          .subscribe(
            (data: any) => this.showToast(data),
            error => console.log(error),
            () => this.authLocalstorage.setAvatar(response.src));
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

  constructor(
    private service: ProfileEditService,
    private authLocalstorage: AuthLocalstorage,
    private toastrService: ToastrService,
    private authService: AuthService) {

      this.authService.profileAvatar()
        .then(
          data => {
            this.urlProfile = data;
            console.log('data',data);
          },
        );
  }

  ngOnInit() {
  }
  
}

