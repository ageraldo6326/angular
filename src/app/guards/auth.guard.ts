// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const usuario = localStorage.getItem('usuario');

  if (usuario) {
    // Está logueado, se permite el acceso
    return true;
  } else {
    // No está logueado, redirige a login
    const router = inject(Router);
    router.navigate(['/login']);
    return false;
  }
};

