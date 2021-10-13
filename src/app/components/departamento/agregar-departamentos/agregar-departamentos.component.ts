import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { RegionModel } from 'src/app/models/region.model';
import { DepartamentoService } from 'src/app/services/departamento/departamento.service';
import { RegionService } from 'src/app/services/region/region.service';


declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-agregar-departamentos',
  templateUrl: './agregar-departamentos.component.html',
  styleUrls: ['./agregar-departamentos.component.scss']
})
export class AgregarDepartamentosComponent implements OnInit {

  @Input() departRecibido: DepartamentoModel;

  frmDepartamentoRegistro: FormGroup;
  regionId: number = 0;
  validacionCampos = {
    nombre: [{ 'type': 'required', message: 'Digite nombre de la Region' }]
  }

  misRegiones: Array<RegionModel> = [];

  constructor(private contructorFormulario: FormBuilder, private departamentoService: DepartamentoService, private regionService: RegionService, private activatedRoute: ActivatedRoute) {
    this.frmDepartamentoRegistro = this.contructorFormulario.group({
      nombre: new FormControl('', Validators.compose([Validators.required])),
      descripcion: new FormControl()
    });

  }

  onSubmit() {
    let jQueryInstance = this
    //alert(this.region);
    if (this.regionId != 0) {
      if (this.frmDepartamentoRegistro.valid) {
        //this.frmRegionRegistro.value.pais=this.pais;
        this.departamentoService.InsertNewRecord(this.frmDepartamentoRegistro.value, this.regionId).subscribe(result => {
          //console.log(result);
          //console.log(result.id);

          if (result.id > 0) {
            alert("Guardado con exito");
            this.borrar();
          } else {
            alert("Error al guardar!!!");
            //this.estadoProceso = 0;
            //this.modal.callAlert("Error al registrar", "ERROR");
          }

        });
      } else {
        Object.keys(this.frmDepartamentoRegistro.controls).forEach(field => {
          const control: any = this.frmDepartamentoRegistro.get(field);
          if (!control['controls']) {
            control.markAsTouched({ onlySelf: true });
          }
        })
      }
    } else {
      alert("Debe seleccionar una Region");
    }

  }

  paisSelectChange(event: any) {
    this.regionId = event.target.value;
  }

  borrar() {
    this.frmDepartamentoRegistro.reset();
    $("#enviar").attr("disabled", "disabled");
  }

  cargarRegiones() {
    const result = this.regionService.listarRegiones();
    console.log(result);
    result.then((data: Array<RegionModel>) => {
      this.misRegiones = data;
    });

  }

  actualizar(){
    const name = this.frmDepartamentoRegistro.controls['nombre'].value;
    if (name != "") {
      this.departRecibido.nombre = name;
      this.departRecibido.descripcion = this.frmDepartamentoRegistro.controls['descripcion'].value;
      
      this.departamentoService.UpdateRecord(this.departRecibido).subscribe(result => {
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

    this.cargarRegiones();

    $(document).ready(function () {
      $("#nombreDepartamento").focus();
      $("#nombreDepartamento").keyup(function (evt) {
        if ($(this).val().length > 0) {
          $("#enviar").removeAttr("disabled",);
        } else {
          $("#enviar").attr("disabled", "disabled");
        }

      });
    })

    if (this.departRecibido != null) {
      this.frmDepartamentoRegistro.controls['nombre'].patchValue(this.departRecibido.nombre)
      this.frmDepartamentoRegistro.controls['descripcion'].patchValue(this.departRecibido.descripcion);

      $("#region").attr("disabled", "disabled");
      $("#enviar").hide();
      $("#reset").hide();
      $("#alerta").hide();
    }





  }

}
