import { AuthLocalstorage } from './../../../../../../../shared/auth-localstorage.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { ReasonsService } from './../reasons.service';
import { Modals } from './../../../../../../ui/components/modals/modals.component';
import { ReasonsInterface } from './../reasons.interface';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'add-service-modal',
  styleUrls: [('./reasons-add-modal.component.scss')],
  templateUrl: './reasons-add-modal.component.html'
})

export class ReasonsAddModalComponent implements OnInit {

  modalHeader: string;

  form: FormGroup;
  submitted: boolean = false;

  nicknameauth: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;

    idrazonsocial: AbstractControl;
    razonsocial: AbstractControl;
    nombre: AbstractControl;
    rfc: AbstractControl;
    direccion: AbstractControl;
    calle: AbstractControl;
    numexterior: AbstractControl;
    numinterior: AbstractControl;
    colonia: AbstractControl;
    municipio: AbstractControl;
    ciudad: AbstractControl;
    estado: AbstractControl;
    pais: AbstractControl;




  private _claveauth: string;
  private _usuarioauth: string;
  private _nicknameauth: string;


  constructor(private service: ReasonsService,
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
      'idrazonsocial': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'razonsocial': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'nombre': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'rfc': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'direccion': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'calle': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'numexterior': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'numinterior': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'colonia': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'municipio': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'ciudad': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'estado': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'pais': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });



    this.idrazonsocial = this.form.controls['idrazonsocial'];
    this.razonsocial = this.form.controls['razonsocial'];
    this.nombre = this.form.controls['nombre'];
    this.rfc = this.form.controls['rfc'];
    this.direccion = this.form.controls['direccion'];
    this.calle = this.form.controls['calle'];
    this.numexterior = this.form.controls['numexterior'];
    this.numinterior = this.form.controls['numinterior'];
    this.colonia = this.form.controls['colonia'];
    this.municipio = this.form.controls['municipio'];
    this.ciudad = this.form.controls['ciudad'];
    this.estado = this.form.controls['estado'];
    this.pais = this.form.controls['pais'];
  }


  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }

  onSubmit(values: ReasonsInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .addReasons(values)
        .subscribe(
            (data: any) => this.showToast(data, values));
    }
  }

  private showToast(data: any, values: ReasonsInterface) {
    if (data.idRespuesta === 0) {

      this.toastrService.success(data.mensajeRespuesta);
      this.closeModal();
    }

    if (data.idRespuesta === -1) {
      this.toastrService.error(data.mensajeRespuesta);
      // this.closeModal();
    }
  }


}


















