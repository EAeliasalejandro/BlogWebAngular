import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//Esta etiqueta carga los metadatos
@NgModule({
  declarations: [//carga los componentes
    AppComponent
  ],
  imports: [//carga los modulos extra
    BrowserModule
  ],
  providers: [],//carga los servicios extra de los componentes
  bootstrap: [AppComponent]//se enlaza el componente principal de la aplicacion
})
export class AppModule { }//Esto es una clase de tipo modulo por la etiqueta NGModule
