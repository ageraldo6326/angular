import { Component } from '@angular/core';

@Component({
  selector: 'app-mensaje-boton',
  imports: [],
  templateUrl: './mensaje-boton.component.html',
  styleUrl: './mensaje-boton.component.css'
})
export class MensajeBotonComponent {  

  isVisible:boolean = false;

  visibleSwitch() {
    this.isVisible = !this.isVisible
  }  



}
