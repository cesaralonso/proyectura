import { AuthLocalstorage } from './../../../../../../../shared/auth-localstorage.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { ObracategoriesService } from './../obracategories.service';
import { Modals } from './../../../../../../ui/components/modals/modals.component';
import { ObracategoriesInterface } from './../obracategories.interface';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'add-service-modal',
  styleUrls: [('./obracategories-add-modal.component.scss')],
  templateUrl: './obracategories-add-modal.component.html'
})

export class ObracategoriesAddModalComponent implements OnInit {

 
  modalHeader: string;
  id: number;
  obracategories: ObracategoriesInterface;

  form: FormGroup;
  submitted: boolean = false;

  nicknameauth: AbstractControl;
  usuarioauth: AbstractControl;
  claveauth: AbstractControl;
  clavecategoria: AbstractControl;
  descripcion: AbstractControl;


  private _claveauth: string;
  private _usuarioauth: string;
  private _nicknameauth: string;


  constructor(private service: ObracategoriesService,
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
      'clavecategoria': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'descripcion': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });

    this.clavecategoria = this.form.controls['clavecategoria'];
    this.descripcion = this.form.controls['descripcion'];
  }


  ngOnInit() {}

  closeModal() {
    this.activeModal.close();
  }

  onSubmit(values: ObracategoriesInterface): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .addObracategories(values)
        .subscribe(
            (data: any) => this.showToast(data, values));
    }
  }

  private showToast(data: any, values: ObracategoriesInterface) {
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


















