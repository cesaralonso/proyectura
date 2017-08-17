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
  selector: 'add-service-modal',
  styleUrls: [('./user-add-modal.component.scss')],
  templateUrl: './user-add-modal.component.html'
})

export class UserAddModalComponent implements OnInit {

  modalHeader: string;

  form: FormGroup;
  submitted: boolean = false;

  nickname: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;
  idrol: AbstractControl;
  usuario: AbstractControl;
  contrasena: AbstractControl;
  nombre: AbstractControl;
  email: AbstractControl;
  telefono: AbstractControl;
  idstatususuario: AbstractControl;
  emailsms: AbstractControl;
  clave: AbstractControl;

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
      'idrol': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'usuario': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'contrasena': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'nombre': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'telefono': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
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


  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }

  onSubmit(values: UserInterface): void {
    this.submitted = true;

    if (this.form.valid) {
      this.service
        .addUser(values)
        .subscribe(
            (data: any) => this.showToast(data, values));
    }
  }

  private showToast(data: any, values: UserInterface) {
    if (data.idRespuesta === 0) {

      this.toastrService.success(data.mensajeRespuesta);
      this.closeModal();
    }

    if (data.idRespuesta === -1) {
      this.toastrService.error(data.mensajeRespuesta);
    }
  }


}


















