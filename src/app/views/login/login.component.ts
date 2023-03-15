import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/shared/clases/usuario';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public usuario: Usuario

  constructor(
    //La libreria Router es para cambiar de ruta cuando me
    //se logie correctamente
    private loginService: LoginService,
    private router: Router) {
    this.usuario = new Usuario();
  }

  public submit(): void {
    this.loginService.login(this.usuario).subscribe({
      next: (data:number) => {
        localStorage.setItem('nombreUsuario', this.usuario.nombre);
        localStorage.setItem('miTokenPersonal',`${ data }`);
        //Una vez asignados los valores al componente menu, ahora si
        //brinca a la tuya listado
        this.router.navigate(['/listado']);
      },
      error: (error:Error) => {
        console.error("Error al realizar el acceso");
      },
      complete: () => console.info('completado')
  });
  }
}
