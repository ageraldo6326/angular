import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-menu',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  usuario:string = '';
  menuAbierto: boolean = false;

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario') || '';
  }


  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }




}
