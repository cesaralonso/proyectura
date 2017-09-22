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
  selector: 'add-service-modal',
  styleUrls: [('./reasons-add-modal.component.scss')],
  templateUrl: './reasons-add-modal.component.html'
})

export class ReasonsAddModalComponent extends DialogComponent<ReasonsInterface, any> implements OnInit {

  _tiporazonsocial: string[];
  _estatusrazonsocial: string[];
  
  data: any;
  
  modalHeader: string;

  form: FormGroup;
  submitted: boolean = false;

  nicknameauth: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;

  razonsocial: AbstractControl;
  nombre: AbstractControl;
  rfc: AbstractControl;
  direccion: AbstractControl;
  calle: AbstractControl;
  numeroexterior: AbstractControl;
  numerointerior: AbstractControl;
  colonia: AbstractControl;
  municipio: AbstractControl;
  ciudad: AbstractControl;
  estado: AbstractControl;
  pais: AbstractControl;
  idstatusrazonsocial: AbstractControl;
  idtiporazonsocial: AbstractControl;

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

      'claveauth': this._claveauth,
      'nicknameauth': this._nicknameauth,
      'usuarioauth': this._usuarioauth,
      'razonsocial': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'nombre': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'rfc': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'direccion': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'calle': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'numeroexterior': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'numerointerior': [''],
      'colonia': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'municipio': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'ciudad': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'estado': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'pais': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'idstatusrazonsocial': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'idtiporazonsocial': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });

    this.razonsocial = this.form.controls['razonsocial'];
    this.nombre = this.form.controls['nombre'];
    this.rfc = this.form.controls['rfc'];
    this.direccion = this.form.controls['direccion'];
    this.calle = this.form.controls['calle'];
    this.numeroexterior = this.form.controls['numeroexterior'];
    this.numerointerior = this.form.controls['numerointerior'];
    this.colonia = this.form.controls['colonia'];
    this.municipio = this.form.controls['municipio'];
    this.ciudad = this.form.controls['ciudad'];
    this.estado = this.form.controls['estado'];
    this.pais = this.form.controls['pais'];
    this.idstatusrazonsocial = this.form.controls['idstatusrazonsocial'];
    this.idtiporazonsocial = this.form.controls['idtiporazonsocial'];
  }


  ngOnInit() {

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

  }
  confirm() {
    this.result = this.data;
    this.close()
  }
  onSubmit(values: ReasonsInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .addReasons(values)
        .subscribe(
            (data: any) => {
              this.data = data;
              this.confirm();
            });
    }
  }

}


















