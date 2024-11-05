import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teacher } from '../../models/teacher';




interface Course {
  id: number;
  photo: string;
  title: string;
  description: string;
  price: number;
}




@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private baseUrl = 'http://localhost:8080/api/teachers';

  constructor(private http: HttpClient) { }
  registerTeacher(formData: FormData): Observable<{ id: number }> {
    // Send the FormData to the backend using an HTTP POST request
    return this.http.post<{ id: number }>(`${this.baseUrl}/register`, formData); // Use formData here
  }
  
  
  // Connexion d'un enseignant
  loginTeacher(email: string, password: string): Observable<Teacher> {
    const body = { email, password };
    return this.http.post<Teacher>(`${this.baseUrl}/login`, body);
  }

  // Récupérer tous les enseignants
  getAllTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.baseUrl}`);
  }

  // Récupérer un enseignant par son ID
  getTeacherById(id: number): Observable<Teacher> {
    return this.http.get<Teacher>(`${this.baseUrl}/${id}`);
  }

  // Mettre à jour un enseignant
  updateTeacher(id: number, teacher: Teacher): Observable<Teacher> {
    return this.http.put<Teacher>(`${this.baseUrl}/update/${id}`, teacher);
  }

  // Supprimer un enseignant
  deleteTeacher(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
}