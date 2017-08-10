import { Injectable } from '@angular/core';

@Injectable()
export class GastosService {

 
  metricsTableData = [
    {
      proveedor: 'Home Depot',
      folio: '1234675342',
      importe: '10,392',
      file: true,
      pdf: true,
      xml: false
    },
    {
      proveedor: 'Home Depot',
      folio: '1234675342',
      importe: '10,392',
      file: true,
      pdf: true,
      xml: false
    },
    {
      proveedor: 'Aceros Murillo',
      folio: '1234675342',
      importe: '10,392',
      file: false,
      pdf: true,
      xml: false
    },
    {
      proveedor: 'Aceros Murillo',
      folio: '1234675342',
      importe: '10,392',
      file: false,
      pdf: true,
      xml: false
    },
    {
      proveedor: 'Construrama',
      folio: '1234675342',
      importe: '10,392',
      file: true,
      pdf: true,
      xml: false
    }
  ];


  constructor() {

  }
}
