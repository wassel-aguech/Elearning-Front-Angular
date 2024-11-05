import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Niveau } from '../projectModel/niveau';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {


  baseUrl = environment.baseUrl+ "/Niveau";


  constructor(private http: HttpClient) { }

  // Récupérer toutes les viveaux
  findAllNiveaus(): Observable<Niveau[]> {
  return this.http.get<Niveau[]>(`${this.baseUrl}/listall`);
  }

  // Récupérer une niveau par son ID
  findNiveauById(id: number): Observable<Niveau> {
  return this.http.get<Niveau>(`${this.baseUrl}/getbyid/${id}`);
  }

  // Créer ou mettre à jour un niveau
  saveNiveau(Niveau: Niveau): Observable<Niveau> {
  return this.http.post<Niveau>(`${this.baseUrl}/save`, Niveau);
  }

  updateNiveau(Niveau: Niveau): Observable<Niveau> {
    return this.http.put<Niveau>(`${this.baseUrl}/update`, Niveau);
  }
  // Supprimer une niveau par son ID
  deleteNiveauById(id: number): Observable<void> {
   return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }}



