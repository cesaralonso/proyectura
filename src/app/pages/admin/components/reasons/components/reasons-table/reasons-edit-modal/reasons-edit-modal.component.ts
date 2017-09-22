import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { AuthLocalstorage } from './../../../../../../../shared/auth-localstorage.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { ReasonsService } from './../reasons.service';
import { Modals } from './../../../../../../ui/components/modals/modals.component';
import { ReasonsInterface } from './../reasons.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'edit-service-modal',
  styleUrls: [('./reasons-edit-modal.component.scss')],
  templateUrl: './reasons-edit-modal.component.html'
})

export class ReasonsEditModalComponent extends DialogComponent<ReasonsInterface, any> implements OnInit, ReasonsInterface {
  
  idrazonsocial: number;
  razonsocial: string;
  nombre: string;
  rfc: string;
  direccion: string;
  calle: string;
  numeroexterior: string;
  numerointerior: string;
  colonia: string;
  municipio: string;
  ciudad: string;
  estado: string;
  pais: string;
  idtiporazonsocial: number;
  idstatusrazonsocial: number;
  baja: boolean;
  claveestatus: string;
  clavetipo: string;
  descripcionestatus: string;
  descripciontipo: string;
  fechahoraalta: string;
  fechahoracambio: string;
  idestatus: number;
  idtipo: number;
  idusuarioalta: number;
  idusuariocambio: number;
  _tiporazonsocial: string[];
  _estatusrazonsocial: string[];

  data: any;
  
  reasons: ReasonsInterface;

  modalHeader: string;
  id: number;

  form: FormGroup;
  submitted: boolean = false;

  nicknameauth: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;

  idrazonsocialAC: AbstractControl;
  razonsocialAC: AbstractControl;
  nombreAC: AbstractControl;
  rfcAC: AbstractControl;
  direccionAC: AbstractControl;
  calleAC: AbstractControl;
  numeroexteriorAC: AbstractControl;
  numerointeriorAC: AbstractControl;
  coloniaAC: AbstractControl;
  municipioAC: AbstractControl;
  ciudadAC: AbstractControl;
  estadoAC: AbstractControl;
  paisAC: AbstractControl;
  idstatusrazonsocialAC: AbstractControl;
  idtiporazonsocialAC: AbstractControl;

  private _claveauth: string;
  private _usuarioauth: string;
  private _nicknameauth: string;


  constructor(
    private service: ReasonsService,
    fb: FormBuilder,
    private toastrService: ToastrService,
    private localStorageService: LocalStorageService,
    private authLocalstorage: AuthLocalstorage,
    dialogService: DialogService
  ) {
    super(dialogService);

    this._tiporazonsocial = [];
    this._estatusrazonsocial = [];

    const credenciales = this.authLocalstorage.getCredentials();
    this._claveauth = credenciales.claveauth;
    this._usuarioauth = credenciales.usuarioauth;
    this._nicknameauth = credenciales.nicknameauth;

    this.form = fb.group({
      'claveauthAC': this._claveauth,
      'nicknameauthAC': this._nicknameauth,
      'usuarioauthAC': this._usuarioauth,
      'idrazonsocialAC': [''],
      'razonsocialAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'nombreAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'rfcAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'direccionAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'calleAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'numeroexteriorAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'numerointeriorAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'coloniaAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'municipioAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'ciudadAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'estadoAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'paisAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'idstatusrazonsocialAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'idtiporazonsocialAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });

    this.razonsocialAC = this.form.controls['razonsocialAC'];
    this.nombreAC = this.form.controls['nombreAC'];
    this.rfcAC = this.form.controls['rfcAC'];
    this.direccionAC = this.form.controls['direccionAC'];
    this.calleAC = this.form.controls['calleAC'];
    this.numeroexteriorAC = this.form.controls['numeroexteriorAC'];
    this.numerointeriorAC = this.form.controls['numerointeriorAC'];
    this.coloniaAC = this.form.controls['coloniaAC'];
    this.municipioAC = this.form.controls['municipioAC'];
    this.ciudadAC = this.form.controls['ciudadAC'];
    this.estadoAC = this.form.controls['estadoAC'];
    this.paisAC = this.form.controls['paisAC'];
    this.idstatusrazonsocialAC = this.form.controls['idstatusrazonsocialAC'];
    this.idtiporazonsocialAC = this.form.controls['idtiporazonsocialAC'];
  }


  ngOnInit() {
    console.log(this.idrazonsocial);
    console.log(this.razonsocial);
    console.log(this.nombre);
    // Obtiene Tipos de Razón Social
    this.service.obtenerTiposRazonSocial()
      .subscribe(
        (data: any) => this._tiporazonsocial = data,
      );

    // Obtiene Estatus de Razón Social
    this.service.obtenerEstatusRazonSocial()
      .subscribe(
        (data: any) => this._estatusrazonsocial = data,
      );

    this.getReasons();

  }


  getReasons() {
    this.service
        .getReasons(this.id)
        .subscribe(
            (data: any) => this.reasons = data[1]);
  }
  confirm() {
    this.result = this.data;
    this.close()
  }
  onSubmit(values: ReasonsInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .editReasons(values)
        .subscribe(
            (data: any) => {
              this.data = data;
              this.confirm();
            });
    }
  }

}


















