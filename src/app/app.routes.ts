import { Routes } from '@angular/router';
import { GuarderiaPerritosComponent } from './Components/guarderia-perritos/guarderia-perritos.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { BienvenidoComponent } from './Components/bienvenido/bienvenido.component';
import { InterporlacionComponent } from './Components/interporlacion/interporlacion.component';
import { MensajePadreHijoComponent } from './Components/mensaje-padre-hijo/mensaje-padre-hijo.component';
import { MensajeHijoPadreComponent } from './Components/mensaje-hijo-padre/mensaje-hijo-padre.component';
import { PipeComponent } from './Components/pipe/pipe.component';
import { DirectivasestructuralesComponent } from './Components/directivasestructurales/directivasestructurales.component';
import { MenuComponent } from './Components/menu/menu.component';
import { LoginComponent } from './Components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { LogoutComponent } from './Components/logout/logout.component';
import { Pagina404Component } from './Components/pagina404/pagina404.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'menu', 
    component: MenuComponent,
    canActivate: [authGuard],
    children: [
      {path: 'usuarios', component: UsuarioComponent},
      {path: 'bienvenido', component: BienvenidoComponent},
      {path: 'directivasestructurales', component: DirectivasestructuralesComponent},
      {path: 'interpolacion', component: InterporlacionComponent},
      {path: 'mensajepadrehijo', component: MensajePadreHijoComponent},
      {path: 'mensajehijopadre', component: MensajeHijoPadreComponent},
      {path: 'pipe', component: PipeComponent},
      {path: 'perritos', component: GuarderiaPerritosComponent},
      {path: 'logout', component: LogoutComponent},
    ]

  },
  { path: '**', component: Pagina404Component }

];
