import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PaisModel } from 'src/app/models/pais.model';
import { RegionModel } from 'src/app/models/region.model';
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

  @Input() regionRecibida: RegionModel;

  frmRegionRegistro: FormGroup;
  paisId: number=0;
  validacionCampos = {
    nombre: [{ 'type': 'required', message: 'Digite nombre de la Region' }],
    pais: [{ 'type': 'required', message: 'Digite nombre de la Region' }]
  }



  misPaises: Array<PaisModel> = [];

  constructor(private contructorFormulario: FormBuilder, private regionService: RegionService, private paisService: PaisService, private activatedRoute: ActivatedRoute) {
    this.frmRegionRegistro = this.contructorFormulario.group({
      nombre: new FormControl('', Validators.compose([Validators.required])),
      descripcion: new FormControl()
    });

  }

  onSubmit() {
    let jQueryInstance = this

    if (this.paisId != 0) {
      //alert(this.paisId);
      if (this.frmRegionRegistro.valid) {
        //this.frmRegionRegistro.value.pais=this.pais;
        this.regionService.InsertRecord(this.frmRegionRegistro.value, this.paisId).subscribe(result => {
          //console.log(result);
          //console.log(result.id);

          if (result.id > 0) {
            alert("Guardado con exito");
            this.borrar();
          } else {
            alert("Error Al guardar");
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
    }else{
      alert("Debe seleccionar el pais");
    }


  }

  borrar() {
    this.frmRegionRegistro.reset();
    $("#enviar").attr("disabled", "disabled");
  }

  cargarPaises() {
    const result = this.paisService.listarPaises();
    console.log(result);
    result.then((data: Array<PaisModel>) => {
      this.misPaises = data;
    });

  }

  paisSelectChange(event: any) {
    this.paisId = event.target.value;
  }


  actualizar() {
    //alert(this.frmPaisRegistro.controls['nombre'].value)
    const name = this.frmRegionRegistro.controls['nombre'].value;
    if (name != "") {
      this.regionRecibida.nombre = name;
      this.regionRecibida.descripcion = this.frmRegionRegistro.controls['descripcion'].value;
      
      this.regionService.UpdateRecord(this.regionRecibida).subscribe(result => {
        //console.log(result);
        //console.log(result.id);

        if (result.id > 0) {
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

    this.cargarPaises();

    $(document).ready(function () {
      $("#nombreRegion").focus();
      $("#nombreRegion").keyup(function (evt) {
        if ($(this).val().length > 0) {
          $("#enviar").removeAttr("disabled",);
        } else {
          $("#enviar").attr("disabled", "disabled");
        }
      });
    })

    if (this.regionRecibida != null) {
      this.frmRegionRegistro.controls['nombre'].patchValue(this.regionRecibida.nombre)
      this.frmRegionRegistro.controls['descripcion'].patchValue(this.regionRecibida.descripcion);

      $("#pais").attr("disabled", "disabled");
      $("#enviar").hide();
      $("#reset").hide();
      $("#alerta").hide();
    }
  }

}
