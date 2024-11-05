export class Teacher {
    id: number;  
    lastName: string = '';
    firstName: string = '';
    email: string = '';
    phone: string = '';
    password: string = '';
    confirmPassword: string = '';
    subjects: string = '';
    categories: string = '';
    city: string = '';
    bio: string = '';
    profilePhoto?: File | null = null;
    
    constructor(id: number) {
        this.id = 0;               // Initialisez l'ID dans le constructeur
    }
}
