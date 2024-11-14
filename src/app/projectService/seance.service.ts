import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Seance } from '../projectModel/seance';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  baseUrl = environment.baseUrl+ "/Seance"


  constructor(private http: HttpClient) { }

  // Récupérer toutes les matières
  findAllSeances(): Observable<Seance[]> {
  return this.http.get<Seance[]>(`${this.baseUrl}/listall`);
  }

  // Récupérer une matière par son ID
  findSeanceById(id: number): Observable<Seance> {
  return this.http.get<Seance>(`${this.baseUrl}/getbyid/${id}`);
  }

  // Créer ou mettre à jour une matière
  saveSeance(seance: Seance): Observable<Seance> {
  return this.http.post<Seance>(`${this.baseUrl}/save`, seance);
  }

  updateSeance(Seance: Seance): Observable<Seance> {
    return this.http.put<Seance>(`${this.baseUrl}/update`, Seance);
  }
  // Supprimer une matière par son ID
  deleteSeanceById(id: number): Observable<void> {
   return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

}
