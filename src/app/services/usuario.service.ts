import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  
  constructor(private http: HttpClient) { }

   url="http://localhost:8080/SPMBackend";

   getUsuario(){
     //return this.http.get<Usuario>() => {}
     
   }
}
