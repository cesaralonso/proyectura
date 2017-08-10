import { AuthLocalstorage } from './../../../../../../../shared/auth-localstorage.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { GroupsService } from './../groups.service';
import { Modals } from './../../../../../../ui/components/modals/modals.component';
import { GroupsInterface } from './../groups.interface';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'add-service-modal',
  styleUrls: [('./groups-add-modal.component.scss')],
  templateUrl: './groups-add-modal.component.html'
})

export class GroupsAddModalComponent implements OnInit {

  modalHeader: string;

  form: FormGroup;
  submitted: boolean = false;

  nicknameauth: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;
  idempresa: AbstractControl;
  rol: AbstractControl;
  descripcion: AbstractControl;
  visible: AbstractControl;


  private _claveauth: string;
  private _usuarioauth: string;
  private _nicknameauth: string;

  constructor(private service: GroupsService,
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
      'idempresa': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'rol': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'descripcion': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'visible': [''],
    });

    this.idempresa = this.form.controls['idempresa'];
    this.rol = this.form.controls['rol'];
    this.descripcion = this.form.controls['descripcion'];
    this.visible = this.form.controls['visible'];
  }


  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }

  onSubmit(values: GroupsInterface): void {
    this.submitted = true;

    console.log("values", values);

    if (this.form.valid) {
      this.service
        .addGroups(values)
        .subscribe(
            (data: any) => this.showToast(data, values));
    }
  }

  private showToast(data: any, values: GroupsInterface) {
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


















