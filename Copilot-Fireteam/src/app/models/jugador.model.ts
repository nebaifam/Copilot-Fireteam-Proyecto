import { Equipo } from './equipo.model';

export interface Jugador {
  id?: number;
  nombre: string;
  posicion: string;
  dorsal: number;
  equipo?: Equipo;
}

export interface JugadorPayload {
  nombre: string;
  posicion: string;
  dorsal: number;
  equipo?: {
    id: number;
  };
}
