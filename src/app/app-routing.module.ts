import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { ListadoComponent } from './views/listado/listado.component';
import { LoginComponent } from './views/login/login.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
//Para crear este modulo de rutas:
//ng generate module app-routing --flat --module=app

const routes: Routes  =[
  //Cada ruta tiene que tener su dirección o nombre y el componente asociado
  {path: 'login',component:LoginComponent},
  {path: 'listado',component:ListadoComponent},
  {path: 'nosotros', component: AcercaDeNosotrosComponent},
  //Nodo Raiz y nodo cuando no existe la ruta
  {path: '', redirectTo: '/listado', pathMatch: 'full'},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  exports: [RouterModule],
  //ForRoot es donde se le importan al modulo de las rutas y el nodo raiz las demas rutas
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
