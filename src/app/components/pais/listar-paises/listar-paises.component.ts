import { Component, Directive, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { PaisService } from 'src/app/services/pais/pais.service';
import { PaisModel } from 'src/app/models/pais.model';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-listar-paises',
  templateUrl: './listar-paises.component.html',
  styleUrls: ['./listar-paises.component.scss']
})
export class ListarPaisesComponent implements OnInit {

  @ViewChild("modalMensaje") modal: ElementRef;
  misPaises: Array<PaisModel> = [];
  pageSize = 5;
  desde = 0;
  hasta = this.pageSize;
  searchText;

  constructor(private paisService: PaisService, private router: Router, private modalsv: NgbModal) { }


  listartodos() {
    const result = this.paisService.listarPaises();
    result.then((data: Array<PaisModel>) => {
      this.misPaises = data;
      //console.log(this.misPaises);
    });
  }


  mipais: PaisModel;
  buscarPorNombre() {
    const result = this.paisService.BuscarRegistroPorNombre(this.searchText);
    result.then((data: Array<PaisModel>) => {
      this.misPaises = data;
      //console.log(this.misPaises);
    });

    //esto es para 1 resultado
    /*this.mipais = null;
    result.then((data: PaisModel) => {
      //console.log(data);
      this.mipais = data;
      this.misPaises = new Array<PaisModel>();
      this.misPaises.push(this.mipais);
      console.log(this.misPaises);

    });*/

  }

  cambiarPagina(evt: PageEvent) {
    console.log(evt);
    console.log(evt.pageIndex)
    console.log(evt.pageSize)
    this.desde = evt.pageIndex * evt.pageSize;
    this.hasta = this.desde + evt.pageSize;
  }

  deletePais(elpais: any) {
    this.paisService.DeleteItemRecord(elpais.id).subscribe(result => {
      console.log(result);
      //alert("eliminado");
      this.listartodos();
      alert("Registro borrado con exito");
    });
  }

  showUpdate(id: any) {
    this.modalsv.open(this.modal);
  }

  ngOnInit(): void {
    $(document).ready(function () {

      $("#bnombreRegion").keyup(function () {
        // Show only matching TR, hide rest of them
        var rex = new RegExp($(this).val(), 'i');

        $('.buscar tr').hide();

        $('.buscar tr').filter(function () {
          return rex.test($(this).text());
        }).show();
      });
    });
  }

}

