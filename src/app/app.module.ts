//componentes necesarios
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';

//componentes creados
import { MenuComponent } from './components/menu/menu.component';
import { RegionComponent } from './components/region/region.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MainviewComponent } from './components/mainview/mainview.component';
import { ListarRegionesComponent } from './components/region/listar-regiones/listar-regiones.component';
import { AgregarRegionesComponent } from './components/region/agregar-regiones/agregar-regiones.component';
import { PaisComponent } from './components/pais/pais.component';
import { AgregarPaisesComponent } from './components/pais/agregar-paises/agregar-paises.component';
import { ListarPaisesComponent } from './components/pais/listar-paises/listar-paises.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DepartamentoComponent } from './components/departamento/departamento.component';
import { ListarDepartamentosComponent } from './components/departamento/listar-departamentos/listar-departamentos.component';
import { AgregarDepartamentosComponent } from './components/departamento/agregar-departamentos/agregar-departamentos.component';









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
    AgregarPaisesComponent,
    ListarPaisesComponent,
    UsuarioComponent,
    DepartamentoComponent,
    ListarDepartamentosComponent,
    AgregarDepartamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
