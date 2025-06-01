import { Component } from '@angular/core';

@Component({
  selector: 'app-bienvenido',
  imports: [],
  templateUrl: './bienvenido.component.html',
  styleUrl: './bienvenido.component.css'
})
export class BienvenidoComponent {

  welcomeMessage:string = 'Bienvenido a mi aplicación Angular';
}
