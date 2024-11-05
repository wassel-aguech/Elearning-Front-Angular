import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../projectService/auth.service';
import { EtudiantDto } from '../../../../projectModel/etudiant-dto';
import { ToastrService } from 'ngx-toastr';





@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrl: './signup-student.component.css'
})
export class SignupStudentComponent {
  registerstudent:EtudiantDto= new EtudiantDto()
  isLoading: boolean = false;
  confirmPassword!:string;

  constructor(private authservice:AuthService , private router:Router , private toastr: ToastrService) { }

  onSubmit(): void {
    console.log("wassel")
    /* if (form.invalid) {
      Object.keys(form.controls).forEach(key => {
        form.controls[key].markAsTouched();
      });
      return;
    } */

    this.isLoading = true;

    console.log(this.registerstudent)

    this.authservice.registerStudent(this.registerstudent).subscribe({

      next: (response) => {
        this.isLoading = false;
        alert('Student registered successfully!');
        this.toastr.success("student succesfully registred 😎")
        //const studentId = response.id; // Modifiez ceci selon la structure de votre réponse

        // Stockez l'ID dans le localStorage si nécessaire
        //localStorage.setItem('studentId', studentId.toString());
        //form.resetForm();
        //this.router.navigate(['profile/student/:id']);
      },
      error: (error) => {
        this.isLoading = false;
        console.error('Error registering student:', error);
        this.toastr.error(" orry student filed register !!!!! 😥")

      }
    });
  }

  //onFileSelected(event: Event): void {
   // const input = event.target as HTMLInputElement;
   // if (input.files && input.files.length > 0) {
      //this.profilePhoto = input.files[0];
    //}
 // }

  isFieldInvalid(fieldName: string, form: NgForm): boolean {
    const field = form.controls[fieldName];
    return field.invalid && field.touched;
  }

  doPasswordsMatch(): boolean {
    return this.registerstudent.password === this.confirmPassword;
  }

  isEmailValid(): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(this.registerstudent.email);
  }
}
