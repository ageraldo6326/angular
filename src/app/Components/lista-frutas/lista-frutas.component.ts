import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-frutas',
  imports: [],
  templateUrl: './lista-frutas.component.html',
  styleUrl: './lista-frutas.component.css'
})
export class ListaFrutasComponent {

  frutas = ["Manzana", "Plátano", "Cereza", "Durazno", "Fresa"];

  addFruit() {

    const fruta = "Uva";
    this.frutas.push(fruta);
    
  }

}
