import { CredentialsInterface } from './../../../../../../shared/credentials.interface';
import { AuthLocalstorage } from './../../../../../../shared/auth-localstorage.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import { ObracategoriesInterface } from './obracategories.interface';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Configuration } from '../../../../../../app.constants';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ObracategoriesService {

    private actionUrl: string;
    private headers: Headers;


    constructor(
        private _http: Http, 
        private _configuration: Configuration, 
        private localStorageService: LocalStorageService,
        private authLocalstorage: AuthLocalstorage) {

        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    }

    private credentials: CredentialsInterface = this.authLocalstorage.getCredentials();

    addObracategories = (obracategories: ObracategoriesInterface): Observable<any> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}AgregarCategoria`;
        const toAdd = JSON.stringify(obracategories);
        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    editObracategories = (obracategories: ObracategoriesInterface): Observable<any> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}ModificarCategoria`;
        const toAdd = JSON.stringify(obracategories);
        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    deleteObracategories = (id: string): Observable<any[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}bajaCategoria`;
       
        const credenciales = this.authLocalstorage.getCredentials();
        const toSend = JSON.stringify({
            'nicknameauth': credenciales.nicknameauth,
            'usuarioauth': credenciales.usuarioauth,
            'claveauth': credenciales.claveauth,
            'idcategoria': id,
        });

        return this._http.post(this.actionUrl, toSend, { headers: this.headers })
            .map((response: Response) => <any[]>response.json())
            .catch(this.handleError);
    }

    getObracategories = (id: number): Observable<ObracategoriesInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerCategoria`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idrazonsocial: id,
        });

        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObracategoriesInterface[]>response.json())
            .catch(this.handleError);
    }
    
    getAll = (): Observable<any> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerCategorias`;

        const _credentials = JSON.stringify(this.credentials);
        return this._http.post(this.actionUrl, _credentials, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}


