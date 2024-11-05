import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrl: './updatestudent.component.css'
})
export class UpdatestudentComponent {
  studentData = {
    name: '',
    email: '',
    phone: '',
    password: '',
    gender: 'male',
    city: '',
    profilePicture: 'https://i.pinimg.com/564x/a2/ee/4a/a2ee4af3af8b6cc86c961fdc0d8f730d.jpg '
  };
  editMode: boolean = true;  // Assurez-vous que l'édition est activée par défaut

  // Méthode pour mettre à jour le profil
  updateProfile() {
    // Logique pour mettre à jour les données du profil
    console.log('Profile updated:', this.studentData);
    // Vous pouvez faire un appel HTTP ici pour envoyer les données mises à jour au serveur
  }

  // Méthode pour gérer la sélection de fichier pour la photo de profil
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Logique pour gérer le fichier sélectionné, par exemple le prévisualiser ou le télécharger
      const reader = new FileReader();
      reader.onload = () => {
        this.studentData.profilePicture = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Méthode pour annuler les modifications
  cancelUpdate() {
    // Logique pour annuler les modifications et revenir à l'état précédent
    console.log('Update cancelled');
  }
}
