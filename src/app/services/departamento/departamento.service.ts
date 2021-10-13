import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {


   URL_BASE = environment.API_URL;

    constructor(private http: HttpClient) { }
  
    InsertNewRecord(data: any, id: any): Observable<any> {
      return this.http.post(`${this.URL_BASE}departamento/nuevo/${id}`, data);
    }
  
    UpdateRecord(data: any): Observable<any> {
      return this.http.put(`${this.URL_BASE}departamento/actualizar`, data);
    }
  
    DeleteItemRecord(id: any): Observable<any> {
      return this.http.delete(`${this.URL_BASE}departamento/eliminar/${id}`);
    }
  
    BuscarRegistro(id: any) {
      const responce = fetch(`${this.URL_BASE}departamento/buscarbyid/${id}`);
      return responce;
    }

    async BuscarRegistroPorNombre(nombre: any) {
      const responce = await fetch(`${this.URL_BASE}departamento/buscarbyname/${nombre}`);
      return await responce.json();
    }
  
  
    /*async BuscarRegistro(id: any) {
      const responce = await fetch(`${this.URL_BASE}departamento/buscarbyid/${id}`);
      return await responce.json();
    }*/
  
  
    async listarDepartamentos() {
      const responce = await fetch(`${this.URL_BASE}departamento/listartodos`);
      return await responce.json();
    }
}
