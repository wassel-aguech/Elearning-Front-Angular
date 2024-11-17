import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Support } from '../projectModel/support';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  baseUrl = environment.baseUrl+ "/Support"


  constructor(private http: HttpClient) { }

  // Récupérer toutes les msupport
  findAllSupports(): Observable<Support[]> {
  return this.http.get<Support[]>(`${this.baseUrl}/listall`);
  }

  // Récupérer une support par son ID
  findSupportById(id: number): Observable<Support> {
  return this.http.get<Support>(`${this.baseUrl}/getbyid/${id}`);
  }

  // Créer ou mettre à jour une support
  saveSupport(support: Support): Observable<Support> {
  return this.http.post<Support>(`${this.baseUrl}/save`, support);
  }


   // update un support
  updateSupport(support: Support): Observable<Support> {
    return this.http.put<Support>(`${this.baseUrl}/update`, support);
  }
  // Supprimer une support par son ID
  deleteSupportById(id: number): Observable<void> {
   return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }




  uploadsupportFile(idsupport: number,  file : File): Observable<Support> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<Support>(`${this.baseUrl}/uploadFile/${idsupport}`, formData);
  }


}
