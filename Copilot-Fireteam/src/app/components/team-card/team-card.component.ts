import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TeamCard {
  name: string;
  players: number;
  status: string;
  description: string;
}

@Component({
  selector: 'app-team-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent {
  @Input() team!: TeamCard;
}
