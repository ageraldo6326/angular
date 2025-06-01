import { Component } from '@angular/core';
import { UppercasePipe } from "../../pipe/uppercase.pipe";
import { FirstwordPipe } from "../../pipe/firstword.pipe";
import { ReversetextPipe } from "../../pipe/reversetext.pipe";

@Component({
  selector: 'app-pipe',
  imports: [UppercasePipe, FirstwordPipe, ReversetextPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

}
