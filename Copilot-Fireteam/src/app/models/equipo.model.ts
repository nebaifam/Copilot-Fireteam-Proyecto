import { Jugador } from './jugador.model';

export interface Equipo {
  id?: number;
  nombre: string;
  ciudad: string;
  jugadores?: Jugador[];
}

export type EquipoPayload = Pick<Equipo, 'nombre' | 'ciudad'>;
