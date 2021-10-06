import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegionComponent } from './components/region/region.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MainviewComponent } from './components/mainview/mainview.component';
import { ListarRegionesComponent } from './components/region/listar-regiones/listar-regiones.component';
import { AgregarRegionesComponent } from './components/region/agregar-regiones/agregar-regiones.component';
import { PaisComponent } from './components/pais/pais.component';
import { CiudadComponent } from './components/ciudad/ciudad.component';
import { AgregarCiudadesComponent } from './components/ciudad/agregar-ciudades/agregar-ciudades.component';
import { ListarCiudadesComponent } from './components/ciudad/listar-ciudades/listar-ciudades.component';
import { AgregarPaisesComponent } from './components/pais/agregar-paises/agregar-paises.component';
import { ListarPaisesComponent } from './components/pais/listar-paises/listar-paises.component';
import { UsuarioComponent } from './components/usuario/usuario.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegionComponent,
    InicioComponent,
    MainviewComponent,
    ListarRegionesComponent,
    AgregarRegionesComponent,
    PaisComponent,
    CiudadComponent,
    AgregarCiudadesComponent,
    ListarCiudadesComponent,
    AgregarPaisesComponent,
    ListarPaisesComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
