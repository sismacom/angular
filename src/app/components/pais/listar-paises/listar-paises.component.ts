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
  misPaises: any = [];
  pageSize = 5;
  desde = 0;
  hasta = this.pageSize;
  searchText;

  constructor(private paisService: PaisService, private router: Router, private modalsv: NgbModal) { }

  @HostListener('input') oninput() {
    this.searchItems();
  }
  searchItems() {

  }

  getPais(valor): PaisModel {
    return valor;
  }


  listartodos() {
    const result = this.paisService.listarPaises();
    result.then(data => {
      this.misPaises = data;
      $("#bnombreRegion").removeAttr("disabled");
      $("#bntbuscar").removeAttr("disabled");
    });
    //$("#tabladatos").DataTable();
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

  applyFilter(evt) {

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

