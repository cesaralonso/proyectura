import { UserResponseInterface } from './../user-response.interface';
import { AuthLocalstorage } from './../../../../../../../shared/auth-localstorage.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { UserService } from './../user.service';
import { Modals } from './../../../../../../ui/components/modals/modals.component';
import { UserInterface } from './../user.interface';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'edit-service-modal',
  styleUrls: [('./user-edit-modal.component.scss')],
  templateUrl: './user-edit-modal.component.html'
})

export class UserEditModalComponent implements OnInit {

  modalHeader: string;
  id: number;
  user: UserResponseInterface;


  form: FormGroup;
  submitted: boolean = false;
  nicknameauth: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;
  idusuario: AbstractControl;
  idrol: AbstractControl;
  usuario: AbstractControl;
  contrasena: AbstractControl;
  nombre: AbstractControl;
  email: AbstractControl;
  telefono: AbstractControl;
  idstatususuario: AbstractControl;
  emailsms: AbstractControl;

  private _claveauth: string;
  private _usuarioauth: string;
  private _nicknameauth: string;


  constructor(private service: UserService,
              private activeModal: NgbActiveModal,
              fb: FormBuilder,
              private toastrService: ToastrService,
              private localStorageService: LocalStorageService,
              private authLocalstorage: AuthLocalstorage) {


    const credenciales = this.authLocalstorage.getCredentials();

    this._claveauth = credenciales.claveauth;
    this._usuarioauth = credenciales.usuarioauth;
    this._nicknameauth = credenciales.nicknameauth;


    this.form = fb.group({
      'claveauth': this._claveauth,
      'nicknameauth': this._nicknameauth,
      'usuarioauth': this._usuarioauth,
      'idusuario': [this.id],
      'idrol': [''],
      'usuario': [''],
      'contrasena': [''],
      'nombre': [''],
      'email': [''],
      'telefono': [''],
      'idstatususuario': [''],
      'emailsms': [''],
    });

    this.idrol = this.form.controls['idrol'];
    this.usuario = this.form.controls['usuario'];
    this.contrasena = this.form.controls['contrasena'];
    this.nombre = this.form.controls['nombre'];
    this.email = this.form.controls['email'];
    this.telefono = this.form.controls['telefono'];
    this.idstatususuario = this.form.controls['idstatususuario'];
    this.emailsms = this.form.controls['emailsms'];
  }


  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.service
      .getUser(this.id)
      .subscribe(
        (user: UserResponseInterface[]) => {
          this.user = user[1];
          console.log('user', user[1]);
        });
  }

  closeModal() {
    this.activeModal.close();
  }

  onSubmit(values: UserInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .editUser(values)
        .subscribe(
            (data: any) => this.showToast(data, values));
    }
  }

  private showToast(data: any, values: UserInterface) {
    if (data.idRespuesta === 0) {
      this.toastrService.success(data.mensajeRespuesta);
      this.closeModal();
    } else {
      this.toastrService.error(data.mensajeRespuesta);
      // this.closeModal();
    }
  }


}


















