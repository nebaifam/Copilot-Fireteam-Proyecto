import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Equipo } from '../../models/equipo.model';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss']
})
export class EquiposComponent implements OnInit {
  readonly equipos = signal<Equipo[]>([]);
  readonly cargando = signal(false);
  readonly mensajeExito = signal('');
  readonly mensajeError = signal('');
  readonly totalEquipos = computed(() => this.equipos().length);

  readonly equipoForm = new FormGroup({
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] }),
    ciudad: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(2)] })
  });

  constructor(private readonly equipoService: EquipoService) {}

  ngOnInit(): void {
    this.cargarEquipos();
  }

  cargarEquipos(): void {
    this.cargando.set(true);
    this.mensajeError.set('');

    this.equipoService.getEquipos().subscribe({
      next: (equipos) => {
        this.equipos.set(equipos);
        this.cargando.set(false);
      },
      error: () => {
        this.mensajeError.set('No se pudieron cargar los equipos. Revisa que el backend este iniciado.');
        this.cargando.set(false);
      }
    });
  }

  guardarEquipo(): void {
    if (this.equipoForm.invalid) {
      this.equipoForm.markAllAsTouched();
      return;
    }

    this.equipoService.createEquipo(this.equipoForm.getRawValue()).subscribe({
      next: (equipo) => {
        this.equipos.update((equipos) => [...equipos, equipo]);
        this.equipoForm.reset();
        this.mensajeExito.set('Equipo creado correctamente.');
        this.mensajeError.set('');
      },
      error: () => {
        this.mensajeError.set('No se pudo crear el equipo.');
        this.mensajeExito.set('');
      }
    });
  }

  eliminarEquipo(id?: number): void {
    if (!id) {
      return;
    }

    this.equipoService.deleteEquipo(id).subscribe({
      next: () => {
        this.equipos.update((equipos) => equipos.filter((equipo) => equipo.id !== id));
        this.mensajeExito.set('Equipo eliminado correctamente.');
        this.mensajeError.set('');
      },
      error: () => {
        this.mensajeError.set('No se pudo eliminar el equipo.');
        this.mensajeExito.set('');
      }
    });
  }
}
