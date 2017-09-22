import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { TipoObraResponseInterface } from './../tipo-obra-response.interface';
import { AuthLocalstorage } from './../../../../../../../shared/auth-localstorage.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { TipoObraService } from './../tipo-obra.service';
import { Modals } from './../../../../../../ui/components/modals/modals.component';
import { TipoObraInterface } from './../tipo-obra.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'edit-service-modal',
  styleUrls: [('./tipo-obra-edit-modal.component.scss')],
  templateUrl: './tipo-obra-edit-modal.component.html'
})

export class TipoObraEditModalComponent extends DialogComponent<TipoObraInterface, any> implements OnInit {

  private _claveauth: string;
  private _usuarioauth: string;
  private _nicknameauth: string;
  data: any;

  baja: boolean;
  clavetipoobra: string;
  descripcion: string;
  fechahoraalta: string;
  fechahoracambio: string;
  idtipoobra: number;
  idusuarioalta: number;
  idusuariocambio: number;

  modalHeader: string;
  id: number;

  tipoobra: TipoObraInterface;

  form: FormGroup;
  submitted: boolean = false;
  nicknameauth: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;
  idtipoobraAC: AbstractControl;
  clavetipoobraAC: AbstractControl;
  descripcionAC: AbstractControl;

  constructor(
    private service: TipoObraService,
    fb: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private authLocalstorage: AuthLocalstorage,
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
      'idtipoobraAC': [this.id],
      'clavetipoobraAC': [''],
      'descripcionAC': [''],
    });

    this.clavetipoobraAC = this.form.controls['clavetipoobraAC'];
    this.descripcionAC = this.form.controls['descripcionAC'];
  }

  ngOnInit() {
    this.getTipoObra();
  }

  getTipoObra() {
    this.service
      .getTipoObra(this.id)
      .subscribe(
        (tipoobra: TipoObraInterface[]) => {
          this.tipoobra = tipoobra[1];
        });
  }
  confirm() {
    this.result = this.data;
    this.close();
  }
  onSubmit(values: TipoObraInterface): void {
    values.idtipoobra = this.idtipoobra;
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .editTipoObra({
          claveauth: this._claveauth,
          nicknameauth: this._nicknameauth,
          usuarioauth: this._usuarioauth,
          baja: this.baja,
          clavetipoobra: this.clavetipoobra,
          descripcion: this.descripcion,
          fechahoraalta: this.fechahoraalta,
          fechahoracambio: this.fechahoracambio,
          idtipoobra: this.idtipoobra,
          idusuarioalta: this.idusuarioalta,
          idusuariocambio: this.idusuariocambio
        })
        .subscribe(
            (data: TipoObraResponseInterface) => {
              this.data = data;
              this.confirm();
            });
    }
  }

  private showToast(data: TipoObraResponseInterface, values: TipoObraInterface) {
    if (data.idRespuesta === 0) {
      this.toastrService.success(data.mensajeRespuesta);
    } else {
      this.toastrService.error(data.mensajeRespuesta);
    }
  }


}


















