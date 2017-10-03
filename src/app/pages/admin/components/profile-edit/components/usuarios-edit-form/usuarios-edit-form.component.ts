import { UserInterface } from './../../../users/components/usuarios-table/user.interface';
import { UserService } from './../../../users/components/usuarios-table/user.service';
import { Modals } from './../../../../../ui/components/modals/modals.component';
import { AuthLocalstorage } from './../../../../../../shared/auth-localstorage.service';
import { UserResponseInterface } from './../../../users/components/usuarios-table/user-response.interface';
import { LocalStorageService } from 'angular-2-local-storage';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'usuarios-edit-form',
  templateUrl: './usuarios-edit-form.html',
})

export class UsuariosEditForm implements OnInit {

  _estatususuarios: string[];
  isRemember: boolean = false;

  modalHeader: string;
  id: number;
  user: UserResponseInterface;

  form: FormGroup;
  submitted: boolean = false;
  nicknameauth: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;
  usuarioAC: AbstractControl;
  nombreAC: AbstractControl;
  emailAC: AbstractControl;
  telefonoAC: AbstractControl;
  idstatususuarioAC: AbstractControl;

  private _claveauth: string;
  private _usuarioauth: string;
  private _nicknameauth: string;


  constructor(private service: UserService,
              fb: FormBuilder,
              private toastrService: ToastrService,
              private localStorageService: LocalStorageService,
              private authLocalstorage: AuthLocalstorage) {

    this._estatususuarios = [];
    const credenciales = this.authLocalstorage.getCredentials();

    this._claveauth = credenciales.claveauth;
    this._usuarioauth = credenciales.usuarioauth;
    this._nicknameauth = credenciales.nicknameauth;


    this.form = fb.group({
      'usuarioAC': [''],
      'nombreAC': [''],
      'emailAC': [''],
      'telefonoAC': [''],
      'idstatususuarioAC': [''],
    });

    this.usuarioAC = this.form.controls['usuarioAC'];
    this.nombreAC = this.form.controls['nombreAC'];
    this.emailAC = this.form.controls['emailAC'];
    this.telefonoAC = this.form.controls['telefonoAC'];
    this.idstatususuarioAC = this.form.controls['idstatususuarioAC'];
  }


  ngOnInit() {
    this.getUser();
    this.obtenerEstatusUsuarios();
  }

  obtenerEstatusUsuarios() {
    // Obtiene Estatus de Usuarios
    this.service.obtenerEstatusUsuarios()
      .subscribe(
        (data: any) => this._estatususuarios = data,
      );
  }

  toInt(tochange: any): number {
      return +tochange;
  }

  private getUser() {

    const userId = this.toInt(this.localStorageService.get('idusuario').toString());

    this.service
      .getUser(userId)
      .subscribe(
        (user: UserResponseInterface[]) => {
          this.user = user[1];
        });
  }

  onSubmit(values: UserInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .editUser({
                claveauth: this._claveauth,
                nicknameauth: this._nicknameauth,
                usuarioauth: this._usuarioauth,
                idusuario: this.user.idusuario,
                idrol: this.user.idrol,
                usuario: this.user.usuario,
                contrasena: this.user.contrasena,
                nombre: this.user.nombre,
                email: this.user.email,
                telefono: this.user.telefono,
                idstatususuario: this.user.idstatususuario,
                emailsms: '',
            })
        .subscribe(
            (data: any) => this.showToast(data, values));
    }
  }

  private showToast(data: any, values: UserInterface) {
    if (data.idRespuesta === 0) {
      this.toastrService.success(data.mensajeRespuesta);
    } else {
      this.toastrService.error(data.mensajeRespuesta);
    }
  }
}
