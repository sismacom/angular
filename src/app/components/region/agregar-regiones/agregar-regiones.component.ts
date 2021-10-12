import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaisModel } from 'src/app/models/pais.model';
import { PaisService } from 'src/app/services/pais/pais.service';
import { RegionService } from 'src/app/services/region/region.service';


declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-agregar-regiones',
  templateUrl: './agregar-regiones.component.html',
  styleUrls: ['./agregar-regiones.component.scss']
})


export class AgregarRegionesComponent implements OnInit {


  frmRegionRegistro: FormGroup;
  pais=0;
  validacionCampos = {
    nombre: [{ 'type': 'required', message: 'Digite nombre de la Region' }]
  }



  misPaises: any = [];

  constructor(private contructorFormulario: FormBuilder, private regionService: RegionService, private paisService: PaisService, private activatedRoute: ActivatedRoute) {
    this.frmRegionRegistro = this.contructorFormulario.group({
      nombre: new FormControl('', Validators.compose([Validators.required])),
      descripcion: new FormControl(),
      //pais:new FormControl()
    });

  }

  onSubmit() {
    let jQueryInstance = this
    alert(this.pais);
    if (this.frmRegionRegistro.valid) {
      //this.frmRegionRegistro.value.pais=this.pais;
      this.regionService.InsertRecord(this.frmRegionRegistro.value,this.pais).subscribe(result => {
        //console.log(result);
        //console.log(result.id);

        if (result.id > 0) {
          alert("Guardado con exito");
          this.borrar();
        } else {
          //this.estadoProceso = 0;
          //this.modal.callAlert("Error al registrar", "ERROR");
        }

      });
    } else {
      Object.keys(this.frmRegionRegistro.controls).forEach(field => {
        const control: any = this.frmRegionRegistro.get(field);
        if (!control['controls']) {
          control.markAsTouched({ onlySelf: true });
        }
      })
    }
  }

  getPais(valor): PaisModel {
    return valor;
  }

  borrar() {
    this.frmRegionRegistro.reset();
    $("#enviar").attr("disabled", "disabled");
    $("#reset").attr("disabled", "disabled");
  }

  cargarPaises() {
    const result = this.paisService.listarPaises();
    console.log(result);
    result.then(data => {
      this.misPaises = data;
    });

  }

  ngOnInit(): void {

    this.cargarPaises();

    $(document).ready(function () {
      $("#nombreRegion").focus();
      $("#nombreRegion").keyup(function (evt) {
        if ($(this).val().length > 0) {
          $("#enviar").removeAttr("disabled",);
          $("#reset").removeAttr("disabled",);
        } else {
          $("#enviar").attr("disabled", "disabled");
          $("#reset").attr("disabled", "disabled");
        }

      });
    })
  }

}
