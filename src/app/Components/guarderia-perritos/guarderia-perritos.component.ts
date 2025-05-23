import { Component } from '@angular/core';
import { PerritosService } from '../../services/perritos.service';

@Component({
  selector: 'app-guarderia-perritos',
  imports: [],
  templateUrl: './guarderia-perritos.component.html',
  styleUrl: './guarderia-perritos.component.css'
})
export class GuarderiaPerritosComponent {

  perrito: string = "";
  perrito2: string = "";

  constructor (private perritoService: PerritosService) {}

  async verperrito() {
 await this.perritoService.getPerritoImg().subscribe(data => {
      this.perrito = data.message
    })

    await this.perritoService.getPerritoImg().subscribe(data => {
      this.perrito2 = data.message
    })       
  }

  async ngOnInit() {
    await this.perritoService.getPerritoImg().subscribe(data => {
      this.perrito = data.message
    })

    await this.perritoService.getPerritoImg().subscribe(data => {
      this.perrito2 = data.message
    })    
  }

}
