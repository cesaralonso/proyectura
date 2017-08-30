import { AuthLocalstorage } from './../../../../../shared/auth-localstorage.service';
import { ObrasService } from './../obras.service';
import { Modals } from './../../../../ui/components/modals/modals.component';
import { ObrasInterface } from './../obras.interface';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'add-service-modal',
  styleUrls: [('./obras-add-modal.component.scss')],
  templateUrl: './obras-add-modal.component.html'
})

export class ObrasAddModal implements OnInit {


  estatusObras: string[];
  _razonsocialasociado: string[];
  _razonsocialconstructor: string[];
  _razonsocialcontratista: string[];
  _razonsocialcliente: string[];


  modalHeader: string;

  form: FormGroup;
  submitted: boolean = false;

  descripcion: AbstractControl;
  direccion: AbstractControl;
  medidasterreno: AbstractControl;
  medidasconstruccion: AbstractControl;
  fechainicio: AbstractControl;
  fechafin: AbstractControl;
  idtipoobra: AbstractControl;
  presupuesto: AbstractControl;
  idrazonsocialcliente: AbstractControl;
  idrazonsocialcontratista: AbstractControl;
  idrazonsocialconstructor: AbstractControl;
  idrazonsocialasociado: AbstractControl;
  posiciongps: AbstractControl;
  idestatusobra: AbstractControl;
  observaciones: AbstractControl;
  desctipoobra: AbstractControl;
  direccioncliente: AbstractControl;
  razonsocialcontratista: AbstractControl;
  razonsocialconstructor: AbstractControl;
  razonsocialasociado: AbstractControl;
  claveestatusobra: AbstractControl;
  tipoobra: AbstractControl;

  private _claveauth: string;
  private _usuarioauth: string;
  private _nicknameauth: string;


  constructor(private service: ObrasService,
              private activeModal: NgbActiveModal,
              fb: FormBuilder,
              private toastrService: ToastrService,
              private authLocalstorage: AuthLocalstorage) {

    this._razonsocialasociado = [];
    this._razonsocialconstructor = [];
    this._razonsocialcontratista = [];
    this._razonsocialcliente = [];


    const credenciales = this.authLocalstorage.getCredentials();
    
        this._claveauth = credenciales.claveauth;
        this._usuarioauth = credenciales.usuarioauth;
        this._nicknameauth = credenciales.nicknameauth;
    

    this.form = fb.group({
      'claveauth': this._claveauth,
      'nicknameauth': this._nicknameauth,
      'usuarioauth': this._usuarioauth,
      'descripcion' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'direccion' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'medidasterreno' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'medidasconstruccion' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'fechainicio' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'fechafin' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'idtipoobra' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'presupuesto' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'idrazonsocialcliente' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'idrazonsocialcontratista' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'idrazonsocialconstructor' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'idrazonsocialasociado' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'posiciongps' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'idestatusobra' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'observaciones' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'desctipoobra' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'direccioncliente' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'razonsocialcontratista' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'razonsocialconstructor' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'razonsocialasociado' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'claveestatusobra' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'tipoobra' : ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      
    });

    this.descripcion = this.form.controls['descripcion'];
    this.direccion = this.form.controls['direccion'];
    this.medidasterreno = this.form.controls['medidasterreno'];
    this.medidasconstruccion = this.form.controls['medidasconstruccion'];
    this.fechainicio = this.form.controls['fechainicio'];
    this.fechafin = this.form.controls['fechafin'];
    this.idtipoobra = this.form.controls['idtipoobra'];
    this.presupuesto = this.form.controls['presupuesto'];
    this.idrazonsocialcliente = this.form.controls['idrazonsocialcliente'];
    this.idrazonsocialcontratista = this.form.controls['idrazonsocialcontratista'];
    this.idrazonsocialconstructor = this.form.controls['idrazonsocialconstructor'];
    this.idrazonsocialasociado = this.form.controls['idrazonsocialasociado'];
    this.posiciongps = this.form.controls['posiciongps'];
    this.idestatusobra = this.form.controls['idestatusobra'];
    this.observaciones = this.form.controls['observaciones'];
    this.desctipoobra = this.form.controls['desctipoobra'];
    this.direccioncliente = this.form.controls['direccioncliente'];
    this.razonsocialcontratista = this.form.controls['razonsocialcontratista'];
    this.razonsocialconstructor = this.form.controls['razonsocialconstructor'];
    this.razonsocialasociado = this.form.controls['razonsocialasociado'];
    this.claveestatusobra = this.form.controls['claveestatusobra'];
    this.tipoobra = this.form.controls['tipoobra'];
  }


  ngOnInit() {

    // Obtiene Estatus de Obras
    this.service.obtenerEstatusObras()
      .subscribe(
        (data: any) => this.estatusObras = data,
      );

      
      
      


  }

  closeModal() {
    this.activeModal.close();
  }

  onSubmit(values: ObrasInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .addObras(values)
        .subscribe(
            (data: any) => this.showToast(data, values));
    }
  }

  private showToast(data: any, values: ObrasInterface) {
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
