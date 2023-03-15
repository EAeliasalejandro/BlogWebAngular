import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
//Para crear un servicio: ng generate service ruta/nombre
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  public login(usuario: Usuario): Observable<number> {
    return of(Math.random() * (1000-0));
  }
}
