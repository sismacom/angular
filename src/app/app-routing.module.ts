import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MainviewComponent } from './components/mainview/mainview.component';
import { AgregarRegionesComponent } from './components/region/agregar-regiones/agregar-regiones.component';
import { RegionComponent } from './components/region/region.component';
import { ListarRegionesComponent } from './components/region/listar-regiones/listar-regiones.component';
import { PaisComponent } from './components/pais/pais.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { AgregarPaisesComponent } from './components/pais/agregar-paises/agregar-paises.component';
import { ListarPaisesComponent } from './components/pais/listar-paises/listar-paises.component';
import { AgregarCiudadesComponent } from './components/ciudad/agregar-ciudades/agregar-ciudades.component';
import { ListarCiudadesComponent } from './components/ciudad/listar-ciudades/listar-ciudades.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  {
    path: 'mainView', component: MainviewComponent,
    children: [
      {
        path: 'manejoregiones', component: RegionComponent,
        children: [
          { path: 'nuevaregion', component: AgregarRegionesComponent },
          { path: 'buscarregion', component: ListarRegionesComponent }
        ]
      },
      {
        path: 'manejopaises', component: PaisComponent,
        children: [
          { path: 'nuevopais', component: AgregarPaisesComponent },
          { path: 'buscarpais', component: ListarPaisesComponent }

        ]
      },
      {
        path: 'manejociudades', component: CiudadComponent,
        children: [
          { path: 'nuevaciudad', component: AgregarCiudadesComponent },
          { path: 'buscarciudad', component: ListarCiudadesComponent }

        ]
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
