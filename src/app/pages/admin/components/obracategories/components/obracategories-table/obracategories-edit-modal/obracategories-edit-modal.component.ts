import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';
import { AuthLocalstorage } from './../../../../../../../shared/auth-localstorage.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { ObracategoriesService } from './../obracategories.service';
import { Modals } from './../../../../../../ui/components/modals/modals.component';
import { ObracategoriesInterface } from './../obracategories.interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'edit-service-modal',
  styleUrls: [('./obracategories-edit-modal.component.scss')],
  templateUrl: './obracategories-edit-modal.component.html'
})

export class ObracategoriesEditModalComponent extends DialogComponent<ObracategoriesInterface, any> implements OnInit, ObracategoriesInterface {

  idcategoria: number;
  clavecategoria: string;
  descripcion: string;
  nicknameauth: string;
  usuarioauth: string;
  claveauth: string;

  modalHeader: string;
  id: number;
  obracategories: ObracategoriesInterface;
  data: any;
  form: FormGroup;
  submitted: boolean = false;

  nicknameauthAC: AbstractControl;
  usuarioauthAC: AbstractControl;
  claveauthAC: AbstractControl;
  idcategoriaAC: AbstractControl;
  clavecategoriaAC: AbstractControl;
  descripcionAC: AbstractControl;

  private _claveauth: string;
  private _usuarioauth: string;
  private _nicknameauth: string;

  constructor(
    private service: ObracategoriesService,
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
      'claveauthAC': this._claveauth,
      'nicknameauthAC': this._nicknameauth,
      'usuarioauthAC': this._usuarioauth,
      'idcategoriaAC': this.id,
      'clavecategoriaAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'descripcionAC': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
    });

    this.clavecategoriaAC = this.form.controls['clavecategoriaAC'];
    this.descripcionAC = this.form.controls['descripcionAC'];
  }


  ngOnInit() {
    this.getObracategories();
  }

  getObracategories() {
    this.service
      .getObracategories(this.id)
      .subscribe(
        (obracategories: ObracategoriesInterface[]) => {
          this.obracategories = obracategories[1];
          console.log('obracategories', obracategories[1]);
        });
  }
  confirm() {
    this.result = this.data;
    this.close();
  }
  onSubmit(values: ObracategoriesInterface): void {
    console.log('onsubmit');
    this.submitted = true;
    if (this.form.valid) {
      this.service
        .editObracategories({
          idcategoria: this.idcategoria,
          nicknameauth: this._nicknameauth,
          usuarioauth: this._usuarioauth,
          claveauth: this._claveauth,
          clavecategoria: this.clavecategoria,
          descripcion: this.descripcion,
        })
        .subscribe(
            (data: any) => {
              this.data = data;
              this.confirm();
            });
    }
  }
}


















