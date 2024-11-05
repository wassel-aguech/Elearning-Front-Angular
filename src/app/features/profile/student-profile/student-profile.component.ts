import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';
import { StudentService } from '../../../core/services/student.service';

import { Student } from '../../../models/student';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent implements OnInit {
  studentData: Student | null = null; // Initialisez à null
  courses: any[] = [];
  editMode = false;
  selectedFile: File | null = null;
  studentId: number | null = null; 

  
  constructor(private router: Router , private studentService: StudentService , private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Charger les données de l'étudiant à partir de l'API
    this.studentId = this.getCurrentStudentId();
    this.loadStudentData();
    this.loadCourses();

    
    
  }

  private loadStudentData(): void {
    const studentId = this.getCurrentStudentId(); // Récupérez l'ID de l'étudiant
    this.studentService.getStudentById(studentId).subscribe({
      next: (data) => {
        this.studentData = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des données de l\'étudiant', error);
      },
      complete: () => {
        console.log('Chargement des données terminé');
      }
    });
  }
  
  private loadCourses(): void {
    // Remplacez cette méthode par l'appel réel à votre API pour charger les cours
    this.courses = [
      { id: 1, title: 'Introduction to Angular', date: '2024-05-01' },
      { id: 2, title: 'Advanced JavaScript', date: '2024-06-15' }
    ];
  }



  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Créer un URL pour afficher l'aperçu de l'image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (this.studentData) {
          this.studentData.profilePhoto = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  }


 

  logout(): void {
    // Handle logout logic here (e.g., clear user session, redirect to login page)
    console.log('User logged out');
    this.router.navigate(['/login']); // Example redirect to login page
  }

  // Exemple de méthode pour gérer le téléchargement de fichiers
  private uploadFile(file: File): void {
    // Implémentez ici la logique pour télécharger le fichier sur le serveur
    console.log('Uploading file to server:', file);
  }


  navigateTouppdate() {
    this.router.navigate(['/uppdatestudent']);
  }

  private getCurrentStudentId(): number {
    const id = localStorage.getItem('studentId');
    if (!id) {
      console.warn('Aucun ID d\'étudiant trouvé, redirection vers la page de connexion');
      this.router.navigate(['/login']); // Rediriger vers la page de connexion
      return 1; // Vous pouvez choisir de renvoyer 1 ou gérer autrement
    }
    return +id;
  }
  
  

}