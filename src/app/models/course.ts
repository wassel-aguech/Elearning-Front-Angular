export class Course {

    id?: number; // Optionnel, car l'id est généré par la base de données
    nom: string=''; // Nom du cours
    categorie: string=''; // Catégorie du cours
    matiere: string=''; // Matière du cours
    description: string=''; // Description du cours
    profilePhoto: string=''; // Chemin vers la photo de profil ou nom de fichier
    pdfcours: string=''; // Chemin vers le fichier PDF du cours

    constructor(id: number) {
        this.id = 0;               // Initialisez l'ID dans le constructeur
    }




}
