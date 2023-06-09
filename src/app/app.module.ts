import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; //modulo para usar http
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './views/listado/listado.component';
import { EntradaComponent } from './views/listado/entrada/entrada.component';
import { AppRoutingModule } from './app-routing.module';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
//Esta etiqueta carga los metadatos
@NgModule({
  declarations: [//carga los componentes
    AppComponent, MenuComponent, ListadoComponent, EntradaComponent, PaginaNoEncontradaComponent, AcercaDeNosotrosComponent, LoginComponent
  ],
  imports: [//carga los modulos extra
  //Agregar el modulo de http y modulo de Formulario
    BrowserModule, AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],//carga los servicios extra de los componentes
  bootstrap: [AppComponent]//se enlaza el componente principal de la aplicacion
})
export class AppModule { }//Esto es una clase de tipo modulo por la etiqueta NGModule
