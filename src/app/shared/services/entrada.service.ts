import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//Cuando se crea el servicio lo inyecta en el nodo raiz del modulo
@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient:HttpClient) { }
  //aqui creo mis peticiones
  //El observable es quien espera la respuesta del servidor y la manda al componente
  public recuperarEntradas():Observable<any>{
    return this.httpClient.get<any>("https://jsonplaceholder.typicode.com/posts");
  }
}
