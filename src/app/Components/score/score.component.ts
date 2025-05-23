import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-score',
  imports: [CommonModule, FormsModule],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {

score:number = 0;

scoreGenerator() {
  this.score = Math.round(Math.random() * 100)
}
ngOnInit() {
  this.scoreGenerator()
}

}
