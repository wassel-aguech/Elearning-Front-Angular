import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cour } from '../projectModel/cour';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CourService {

  baseUrl = environment.baseUrl+ "/Cours";

  constructor(private http: HttpClient) { }

  // Récupérer toutes les cours
  findAllCours(): Observable<Cour[]> {
  return this.http.get<Cour[]>(`${this.baseUrl}/listall`);
  }

  // Récupérer une cours par son ID
  findCourById(id: number): Observable<Cour> {
  return this.http.get<Cour>(`${this.baseUrl}/getbyid/${id}`);
  }

  // Créer ou mettre à jour une cours
  saveCour(Cour: Cour): Observable<Cour> {
  return this.http.post<Cour>(`${this.baseUrl}/save`, Cour);
  }

  updateCour(Cour: Cour): Observable<Cour> {
    return this.http.put<Cour>(`${this.baseUrl}/update`, Cour);
  }
  // Supprimer une matière par son ID
  deleteCourById(id: number): Observable<void> {
   return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }}


