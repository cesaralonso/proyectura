import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { Router } from '@angular/router';
import { AuthLocalstorage } from './../../../../../../../shared/auth-localstorage.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { TipoObraService } from './../tipo-obra.service';
import { Modals } from './../../../../../../ui/components/modals/modals.component';
import { TipoObraInterface } from './../tipo-obra.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'add-service-modal',
  styleUrls: [('./tipo-obra-add-modal.component.scss')],
  templateUrl: './tipo-obra-add-modal.component.html'
})

export class TipoObraAddModalComponent extends DialogComponent<TipoObraInterface, any> implements OnInit {

  private _claveauth: string;
  private _usuarioauth: string;
  private _nicknameauth: string;
  data: any;
  modalHeader: string;
  submitted: boolean = false;

  form: FormGroup;
  nickname: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;
  clavetipoobra: AbstractControl;
  descripcion: AbstractControl;

  constructor(
    private service: TipoObraService,
    fb: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private authLocalstorage: AuthLocalstorage,
    private router: Router,
    dialogService: DialogService
  
  ) {
    super(dialogService);
    const credenciales = this.authLocalstorage.getCredentials();
    this._claveauth = credenciales.claveauth;
    this._usuarioauth = credenciales.usuarioauth;
    this._nicknameauth = credenciales.nicknameauth;

    this.form = fb.group({
      'claveauth': this._claveauth,
      'nicknameauth': this._nicknameauth,
      'usuarioauth': this._usuarioauth,
      'clavetipoobra': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'descripcion': ['', Validators.compose([Validators.required, Validators.minLength(1)])],

    });

    this.clavetipoobra = this.form.controls['clavetipoobra'];
    this.descripcion = this.form.controls['descripcion'];

  }

  ngOnInit() {}

  confirm() {
    this.result = this.data;
    this.close()
  }
  onSubmit(values: TipoObraInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .addTipoObra(values)
        .subscribe(
            (data: any) => {
              this.data = data;
              this.confirm();
            });
    }
  }

  private showToast(data: any, values: TipoObraInterface) {
    if (data.idRespuesta === 0) {
      this.toastrService.success(data.mensajeRespuesta);
    }

    if (data.idRespuesta === -1) {
      this.toastrService.error(data.mensajeRespuesta);
    }
  }

}


















