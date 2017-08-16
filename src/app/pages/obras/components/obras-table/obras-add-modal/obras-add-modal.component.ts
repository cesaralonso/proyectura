import { ObrasService } from './../obras.service';
import { Modals } from './../../../../ui/components/modals/modals.component';
import { Obras } from './../obras.interface';
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

  modalHeader: string;

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


  constructor(private service: ObrasService,
              private activeModal: NgbActiveModal,
              fb: FormBuilder,
              private toastrService: ToastrService) {

    this.form = fb.group({
      'clave': ['2058'],
      'nickname': ['@Ideasys'],
      'usuarioauth': ['super'],
      'claveauth': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'idempresa': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'idrol': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'usuario': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'contrasena': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'nombre': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'email': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'telefono': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'costo': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'idstatususuario': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'emailsms': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'bfechainicial': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'fechainicial': ['', Validators.compose([Validators.required, Validators.minLength(2)])]
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

  onSubmit(values: Obras): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .AddObras(values)
        .subscribe(
            (data: any) => this.showToast(data, values));
    }
  }

  private showToast(data: any, values: Obras) {
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


















