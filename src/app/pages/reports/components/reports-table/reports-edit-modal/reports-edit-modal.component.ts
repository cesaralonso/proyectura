import { LocalStorageService } from 'angular-2-local-storage';
import { ReportsService } from './../reports.service';
import { Modals } from './../../../../ui/components/modals/modals.component';
import { ReportsInterface } from './../reports.interface';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'edit-service-modal',
  styleUrls: [('./reports-edit-modal.component.scss')],
  templateUrl: './reports-edit-modal.component.html'
})

export class ReportsEditModalComponent implements OnInit {

  modalHeader: string;
  id: number;

  form: FormGroup;
  submitted: boolean = false;

  nickname: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;
  idempresa: AbstractControl;
  idrol: AbstractControl;
  usuario: AbstractControl;
  contrasena: AbstractControl;
  nombre: AbstractControl;
  email: AbstractControl;
  telefono: AbstractControl;
  costo: AbstractControl;
  idstatususuario: AbstractControl;
  emailsms: AbstractControl;
  bfechainicial: AbstractControl;
  fechainicial: AbstractControl;
  clave: AbstractControl;

  private _claveauth: string;
  private _usuarioauth: string;
  private _nickname: string;
  private _idusuario: string;


  constructor(private service: ReportsService,
              private activeModal: NgbActiveModal,
              fb: FormBuilder,
              private toastrService: ToastrService,
              private localStorageService: LocalStorageService) {

    this._claveauth = this.localStorageService.get('claveauth').toString();
    this._usuarioauth = this.localStorageService.get('usuarioauth').toString();
    this._nickname = this.localStorageService.get('nickname').toString();
    this._idusuario = this.localStorageService.get('idusuario').toString();
 
    this.form = fb.group({

      'claveauth': this._claveauth,
      'nickname': this._nickname,
      'usuarioauth': this._usuarioauth,
      'idempresa': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'idrol': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'usuario': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'contrasena': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'nombre': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'telefono': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'costo': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'idstatususuario': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'emailsms': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'bfechainicial': [''],
      'fechainicial': ['', Validators.compose([Validators.required, Validators.minLength(8)])]

    });

    this.idempresa = this.form.controls['idempresa'];
    this.idrol = this.form.controls['idrol'];
    this.usuario = this.form.controls['usuario'];
    this.contrasena = this.form.controls['contrasena'];
    this.nombre = this.form.controls['nombre'];
    this.email = this.form.controls['email'];
    this.telefono = this.form.controls['telefono'];
    this.costo = this.form.controls['costo'];
    this.idstatususuario = this.form.controls['idstatususuario'];
    this.emailsms = this.form.controls['emailsms'];
    this.bfechainicial = this.form.controls['bfechainicial'];
    this.fechainicial = this.form.controls['fechainicial'];

  }


  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }

  onSubmit(values: ReportsInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .editReports(values)
        .subscribe(
            (data: any) => this.showToast(data, values));
    }
  }

  private showToast(data: any, values: ReportsInterface) {
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


















