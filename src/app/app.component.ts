import {Component, Input, Output} from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BotonesComponent } from './components/botones/botones.component';
import { Boton } from './components/boton.interface';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgFor, CommonModule, RouterOutlet, BotonesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //Variables de instancia de comunicación con los hijos
  @Input() boton:Boton={id:0,texto:'',valor:0};
  @Input() eventoReset:Event;


  //Variables propias del componente
  botones: Boton[] = [
    { id: 1, texto: 'Rojo', valor: 3 },
    { id: 2, texto: 'Azul', valor: 7 },
    { id: 3, texto: 'Verde', valor: 6 },
    { id: 4, texto: 'Marrón', valor: 4 },
    { id: 5, texto: 'Amarillo', valor: 8 },
    { id: 6, texto: 'Naranja', valor: 2 },
    { id: 7, texto: 'Blanco', valor: 1 },
  ];
  botonesPulsados: Boton[] = [];

  constructor() {
  }

  //Métodos de instancia
  anadirDatos(boton:Boton){
    this.botonesPulsados.push(boton);
  }

  nombresBotonesPulsados(){
    let nombres:string[] = [];
    for(let n of this.botonesPulsados){
      nombres.push(n.texto);
    }
    return nombres;
  }


  sumaBotonesPulsados(){
    let resultado: number = 0;
    for(let n of this.botonesPulsados){
      resultado+=n.valor;

    }
    return resultado;
  }

}
