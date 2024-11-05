import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Course {
  id: number;
  photo: string;
  title: string;
  description: string;
  price: number;
}

interface Teacher {
  photo: string;
  nom: string;
  prenom: string;
  email: string;
  bio: string;
  cvLink: string;
  accepteSessions: boolean;
  courses: Course[];
}


@Component({
  selector: 'app-teacher-profile',
  templateUrl: './teacher-profile.component.html',
  styleUrl: './teacher-profile.component.css'
})
export class TeacherProfileComponent implements OnInit {
 
  teacher: Teacher = {
    photo: 'https://i.pinimg.com/564x/2e/3e/fd/2e3efdc0486a8858f9e0471eee3f68e5.jpg',
    nom: 'John',
    prenom: 'Doe',
    email: 'john.doe@example.com',
    bio: 'Description du professeur...',
    cvLink: 'url/to/cv.pdf',
    accepteSessions: true, // Modifier cette valeur selon les données de l'inscription
    courses: [
      {
        id: 1,
        photo: 'https://i.pinimg.com/564x/23/8e/b3/238eb30e255d94fc0d2c5031d4e999f2.jpg',
        title: 'Cours python',
        description: 'Description du cours 1...',
        price: 50
      },
      // Ajouter d'autres cours ici...
    ]
    
  };
  showNotifications = false;
  notifications: string[] = ['Notification 1', 'Notification 2', 'Notification 3'];

  constructor(private router: Router) { }

  ngOnInit(): void { }

  toggleNotifications() {
    this.showNotifications = !this.showNotifications;
  }

  requestSession() {
    this.router.navigate(['/request-session']);
  }

  editProfile() {
    this.router.navigate(['/edit-profile']);
  }

  logout() {
    this.router.navigate(['/login']);
  }

  addCourse() {
    this.router.navigate(['/add']);
  }

  editCourse(courseId: number) {
    this.router.navigate(['/edit-course', courseId]);
  }

  deleteCourse(courseId: number) {
    // Implémenter la logique de suppression du cours ici...
  }
  viewSales() {
    this.router.navigate(['/vente']); // Changez le chemin en fonction de votre route pour les ventes
  }


  navigateToaddcourse() {
    this.router.navigate(['/newcour']);
  }

  navigateTouppdatecours() {
    this.router.navigate(['/updatecours']);
  }
  demanderSession() {
    // Navigation vers la page de demande de session
    this.router.navigate(['/session']); // Assurez-vous que ce chemin est correct
  }


}