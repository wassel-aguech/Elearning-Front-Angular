import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../projectModel/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  baseUrl = environment.baseUrl+ "/Tag"


  constructor(private http: HttpClient) { }

  // Récupérer toutes les matières
  findAllTags(): Observable<Tag[]> {
  return this.http.get<Tag[]>(`${this.baseUrl}/listall`);
  }

  // Récupérer une matière par son ID
  findTagById(id: number): Observable<Tag> {
  return this.http.get<Tag>(`${this.baseUrl}/getbyid/${id}`);
  }

  // Créer ou mettre à jour une matière
  saveTag(Tag: Tag): Observable<Tag> {
  return this.http.post<Tag>(`${this.baseUrl}/save`, Tag);
  }

  updateTag(Tag: Tag): Observable<Tag> {
    return this.http.put<Tag>(`${this.baseUrl}/update`, Tag);
  }
  // Supprimer une matière par son ID
  deleteTagById(id: number): Observable<void> {
   return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

}
