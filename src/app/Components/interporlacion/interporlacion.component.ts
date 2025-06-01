import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interporlacion',
  imports: [DatePipe],
  templateUrl: './interporlacion.component.html',
  styleUrl: './interporlacion.component.css'
})
export class InterporlacionComponent {

  person = {
    name: "Juan",
    age: 30
  }

  num1:number = 12;
  num2:number = 20;
  resultado1 = this.num1 - this.num2;

  num3 = 8;
  num4 = 4;
  resultado2 = this.num3 * this.num4;  

  radio:number = 5;

  calculateArea (radio:number) {
    return Math.PI * Math.pow(radio,2);
  }

  isLoggedIn:boolean = true;

  currentDate:Date = new Date();

}
