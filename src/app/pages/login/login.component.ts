import { LoginResponseInterface } from './login-response.interface';
import { LoginInterface } from './login.interface';
import { AuthService } from './../../shared/auth.service';
import { AuthLocalstorage } from './../../shared/auth-localstorage.service';
import { Component } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {

  items: any;

  form: FormGroup;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;
  nicknameauth: AbstractControl;
  submitted: boolean = false;

  constructor(fb: FormBuilder,
              protected service: AuthService, 
              private authLocalstorage: AuthLocalstorage,
              private toastrService: ToastrService,
              private router: Router) {
    this.form = fb.group({
      'usuarioauth': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'claveauth': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'nicknameauth': 'ideasys'
    });

    this.usuarioauth = this.form.controls['usuarioauth'];
    this.claveauth = this.form.controls['claveauth'];
  }

  onSubmit(values: LoginInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .login(values)
        .subscribe(
            (response: LoginResponseInterface) => this.showModal(response, values));
    }
  }

  private showModal(response: LoginResponseInterface, credentials: LoginInterface) {
    if (response.idRespuesta === 0) {
      this.toastrService.success(response.mensajeRespuesta);
      this.authLocalstorage.setCredentials(credentials, response);
      this.router.navigate(['pages/dashboard']);
    } else {
      this.toastrService.error(response.mensajeRespuesta);
      this.authLocalstorage.clearAll();
    }
  }

}