import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newcourse',
  templateUrl: './newcourse.component.html',
  styleUrl: './newcourse.component.css'
})
export class NewcourseComponent {
  coursForm: FormGroup;
  photoFile: File | null = null;
  pdfFile: File | null = null;
  router: any;

  constructor(private fb: FormBuilder) {
    this.coursForm = this.fb.group({
      nom: ['', Validators.required],
      titre: ['', Validators.required],
      description: ['', Validators.required],
      matiere: ['', Validators.required],
      categorie: ['', Validators.required],
      photo: [null, Validators.required],
      pdf: [null, Validators.required]
    });
  }

  // Gestion des fichiers photo
  onPhotoChange(event: any) {
    this.photoFile = event.target.files[0];
  }

  // Gestion des fichiers PDF
  onPdfChange(event: any) {
    this.pdfFile = event.target.files[0];
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.coursForm.valid) {
      // Afficher les données dans la console
      console.log('Formulaire soumis :', this.coursForm.value);
      console.log('Photo :', this.photoFile);
      console.log('PDF :', this.pdfFile);

      // Réinitialiser le formulaire
      this.coursForm.reset();
      this.photoFile = null;
      this.pdfFile = null;
    } else {
      console.log('Formulaire non valide');
    }
  }






}