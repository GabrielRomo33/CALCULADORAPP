import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  operandoA: number;
  operandoB: number;

  @Output() resultadoSuma = new EventEmitter<number>();// el event emiter debe ser de core y se le especifica que va a regresar un valor de tipo numerico

  sumar():void{
    let Resultado = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(Resultado);//es como un return
  }
}
