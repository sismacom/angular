import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  URL_BASE = environment.API_URL;

  constructor(private http: HttpClient) { }

  InsertRecord(data: any, id: any): Observable<any> {
    return this.http.post(`${this.URL_BASE}region/nuevo/${id}`, data);
  }

  UpdateRecord(data: any, id: any): Observable<any> {
    return this.http.put(`${this.URL_BASE}region/actualizar/${id}`, data);
  }

  DeleteItemRecord(id: any): Observable<any> {
    return this.http.delete(`${this.URL_BASE}region/eliminar/${id}`);
  }

  BuscarRegistro(id: any) {
    const responce = fetch(`${this.URL_BASE}region/buscarbyid/${id}`);
    return responce;
  }


  /*async BuscarRegistro(id: any) {
    const responce = await fetch(`${this.URL_BASE}region/buscarbyid/${id}`);
    return await responce.json();
  }*/


  async listarPaises() {
    const responce = await fetch(`${this.URL_BASE}region/listartodos`);
    return await responce.json();
  }
}
