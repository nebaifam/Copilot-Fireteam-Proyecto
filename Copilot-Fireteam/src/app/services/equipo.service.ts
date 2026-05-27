import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Equipo, EquipoPayload } from '../models/equipo.model';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private readonly apiUrl = '/api/equipos';

  constructor(private readonly http: HttpClient) {}

  getEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  createEquipo(equipo: EquipoPayload): Observable<Equipo> {
    return this.http.post<Equipo>(this.apiUrl, equipo).pipe(catchError(this.handleError));
  }

  deleteEquipo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(error: unknown): Observable<never> {
    return throwError(() => error);
  }
}
