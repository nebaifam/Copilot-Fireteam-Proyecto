import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Equipo } from '../../models/equipo.model';
import { Jugador } from '../../models/jugador.model';
import { EquipoService } from '../../services/equipo.service';
import { JugadorService } from '../../services/jugador.service';

@Component({
  selector: 'app-jugadores',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss']
})
export class JugadoresComponent implements OnInit {
  readonly equipos = signal<Equipo[]>([]);
  readonly jugadores = signal<Jugador[]>([]);
  readonly cargando = signal(false);
  readonly mensajeExito = signal('');
  readonly mensajeError = signal('');
  readonly totalJugadores = computed(() => this.jugadores().length);

  readonly jugadorForm = new FormGroup({
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    posicion: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    dorsal: new FormControl(1, { nonNullable: true, validators: [Validators.required, Validators.min(1)] }),
    equipoId: new FormControl<number | null>(null, { validators: [Validators.required] })
  });

  constructor(
    private readonly equipoService: EquipoService,
    private readonly jugadorService: JugadorService
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.cargando.set(true);
    this.mensajeError.set('');
    this.cargarEquipos();
    this.cargarJugadores();
  }

  guardarJugador(): void {
    if (this.jugadorForm.invalid) {
      this.jugadorForm.markAllAsTouched();
      return;
    }

    const formValue = this.jugadorForm.getRawValue();

    this.jugadorService
      .createJugador({
        nombre: formValue.nombre,
        posicion: formValue.posicion,
        dorsal: formValue.dorsal,
        equipo: formValue.equipoId ? { id: formValue.equipoId } : undefined
      })
      .subscribe({
        next: (jugador) => {
          this.jugadores.update((jugadores) => [...jugadores, jugador]);
          this.jugadorForm.reset({ nombre: '', posicion: '', dorsal: 1, equipoId: null });
          this.mensajeExito.set('Jugador creado correctamente.');
          this.mensajeError.set('');
        },
        error: () => {
          this.mensajeError.set('No se pudo crear el jugador.');
          this.mensajeExito.set('');
        }
      });
  }

  eliminarJugador(id?: number): void {
    if (!id) {
      return;
    }

    this.jugadorService.deleteJugador(id).subscribe({
      next: () => {
        this.jugadores.update((jugadores) => jugadores.filter((jugador) => jugador.id !== id));
        this.mensajeExito.set('Jugador eliminado correctamente.');
        this.mensajeError.set('');
      },
      error: () => {
        this.mensajeError.set('No se pudo eliminar el jugador.');
        this.mensajeExito.set('');
      }
    });
  }

  private cargarEquipos(): void {
    this.equipoService.getEquipos().subscribe({
      next: (equipos) => this.equipos.set(equipos),
      error: () => this.mensajeError.set('No se pudieron cargar los equipos.')
    });
  }

  private cargarJugadores(): void {
    this.jugadorService.getJugadores().subscribe({
      next: (jugadores) => {
        this.jugadores.set(jugadores);
        this.cargando.set(false);
      },
      error: () => {
        this.mensajeError.set('No se pudieron cargar los jugadores. Revisa que el backend este iniciado.');
        this.cargando.set(false);
      }
    });
  }
}
