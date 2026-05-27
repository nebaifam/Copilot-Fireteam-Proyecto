import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EquipoService } from '../../services/equipo.service';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  readonly totalEquipos = signal(0);
  readonly totalJugadores = signal(0);
  readonly cargando = signal(false);
  readonly apiConectada = signal(false);
  readonly resumen = computed(() => `${this.totalEquipos()} equipos y ${this.totalJugadores()} jugadores`);

  constructor(
    private readonly equipoService: EquipoService,
    private readonly jugadorService: JugadorService
  ) {}

  ngOnInit(): void {
    this.cargarResumen();
  }

  cargarResumen(): void {
    this.cargando.set(true);

    this.equipoService.getEquipos().subscribe({
      next: (equipos) => {
        this.totalEquipos.set(equipos.length);
        this.apiConectada.set(true);
        this.cargando.set(false);
      },
      error: () => {
        this.apiConectada.set(false);
        this.cargando.set(false);
      }
    });

    this.jugadorService.getJugadores().subscribe({
      next: (jugadores) => this.totalJugadores.set(jugadores.length),
      error: () => this.apiConectada.set(false)
    });
  }
}
