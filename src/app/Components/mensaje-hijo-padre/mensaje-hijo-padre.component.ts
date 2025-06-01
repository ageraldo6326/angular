import { Component } from '@angular/core';
import { MessageComponent } from "../message/message.component";
import { ColorBoxComponent } from "../color-box/color-box.component";
import { AlertButtonComponent } from "../alert-button/alert-button.component";
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-mensaje-hijo-padre',
  imports: [AlertButtonComponent, CounterComponent],
  templateUrl: './mensaje-hijo-padre.component.html',
  styleUrl: './mensaje-hijo-padre.component.css'
})
export class MensajeHijoPadreComponent {
  

  showAlert(message: string) {
    alert(message);
  }

  updateCount(count: number) { 
    console.log('Nuevo valor del contador:', count) 
  }  

}
