import { Component, ElementRef, OnInit, Output, ViewChild } from '@angular/core';
import { RegionService } from 'src/app/services/region/region.service';
import { RegionModel } from 'src/app/models/region.model';
import { PageEvent } from '@angular/material/paginator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-listar-regiones',
  templateUrl: './listar-regiones.component.html',
  styleUrls: ['./listar-regiones.component.scss']
})
export class ListarRegionesComponent implements OnInit {

  @ViewChild("modalMensaje") modal: ElementRef;
  @Output() regionAct:RegionModel;

  misRegiones: Array<RegionModel> = [];
  pageSize = 5;
  desde = 0;
  hasta = this.pageSize;
  searchText;



  constructor(private regionService: RegionService, private modalsv: NgbModal) { }


  listartodos() {
    const result = this.regionService.listarRegiones();
    result.then((data: Array<RegionModel>) => {
      this.misRegiones = data;
      //console.log(this.misRegiones);
    });
  }

  miRegion: RegionModel;
  buscarPorNombre() {
    if (this.searchText != "") {
      const result = this.regionService.BuscarRegionPorNombre(this.searchText);
      result.then((data: Array<RegionModel>) => {
        this.misRegiones = data;
        //console.log(this.misRegiones);
      });
    }

    /*
    this.miRegion = null;
    result.then((data: RegionModel) => {
      //console.log(data);
      this.miRegion = data;
      this.misRegiones = new Array<RegionModel>();
      this.misRegiones.push(this.miRegion);
    });*/
  }

  deletePais(elpais: any) {
    this.regionService.DeleteItemRecord(elpais.id).subscribe(result => {
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

  showUpdate(laRegion: any) {
    this.regionAct=laRegion;
    this.modalsv.open(this.modal);
  }

  ngOnInit(): void {
  }

}
