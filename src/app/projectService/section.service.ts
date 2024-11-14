import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Section } from '../projectModel/section';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  baseUrl = environment.baseUrl+ "/Section"


  constructor(private http: HttpClient) { }

  // Récupérer toutes les matières
  findAllSections(): Observable<Section[]> {
  return this.http.get<Section[]>(`${this.baseUrl}/listall`);
  }

  // Récupérer une matière par son ID
  findSectionById(id: number): Observable<Section> {
  return this.http.get<Section>(`${this.baseUrl}/getbyid/${id}`);
  }

  // Créer ou mettre à jour une matière
  saveSection(section: Section): Observable<Section> {
  return this.http.post<Section>(`${this.baseUrl}/save`, section);
  }

  updateSection(Section: Section): Observable<Section> {
    return this.http.put<Section>(`${this.baseUrl}/update`, Section);
  }
  // Supprimer une matière par son ID
  deleteSectionById(id: number): Observable<void> {
   return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

}
