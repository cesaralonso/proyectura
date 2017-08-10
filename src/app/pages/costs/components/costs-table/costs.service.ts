import { Observable } from 'rxjs/Observable';
import { CostsInterface } from './costs.interface';
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Configuration } from '../../../../app.constants';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CostsService {

    private actionUrl: string;
    private headers: Headers;


    constructor(private _http: Http, private _configuration: Configuration) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json; charset=UTF-8');
    }

    addCosts = (costs: CostsInterface): Observable<any> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}AgregarPermiso`;
        const toAdd = JSON.stringify(costs);
        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    editCosts = (costs: CostsInterface): Observable<any> =>  {
        this.actionUrl = `${this._configuration.ServerWithApiUrl}EditarPermiso`;
        const toAdd = JSON.stringify(costs);
        console.log('toAdd', toAdd);
        return this._http.post(this.actionUrl, toAdd, { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }

    costsData = [
        {
            id: 3,
            idempresa: 44,
            idrol: 12,
            usuario: 'Magaña',
            contrasena: '12345',
            nombre: 'Cesar',
            email: 'cesar@cesar.com',
            telefono: '123456',
            costo: 23456,
            idstatususuario: 1,
            emailsms: 'cesar@x.com',
            bfechainicial: true,
            fechainicial: '12/12/12'
        },
        {
            id: 2,
            idempresa: 31,
            idrol: 12,
            usuario: 'Alonso',
            contrasena: '12345',
            nombre: 'Cesar',
            email: 'cesar@cesar.com',
            telefono: '123456',
            costo: 23456,
            idstatususuario: 1,
            emailsms: 'string',
            bfechainicial: false,
            fechainicial: '11/12/17'
        },
        {
            id: 3,
            idempresa: 34,
            idrol: 12,
            usuario: 'Cesar',
            contrasena: '12345',
            nombre: 'Cesar',
            email: 'cesar@cesar.com',
            telefono: '123456',
            costo: 23456,
            idstatususuario: 1,
            emailsms: 'string',
            bfechainicial: true,
            fechainicial: '10/10/10'
        }
    ];

    getAllCosts(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.costsData);
            }, 1000);
        });
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}


