import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Output() countChanged = new EventEmitter<number>();

  n:number = 0;

  incrementar() {
    this.countChanged.emit(++this.n)
  }

  descrementar() {
    this.countChanged.emit(--this.n)
  }  

}
