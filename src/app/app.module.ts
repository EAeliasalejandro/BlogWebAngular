import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListadoComponent } from './views/listado/listado.component';
import { EntradaComponent } from './views/listado/entrada/entrada.component';
//Esta etiqueta carga los metadatos
@NgModule({
  declarations: [//carga los componentes
    AppComponent, MenuComponent, ListadoComponent, EntradaComponent
  ],
  imports: [//carga los modulos extra
    BrowserModule
  ],
  providers: [],//carga los servicios extra de los componentes
  bootstrap: [AppComponent]//se enlaza el componente principal de la aplicacion
})
export class AppModule { }//Esto es una clase de tipo modulo por la etiqueta NGModule
