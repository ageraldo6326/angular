import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaFrutasComponent } from "./Components/lista-frutas/lista-frutas.component";
import { ListaUsuarioComponent } from './Components/lista-usuario/lista-usuario.component';
import { ScoreComponent } from "./Components/score/score.component";
import { RestarPipe } from "./pipe/restar.pipe";
import { FormsModule } from '@angular/forms';
import { MessageComponent } from "./Components/message/message.component";
import { ColorBoxComponent } from "./Components/color-box/color-box.component";
import { AlertButtonComponent } from "./Components/alert-button/alert-button.component";
import { CounterComponent } from "./Components/counter/counter.component";
import { FirstwordPipe } from "./pipe/firstword.pipe";
import { ReversetextPipe } from "./pipe/reversetext.pipe";
import { UsuarioComponent } from "./Components/usuario/usuario.component";
import { PerritosService } from './services/perritos.service';
import { GuarderiaPerritosComponent } from "./Components/guarderia-perritos/guarderia-perritos.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, ListaFrutasComponent, ScoreComponent, ListaUsuarioComponent, RestarPipe, CommonModule, FormsModule, MessageComponent, ColorBoxComponent, AlertButtonComponent, CounterComponent, FirstwordPipe, ReversetextPipe, UsuarioComponent, GuarderiaPerritosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'proyecto';
  welcomeMessage = 'Bienvenido a mi aplicación Angular';
  condicion: boolean = false;
  perrito: string = "";

  constructor (private perritoService: PerritosService) {}
  

  showAlert(message: string) {
    alert(message);
  }

  updateCount(count: number) { 
    console.log('Nuevo valor del contador:', count) 
  }  

  person = {
    name: "Juan",
    age: 30
  }

  cambiar() {
    this.title = "Titulo cambiado"
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

  isVisible:boolean = true;

  visibleSwitch() {
    this.isVisible = !this.isVisible
  }

  async ngOnInit() {
    await this.perritoService.getPerritoImg().subscribe(data => {
      console.log(data.message)
      this.perrito = data.message
    })
  }

  async verperrito() {
    await this.perritoService.getPerritoImg().subscribe(data => {
      console.log(data.message)
      this.perrito = data.message
    })
  }


  isLoggedIn:boolean = true;

  

  currentDate:Date = new Date();

}
