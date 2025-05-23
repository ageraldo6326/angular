import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-usuario',
  imports: [],
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})
export class ListaUsuarioComponent {

  usuarios = [
    {"nombre":"Angel", "edad":39, "activo":true},
    {"nombre":"Kelly", "edad":32, "activo":false},
    {"nombre":"Raniel", "edad":22, "activo":true},
    {"nombre":"Isaac", "edad":3, "activo":false},
  ]
}
