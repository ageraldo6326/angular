import { CommonModule, DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PerritosService } from './services/perritos.service';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto';
  welcomeMessage = 'Bienvenido a mi aplicación Angular';
  condicion: boolean = false;


  constructor (private perritoService: PerritosService) {}
  

  cambiar() {
    this.title = "Titulo cambiado"
  }




}
