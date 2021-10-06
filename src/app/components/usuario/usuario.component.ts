import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  constructor(private routerrut: Router) { }
  loginUser(){
    alert("Aqui se hace la validacion del login de usuario");
    this.routerrut.navigate(["mainView"]);
  }

  ngOnInit(): void {
  }

}
