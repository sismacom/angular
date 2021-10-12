import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  URL_BASE = environment.API_URL;
  
  constructor(private http: HttpClient) { }

  InsertRecord(data: any): Observable<any> {
    return this.http.post(`${this.URL_BASE}pais/nuevo`, data);
  }

  UpdateRecord(data: any, id: any): Observable<any> {
    return this.http.put(`${this.URL_BASE}pais/actualizar/${id}`, data);
  }

  DeleteItemRecord(id: any): Observable<any> {
    return this.http.delete(`${this.URL_BASE}pais/eliminar/${id}`);
  }
  
  BuscarRegistro(id: any) {
    const responce = fetch(`${this.URL_BASE}pais/buscarbyid/${id}`);
    return responce;
  }

  async BuscarRegistroPorNombre(nombre: any) {
    const responce = await fetch(`${this.URL_BASE}pais/buscarbyname/${nombre}`);
    return await responce.json();
  }

  async listarPaises() {
    const responce = await fetch(`${this.URL_BASE}pais/listartodos`);
    return await responce.json();
  }
  

  listarPaises2() {
    const responce = fetch(`${this.URL_BASE}pais/listartodos`);
    return responce;
  }

  /*async BuscarRegistro(id: any) {
    const responce = await fetch(`${this.URL_BASE}pais/buscarbyid/${id}`);
    return await responce.json();
  }*/


  /*async listarPaises() {
    const responce = await fetch(`${this.URL_BASE}pais/listartodos`);
    return await responce.json();
  }*/


}
