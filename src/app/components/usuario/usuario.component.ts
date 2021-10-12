import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { AutenticacionService } from 'src/app/services/usuario/autenticacion.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  frmLogin: FormGroup;
  usuario:Usuario;
  
  validarCampos = {
    nonombreUsuario: [
      { type: 'required', message: 'Debe ingresar el nombre de usuario' }
    ]
  }

  constructor(private formB: FormBuilder, private routerrut: Router, private loginService: AutenticacionService) {
    this.frmLogin = this.formB.group({
      nombre_usuario: new FormControl('', Validators.compose([Validators.required])),
      pass_usuario: new FormControl('', Validators.compose([Validators.required])),
    });

    this.frmLogin.valueChanges.subscribe(data => { })

    /*this.frmLogin.get('nombre_usuario').valueChanges.subscribe(data => {

    })*/
  }

  invalidLogin = false;



  loginUser() {
    this.usuario = new Usuario(this.frmLogin.get('nombre_usuario').value,this.frmLogin.get('pass_usuario').value);

    if (this.loginService.autenticar(this.usuario) ){
      this.routerrut.navigate(["mainView"]);
      this.invalidLogin = false;
    } else {
      alert("Nombre de usuario y contraseña incorrestos!!!")
      this.invalidLogin = true
    }


  }

  ngOnInit(): void {
  }

}
