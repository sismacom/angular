import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {


  usuarioUrl = "http://localhost:8080/api";

  constructor(private httpClient: HttpClient) { }

  usuarios(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.usuarioUrl + "usuario")
  }

  autenticar(usuario:Usuario) {
    //TODO: HACER LA VALIDACION DEL USUARIO CONECTADO AL BACKEND
    if (usuario.nombreUsuario === "administrador" && usuario.passUsuario === "Admin1234") {
      localStorage.setItem('usuarioIn', JSON.stringify(usuario))
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
