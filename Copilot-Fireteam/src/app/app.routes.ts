import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EquiposComponent } from './pages/equipos/equipos.component';
import { JugadoresComponent } from './pages/jugadores/jugadores.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'equipos',
    component: EquiposComponent
  },
  {
    path: 'jugadores',
    component: JugadoresComponent
  },
  {
    path: 'crear-equipo',
    redirectTo: 'equipos'
  },
  {
    path: 'crear-jugador',
    redirectTo: 'jugadores'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
