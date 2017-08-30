import { AuthLocalstorage } from './../../../../shared/auth-localstorage.service';
import { ObrasResponseInterface } from './obras-response.interface';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';
import { ObrasInterface } from './obras.interface';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Configuration } from '../../../../app.constants';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ObrasService {

    private actionUrl: string;
    private headers: Headers;


    constructor(
        private _http: Http, 
        private _configuration: Configuration, 
        private localStorageService: LocalStorageService,
        private authLocalstorage: AuthLocalstorage ) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    }

    addObras = (obras: ObrasInterface): Observable<ObrasResponseInterface> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}agregarObra`;
        const toAdd = JSON.stringify(obras);
        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasResponseInterface>response.json())
            .catch(this.handleError);
    }

    editObras = (obras: ObrasInterface): Observable<ObrasResponseInterface> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}modificarObra`;
        const toAdd = JSON.stringify(obras);
        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasResponseInterface>response.json())
            .catch(this.handleError);
    }

    getObras = (idObra: number): Observable<ObrasInterface> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerObrasPorIDObra`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idobra: idObra, // cambiado por idusuario
        });

        console.log('credenciales', toAdd);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasInterface>response.json())
            .catch(this.handleError);
            
    }

    getAllObras = (): Observable<ObrasInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerObras`;
       
        const credenciales = JSON.stringify(this.authLocalstorage.getCredentials());

        return this._http.post(this.actionUrl, credenciales, { headers: this.headers })
            .map((response: Response) => <ObrasInterface[]>response.json())
            .catch(this.handleError);
    }
    // No hay delete
    deleteObras = (id: string): Observable<ObrasResponseInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}bajaObras`;
       
        const credenciales = this.authLocalstorage.getCredentials();
        const toSend = JSON.stringify({
            'nicknameauth': credenciales.nicknameauth,
            'usuarioauth': credenciales.usuarioauth,
            'claveauth': credenciales.claveauth,
            'idusuario': id,
        });

        return this._http.post(this.actionUrl, toSend, { headers: this.headers })
            .map((response: Response) => <any[]>response.json())
            .catch(this.handleError);
    }

    autorizarObra = (idObra: number): Observable<ObrasResponseInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}autorizarObra`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idobra: idObra,
        });

        console.log('credenciales', toAdd);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasResponseInterface[]>response.json())
            .catch(this.handleError);
    }

    bloquearObra = (idObra: number): Observable<ObrasResponseInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}bloquearObra`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idobra: idObra,
        });

        console.log('credenciales', toAdd);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasResponseInterface[]>response.json())
            .catch(this.handleError);
    }

    cancelarObra = (idObra: number): Observable<ObrasResponseInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}CancelarObra`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idobra: idObra,
        });

        console.log('credenciales', toAdd);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasResponseInterface[]>response.json())
            .catch(this.handleError);
    }

    finalizarObra = (idObra: number): Observable<ObrasResponseInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}FinalizarObra`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idobra: idObra,
        });

        console.log('credenciales', toAdd);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasResponseInterface[]>response.json())
            .catch(this.handleError);
    }

    cambiarEstatusPorIdObra = (idObra: number, idEstatusObra: number): Observable<ObrasResponseInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}cambiarEstatusPorIDObra`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idobra: idObra,
            idestatusobra: idEstatusObra,
        });

        console.log('credenciales', toAdd);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasResponseInterface[]>response.json())
            .catch(this.handleError);
    }

    obtenerObrasPorIdRazonSocialCliente = (idRazonSocialCliente: number): Observable<ObrasInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerObrasPorIDRazonSocialCliente`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idrazonsocialcliente: idRazonSocialCliente,
        });

        console.log('credenciales', toAdd);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasInterface[]>response.json())
            .catch(this.handleError);
    }

    obtenerObrasPorIdRazonSocialContratista = (idRazonSocialContratista: number): Observable<ObrasInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerObrasPorIDRazonSocialContratista`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idrazonsocialcontratista: idRazonSocialContratista,
        });

        console.log('credenciales', toAdd);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasInterface[]>response.json())
            .catch(this.handleError);
    }

    obtenerObrasPorIdRazonSocialConstructor = (idRazonSocialConstructor: number): Observable<ObrasInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerObrasPorIDRazonSocialConstructor`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idrazonsocialconstructor: idRazonSocialConstructor,
        });

        console.log('credenciales', toAdd);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasInterface[]>response.json())
            .catch(this.handleError);
    }

    obtenerObrasPorIdRazonSocialAsociado = (idRazonSocialAsociado: number): Observable<ObrasInterface[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerObrasPorIDRazonSocialAsociado`;
        const credenciales = this.authLocalstorage.getCredentials();
        const toAdd = JSON.stringify({
            nicknameauth: credenciales.nicknameauth,
            usuarioauth: credenciales.usuarioauth,
            claveauth: credenciales.claveauth,
            idrazonsocialasociado: idRazonSocialAsociado,
        });

        console.log('credenciales', toAdd);

        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <ObrasInterface[]>response.json())
            .catch(this.handleError);
    }

    obtenerEstatusObras = (): Observable<any[]> => {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}obtenerEstatusObras`;

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
