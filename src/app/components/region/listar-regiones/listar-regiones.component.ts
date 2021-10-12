import { Component, OnInit } from '@angular/core';
import { RegionService } from 'src/app/services/region/region.service';

@Component({
  selector: 'app-listar-regiones',
  templateUrl: './listar-regiones.component.html',
  styleUrls: ['./listar-regiones.component.scss']
})
export class ListarRegionesComponent implements OnInit {

  constructor(private regionService:RegionService) { }

  ngOnInit(): void {
  }

}
