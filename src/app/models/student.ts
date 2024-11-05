export class Student {
    id: number;  
    lastName: string = '';
    firstName: string = '';
    email: string = '';
    phone: string = '';
    password: string = '';
    confirmPassword: string = '';
    class: string = '';
    gender: string = '';
    city: string = '';
    profilePhoto?: File | null = null;
    
    constructor(id: number) {
        this.id = 0;               // Initialisez l'ID dans le constructeur
    }
}