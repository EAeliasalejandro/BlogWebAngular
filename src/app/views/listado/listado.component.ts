import { Component } from '@angular/core';
import { Entrada } from 'src/app/shared/interfaces/entrada';
import { EntradaService } from 'src/app/shared/services/entrada.service';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  //Atributos
  public listadoEntradas:Entrada[];

  constructor(private entradaServices:EntradaService) {
    this.listadoEntradas = [ ];
  }
  ngOnInit():void{
    //cuando carga el componente (vista), se ejecuta el metodo
    //que me lleva a la petición
    this.recuperarEntradas();
  }
  //aqui defino que haré con las peticiones rest
  private recuperarEntradas():void{
    //el componente se subscribe a la petición
    this.entradaServices.recuperarEntradas().subscribe({
      //para respuesta correcta
      next: (data) => this.listadoEntradas = data,
      //para error
      error: (e) => console.error(e)
    });
  }

  public mostrarTitulo(titulo: string): void {
    alert(`Entrada seleccionada: ${ titulo }.`);
  }
}
