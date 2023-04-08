import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-componente-suma-promedio',
  templateUrl: './componente-suma-promedio.component.html',
  styleUrls: ['./componente-suma-promedio.component.css'],
})
export class ComponenteSumaPromedioComponent {
  // 1- (app.component.html) Realizar:
  // una aplicacion que se le ingresen dos edades en dos cuadro de textos
  // edadUno, EdadDos
  // mostrar el promedio y la suma en dos cuadros de textos nuevos
  // botones "calcular" y "limpiar cuadros de textos"

  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  resultado: number = 0;

  Calcular() {
    this.Sumar();
    this.Promedio();
  }

  Sumar() {
    this.resultado = this.edadUno + this.edadDos;
  }

  Promedio() {
    this.promedio = Number(this.edadUno + this.edadDos) / 2;
  }
}
