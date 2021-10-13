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

  UpdateRecord(data: any): Observable<any> {
    return this.http.put(`${this.URL_BASE}region/actualizar`, data);
  }

  DeleteItemRecord(id: any): Observable<any> {
    return this.http.delete(`${this.URL_BASE}region/eliminar/${id}`);
  }

  BuscarRegionById(id: any) {
    const responce = fetch(`${this.URL_BASE}region/buscarbyid/${id}`);
    return responce;
  }

  async BuscarRegionPorNombre(nombre: any) {
    const responce = await fetch(`${this.URL_BASE}region/buscarbyname/${nombre}`);
    return await responce.json();
  }

  async listarRegiones() {
    const responce = await fetch(`${this.URL_BASE}region/listartodos`);
    return await responce.json();
  }
}
