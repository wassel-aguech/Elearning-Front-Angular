import { Component ,  OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-updatecours',
  templateUrl: './updatecours.component.html',
  styleUrl: './updatecours.component.css'
})
export class UpdatecoursComponent  implements OnInit {
  coursForm!: FormGroup; // Utilisation de "!" pour indiquer que la propriété sera initialisée

  currentPhoto: string | null = 'photo-example.jpg'; // Exemple de photo actuelle
  currentPdf: string | null = 'course-example.pdf'; // Exemple de PDF actuel

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // Initialisation du formulaire avec des valeurs fictives
    this.coursForm = this.fb.group({
      nom: ['Nom Exemple', Validators.required],
      titre: ['Titre Exemple', Validators.required],
      description: ['Description Exemple', Validators.required],
      matiere: ['Matière Exemple', Validators.required],
      categorie: ['Catégorie Exemple', Validators.required],
      prix: [100, Validators.required],
      photo: [null],
      pdf: [null]
    });
  }

  onPhotoChange(event: any): void {
    // Simuler le changement de photo
    const file = event.target.files[0];
    if (file) {
      this.currentPhoto = file.name;
    }
  }

  onPdfChange(event: any): void {
    // Simuler le changement de PDF
    const file = event.target.files[0];
    if (file) {
      this.currentPdf = file.name;
    }
  }

  onSubmit(): void {
    if (this.coursForm.valid) {
      // Logique de mise à jour ici
      console.log('Formulaire soumis', this.coursForm.value);
    }
  }
}