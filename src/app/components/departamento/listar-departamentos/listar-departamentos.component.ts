import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartamentoModel } from 'src/app/models/departamento.model';
import { DepartamentoService } from 'src/app/services/departamento/departamento.service';


declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-listar-departamentos',
  templateUrl: './listar-departamentos.component.html',
  styleUrls: ['./listar-departamentos.component.scss']
})
export class ListarDepartamentosComponent implements OnInit {

  @ViewChild("modalMensaje") modal: ElementRef;
  
  @Output() departAct:DepartamentoModel;

  misDepartamentos: Array<DepartamentoModel> = [];
  pageSize = 5;
  desde = 0;
  hasta = this.pageSize;
  searchText;

  constructor(private departamentoService: DepartamentoService, private modalsv: NgbModal) { }

  listartodos() {
    const result = this.departamentoService.listarDepartamentos();
    result.then((data: Array<DepartamentoModel>) => {
      this.misDepartamentos = data;
    });
  }

  miDepar: DepartamentoModel;

  buscarPorNombre() {
    if (this.searchText != "") {
      const result = this.departamentoService.BuscarRegistroPorNombre(this.searchText);
      result.then((data: Array<DepartamentoModel>) => {
        this.misDepartamentos = data;
        //console.log(this.misPaises);
      });
    }else{
      this.misDepartamentos=[];
    }


    //esto es para 1 resultado
    /*this.miDepar = null;
    result.then((data: DepartamentoModel) => {
      //console.log(data);
      this.miDepar = data;
      this.misDepartamentos = new Array<DepartamentoModel>();
      this.misDepartamentos.push(this.miDepar);
      console.log(this.misDepartamentos);

    });*/

  }

  /*getDepartamento(valor): DepartamentoModel {
    return valor;
  }*/

  deletePais(elpais: any) {
    this.departamentoService.DeleteItemRecord(elpais.id).subscribe(result => {
      console.log(result);
      //alert("eliminado");
      this.listartodos();
      alert("Registro borrado con exito");
    });
  }

  cambiarPagina(evt: PageEvent) {
    console.log(evt);
    console.log(evt.pageIndex)
    console.log(evt.pageSize)
    this.desde = evt.pageIndex * evt.pageSize;
    this.hasta = this.desde + evt.pageSize;
  }

  showUpdate(elDepar: any) {
    this.departAct=elDepar;
    this.modalsv.open(this.modal);
  }

  ngOnInit(): void {
  }

}
