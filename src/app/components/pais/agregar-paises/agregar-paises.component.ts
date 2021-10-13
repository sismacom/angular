import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PaisService } from 'src/app/services/pais/pais.service';
import { PaisModel } from 'src/app/models/pais.model';
import { ActivatedRoute, Router } from '@angular/router';



declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-agregar-paises',
  templateUrl: './agregar-paises.component.html',
  styleUrls: ['./agregar-paises.component.scss']
})
export class AgregarPaisesComponent implements OnInit {

  @Input() paisRecibido: PaisModel;

  frmPaisRegistro: FormGroup;
  estadoProceso: Number = -1;
  estadoProcesoEditar: Number = -1;

  validacionCampos = {
    nombre: [{ 'type': 'required', message: 'Digite nombre del Pais' }]
  }

  constructor(private contructorFormulario: FormBuilder,
    private paisService: PaisService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.frmPaisRegistro = this.contructorFormulario.group({
      nombre: new FormControl('', Validators.compose([Validators.required])),
      descripcion: new FormControl()
    });

  }

  borrar() {
    this.frmPaisRegistro.reset();
    $("#enviar").attr("disabled", "disabled");
  }

  onSubmit() {
    let jQueryInstance = this
    if (this.frmPaisRegistro.valid) {
      this.paisService.InsertRecord(this.frmPaisRegistro.value).subscribe(result => {
        //console.log(result);
        //console.log(result.id);

        if (result.id > 0) {
          this.estadoProceso = 1;
          alert("Guardado con exito");
          this.borrar();
        } else {
          //this.estadoProceso = 0;
          //this.modal.callAlert("Error al registrar", "ERROR");
        }

      });
    } else {
      Object.keys(this.frmPaisRegistro.controls).forEach(field => {
        const control: any = this.frmPaisRegistro.get(field);
        if (!control['controls']) {
          control.markAsTouched({ onlySelf: true });
        }
      })
    }
  }

  actualizar() {
    //alert(this.frmPaisRegistro.controls['nombre'].value)
    const name = this.frmPaisRegistro.controls['nombre'].value;
    if (name != "") {
      this.paisRecibido.nombre = name;
      this.paisRecibido.descripcion = this.frmPaisRegistro.controls['descripcion'].value;
      this.paisService.UpdateRecord(this.paisRecibido).subscribe(result => {
        //console.log(result);
        //console.log(result.id);

        if (result.id > 0) {
          this.estadoProceso = 1;
          alert("Guardado con exito");
          this.borrar();
        } else {
          alert("Error al Actualizar");
          //this.estadoProceso = 0;
          //this.modal.callAlert("Error al registrar", "ERROR");
        }

      });
    }else{
      alert("Error campo nombre vacio");
    }

  }

  ngOnInit(): void {
    $(document).ready(function () {
      $("#nombrePais").focus();
      $("#nombrePais").keyup(function (evt) {
        if ($(this).val().length > 0) {
          $("#enviar").removeAttr("disabled",);
        } else {
          $("#enviar").attr("disabled", "disabled");
        }

      });
    })

    if (this.paisRecibido != null) {
      this.frmPaisRegistro.controls['nombre'].patchValue(this.paisRecibido.nombre)
      this.frmPaisRegistro.controls['descripcion'].patchValue(this.paisRecibido.descripcion);
      $("#enviar").hide();
      $("#reset").hide();
    }
  }

}
