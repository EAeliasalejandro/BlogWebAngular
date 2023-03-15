import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entrada } from '../interfaces/entrada';

//Cuando se crea el servicio lo inyecta en el nodo raiz del modulo
@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient:HttpClient) { }
  //aqui creo mis peticiones
  //El observable es quien espera la respuesta del servidor y la manda al componente
  public recuperarEntradas():Observable<Entrada[]>{
    return this.httpClient.get<Entrada[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
