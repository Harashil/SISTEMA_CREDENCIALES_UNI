import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumRowsService {

  constructor() { }
  defaultRows: number = 5;
  dynamicRows: { [key: string]: string } = {
    gestionarentidades: '5',
    asistenciayturnos: '5',
    reportesycredenciales: '5',
    distribuciondepersonal: '5'
  };
  setNumber(nuevoValor: string, path: string): void {
    this.dynamicRows[path] = nuevoValor;
    console.log(nuevoValor);
    console.log('ruta a enviar:',path);
    
  }
}
