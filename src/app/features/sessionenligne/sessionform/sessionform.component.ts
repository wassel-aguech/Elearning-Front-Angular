import { Component } from '@angular/core';

@Component({
  selector: 'app-sessionform',
  templateUrl: './sessionform.component.html',
  styleUrl: './sessionform.component.css'
})
export class SessionformComponent {
  // Objet pour les informations du professeur
  prof = {
    nom: 'Dupont',
    disponibilite: 'Lundi - Vendredi, 10h - 18h',
    prix: 50,
    description: 'Professeur expérimenté en mathématiques et physique.',
    matiere: 'Mathématiques',
    datesDisponibles: ['2024-10-20', '2024-10-21', '2024-10-22'] // Exemple de dates disponibles
  };

  // Objet pour le formulaire d'inscription
  form = {
    nom: '',
    prenom: '', // Ajout du prénom
    email: '',
    niveau: '', // Ajout du niveau
    matiere: '', // Ajout de la matière
    date: '',
    message: ''
  };

  formVisible = false;

  toggleForm() {
    this.formVisible = !this.formVisible;
  }

  onSubmit() {
    // Logique d'envoi du formulaire ici
    console.log('Formulaire soumis : ', this.form);
  }
}