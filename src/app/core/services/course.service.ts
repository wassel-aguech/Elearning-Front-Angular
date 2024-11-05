import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = 'http://localhost:8080/api/courses'; // Enlever un slash

  constructor(private http: HttpClient) { }

  // Récupérer tous les cours
  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.baseUrl);
  }

  // Récupérer un cours par ID
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/${id}`);
  }

  // Créer un nouveau cours
  createCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course);
  }

  // Mettre à jour un cours
  updateCourse(id: number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.baseUrl}/${id}`, course);
  }

  // Supprimer un cours
  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Rechercher des cours par catégorie
  getCoursesByCategorie(categorie: string): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.baseUrl}/search/categorie?categorie=${categorie}`);
  }
}