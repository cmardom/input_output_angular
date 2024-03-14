import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Boton } from '../boton.interface';

@Component({
  selector: 'app-botones',
  standalone: true,
  imports: [],
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css'
})
export class BotonesComponent implements OnInit {

  @Output() eventoBoton = new EventEmitter<Boton>();

  //Variables de instancia de comunicación con el padre
  @Input() boton:Boton={id:0,texto:'',valor:0};

  //Variables propias del componente
  botonUsado:boolean = false;

  constructor(){}

  ngOnInit(): void {  }

  //la funcion para el output
  botonPulsado() {
    this.eventoBoton.emit(this.boton);
    this.botonUsado=true;
  }
}
