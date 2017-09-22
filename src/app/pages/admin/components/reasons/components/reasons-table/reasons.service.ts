import { CredentialsInterface } from './../../../../../../shared/credentials.interface';
import { AuthLocalstorage } from './../../../../../../shared/auth-localstorage.service';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import { ReasonsInterface } from './reasons.interface';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Configuration } from '../../../../../../app.constants';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReasonsService {

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

    addReasons = (reasons: ReasonsInterface): Observable<any> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}AgregarRazonSocial`;
        const toAdd = JSON.stringify(reasons);
        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    editReasons = (reasons: ReasonsInterface): Observable<any> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}ModificarRazonSocial`;
        const toAdd = JSON.stringify(reasons);
        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    deleteReasons = (id: string): Observable<any[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}bajaRazonSocial`;
       
        const credenciales = this.authLocalstorage.getCredentials();
        const toSend = JSON.stringify({
            'nicknameauth': credenciales.nicknameauth,
            'usuarioauth': credenciales.usuarioauth,
            'claveauth': credenciales.claveauth,
            'idrazonsocial': id,
        });

        return this._http.post(this.actionUrl, toSend, { headers: this.headers })
            .map((response: Response) => <any[]>response.json())
            .catch(this.handleError);
    }

    getReasons = (id: number): Observable<ReasonsInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerRazonSocial`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idrazonsocial: id,
        });

        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ReasonsInterface[]>response.json())
            .catch(this.handleError);
    }
    
    getAll = (): Observable<any> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerRazonesSociales`;

        const _credentials = JSON.stringify(this.credentials);
        return this._http.post(this.actionUrl, _credentials, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    obtenerEstatusRazonSocial = (): Observable<any[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}ObtenerEstatusRazonSocial`;

        const credenciales = this.authLocalstorage.getCredentials();
        return this._http.post(this.actionUrl, credenciales, { headers: this.headers })
            .map((response: Response) => <any[]>response.json())
            .catch(this.handleError);
    }

    obtenerTiposRazonSocial = (): Observable<any[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}ObtenerTiposRazonSocial`;

        const credenciales = this.authLocalstorage.getCredentials();
        return this._http.post(this.actionUrl, credenciales, { headers: this.headers })
            .map((response: Response) => <any[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}


