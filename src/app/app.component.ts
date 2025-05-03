import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';
  welcomeMessage = 'Bienvenido a mi aplicación Angular';

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
