import { Component } from '@angular/core';
import { MessageComponent } from "../message/message.component";
import { ColorBoxComponent } from "../color-box/color-box.component";

@Component({
  selector: 'app-mensaje-padre-hijo',
  imports: [MessageComponent, ColorBoxComponent],
  templateUrl: './mensaje-padre-hijo.component.html',
  styleUrl: './mensaje-padre-hijo.component.css'
})
export class MensajePadreHijoComponent {

}
