import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Titulo inicial!';
  inputVal = '';

  // para sumar tienen que ser type number
  varOne: number = 0;
  varTwo: number = 0;
  result:number = 0;
  
  // bindeo hacia html
  img:string = "../assets/images/mesa1.jpg";


  cambiarTitulo(){
    this.title = 'nuevo titulo';
  }

  cambiarTituloParametro(tituloParam:string){
    this.title = tituloParam;
  }

  cambiarTituloInput(){
    this.title = this.inputVal;
  }

  sumar(){
    this.result =  this.varOne + this.varTwo;
  }
}
