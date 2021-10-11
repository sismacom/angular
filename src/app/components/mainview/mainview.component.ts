import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss']
})

export class MainviewComponent implements OnInit {

  nombreusuario: string
  usuario: Usuario;
  respuesta: string;

  constructor(private router: Router) {

    if (localStorage.getItem('usuarioIn') !== undefined && localStorage.getItem('usuarioIn')) {
      this.usuario = JSON.parse(localStorage.getItem('usuarioIn'));
      this.nombreusuario = this.usuario.nombreUsuario;
    } else {
      this.router.navigate([""]);
    }

  }

  salir() {
    localStorage.removeItem("usuarioIn");
    this.router.navigate(["salir"]);
  }

  callAlert($mensaje, $tipo) {
    this.respuesta = $mensaje;

    if ($tipo == "INFO") {
      $("#mensajeModal").addClass("alert-info")
    } else if ($tipo == "ERROR") {
      $("#mensajeModal").addClass("alert-danger")
    } else if ($tipo == "SUCCESS") {
      $("#mensajeModal").addClass("alert-success")
    }
    $("#modalshow").show();
  }

  ngOnInit(): void {
  }

}
