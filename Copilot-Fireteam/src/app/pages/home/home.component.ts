import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamCardComponent } from '../../components/team-card/team-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TeamCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  readonly teams = [
    {
      name: 'Alpha Squad',
      players: 5,
      status: 'Activo',
      description: 'Equipo de ataque rápido con gran coordinación y movilidad.'
    },
    {
      name: 'Bravo Unit',
      players: 4,
      status: 'Defensa',
      description: 'Especialistas en control de zona y soporte táctico.'
    }
  ];
}
