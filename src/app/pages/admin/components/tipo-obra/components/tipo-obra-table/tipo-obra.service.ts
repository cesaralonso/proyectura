import { AuthLocalstorage } from './../../../../../../shared/auth-localstorage.service';
import { TipoObraResponseInterface } from './tipo-obra-response.interface';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import { TipoObraInterface } from './tipo-obra.interface';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Configuration } from '../../../../../../app.constants';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TipoObraService {

    private actionUrl: string;
    private headers: Headers;


    constructor(
        private _http: Http, 
        private _configuration: Configuration, 
        private localStorageService: LocalStorageService,
        private authLocalstorage: AuthLocalstorage ) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');

        
        console.log('localStorageService', this.localStorageService);

    }

    addTipoObra = (tipoobra: TipoObraInterface): Observable<any> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}AgregarTipoObra`;
        const toAdd = JSON.stringify(tipoobra);
        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    editTipoObra = (tipoobra: TipoObraInterface): Observable<any> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}ModificarTipoObra`;
        const toAdd = JSON.stringify(tipoobra);
        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    getTipoObra = (id: number): Observable<TipoObraInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerTipoObra`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idusuario: id,
        });

        console.log('credenciales', toAdd);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <TipoObraInterface[]>response.json())
            .catch(this.handleError);
    }

    getAllTipoObras = (): Observable<TipoObraInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerTipoObras`;
       
        const credenciales = JSON.stringify(this.authLocalstorage.getCredentials());

        return this._http.post(this.actionUrl, credenciales, { headers: this.headers })
            .map((response: Response) => <TipoObraInterface[]>response.json())
            .catch(this.handleError);
    }

    deleteTipoObra = (id: string): Observable<TipoObraResponseInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}bajaTipoObra`;
       
        const credenciales = this.authLocalstorage.getCredentials();
        const toSend = JSON.stringify({
            'nicknameauth': credenciales.nicknameauth,
            'usuarioauth': credenciales.usuarioauth,
            'claveauth': credenciales.claveauth,
            'idtipoobra': id,
        });

        return this._http.post(this.actionUrl, toSend, { headers: this.headers })
            .map((response: Response) => <any[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}


