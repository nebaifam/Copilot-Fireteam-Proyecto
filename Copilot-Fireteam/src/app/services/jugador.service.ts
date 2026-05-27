import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Jugador, JugadorPayload } from '../models/jugador.model';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private readonly apiUrl = '/api/jugadores';

  constructor(private readonly http: HttpClient) {}

  getJugadores(): Observable<Jugador[]> {
    return this.http.get<Jugador[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  createJugador(jugador: JugadorPayload): Observable<Jugador> {
    return this.http.post<Jugador>(this.apiUrl, jugador).pipe(catchError(this.handleError));
  }

  deleteJugador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: unknown): Observable<never> {
    return throwError(() => error);
  }
}
