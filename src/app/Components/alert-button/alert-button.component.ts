import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  imports: [],
  templateUrl: './alert-button.component.html',
  styleUrl: './alert-button.component.css'
})
export class AlertButtonComponent {

  @Output() alert = new EventEmitter<string>();

  enviarAlerta() {
    this.alert.emit('¡Este mensaje viene del componente hijo!');
  }

}
