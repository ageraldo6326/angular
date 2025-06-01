import { Component } from '@angular/core';
import { ListaUsuarioComponent } from "../lista-usuario/lista-usuario.component";
import { ListaFrutasComponent } from "../lista-frutas/lista-frutas.component";
import { MensajeBotonComponent } from "../mensaje-boton/mensaje-boton.component";
import { ScoreComponent } from "../score/score.component";

@Component({
  selector: 'app-directivasestructurales',
  imports: [ListaUsuarioComponent, ListaFrutasComponent, MensajeBotonComponent, ScoreComponent],
  templateUrl: './directivasestructurales.component.html',
  styleUrl: './directivasestructurales.component.css'
})
export class DirectivasestructuralesComponent {

}
