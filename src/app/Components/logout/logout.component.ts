import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit {
 
  constructor(private router: Router) {
    // Eliminar el usuario del localStorage
    localStorage.removeItem('usuario');
    localStorage.removeItem('clave');
  }

  ngOnInit() {
    // Redirigir al usuario a la página de login
    this.router.navigate(['/login']);
  }
  

}
