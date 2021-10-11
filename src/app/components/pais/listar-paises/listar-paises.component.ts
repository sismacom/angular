import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais/pais.service';
import { PaisModel } from 'src/app/models/pais.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-paises',
  templateUrl: './listar-paises.component.html',
  styleUrls: ['./listar-paises.component.scss']
})
export class ListarPaisesComponent implements OnInit {

  misPaises: any = {};

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    //this.LoadPaises();
  }


  listartodos() {
    const result = this.paisService.listarPaises();
    result.then(data => {
      this.misPaises = data;
      console.log(data)
    });
  }

}
