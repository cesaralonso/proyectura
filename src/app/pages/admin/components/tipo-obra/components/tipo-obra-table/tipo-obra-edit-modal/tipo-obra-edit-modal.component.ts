import { TipoObraResponseInterface } from './../tipo-obra-response.interface';
import { AuthLocalstorage } from './../../../../../../../shared/auth-localstorage.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { TipoObraService } from './../tipo-obra.service';
import { Modals } from './../../../../../../ui/components/modals/modals.component';
import { TipoObraInterface } from './../tipo-obra.interface';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'edit-service-modal',
  styleUrls: [('./tipo-obra-edit-modal.component.scss')],
  templateUrl: './tipo-obra-edit-modal.component.html'
})

export class TipoObraEditModalComponent implements OnInit {

  private _claveauth: string;
  private _usuarioauth: string;
  private _nicknameauth: string;

  modalHeader: string;
  id: number;
  tipoobra: TipoObraInterface;

  form: FormGroup;
  submitted: boolean = false;
  nicknameauth: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;
  idtipoobra: AbstractControl;
  clavetipoobra: AbstractControl;
  descripcion: AbstractControl;

  constructor(private service: TipoObraService,
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
      'idtipoobra': [this.id],
      'clavetipoobra': [''],
      'descripcion': [''],
    });
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

  closeModal() {
    this.activeModal.close();
  }

  onSubmit(values: TipoObraInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .editTipoObra(values)
        .subscribe(
            (data: TipoObraResponseInterface) => this.showToast(data, values));
    }
  }

  private showToast(data: TipoObraResponseInterface, values: TipoObraInterface) {
    if (data.idRespuesta === 0) {
      this.toastrService.success(data.mensajeRespuesta);
      this.closeModal();
    } else {
      this.toastrService.error(data.mensajeRespuesta);
    }
  }


}


















