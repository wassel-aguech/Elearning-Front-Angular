import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthenticationRequest } from '../../../projectModel/authentication-request';
import { AuthService } from '../../../projectService/auth.service';
import { ToastRef, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 
  loading = false;
  submitted = false;
  error: string | null = null;
  authrequest:AuthenticationRequest = new AuthenticationRequest()
  


  constructor(
    
    private authservice:AuthService ,// Injection d'AuthService
    private router: Router, // Injection du service de routage
    private toastr : ToastrService
  ) {
   /*  this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    }); */
  }

 /*  get f() { return this.loginForm.controls; }

  get emailErrors() {
    const control = this.f['email'];
    if (control.errors) {
      if (control.errors['required']) {
        return 'Email est requis';
      }
      if (control.errors['email']) {
        return 'Format d\'email invalide';
      }
    }
    return null;
  } */

 /*  get passwordErrors() {
    const control = this.f['password'];
    if (control.errors) {
      if (control.errors['required']) {
        return 'Mot de passe requis';
      }
      if (control.errors['minlength']) {
        return 'Le mot de passe doit comporter au moins 6 caractères';
      }
    }
    return null;
  } */
    onSubmit(): void {
      console.log("wassel")
      /* if (form.invalid) {
        Object.keys(form.controls).forEach(key => {
          form.controls[key].markAsTouched();
        });
        return;
      } */
  
  
      console.log(this.authrequest)
  
      this.authservice.login(this.authrequest).subscribe({
  
        next: (response) => {
          
          alert("authentificated successfully!");
          this.authservice.setUserToken(response)
          
          const id=localStorage.getItem("userId");
          console.log(Number(id))
          this.toastr.success(" succesfully login 😎")


  
          //Stockez l'ID dans le localStorage si nécessaire
          
        
          this.router.navigate(['profile/student/:id']);
        },
        error: (error) => {
          
          console.error('Error registering student:', error);
          this.toastr.error(" Filed login !!!!! 😥")

        }
      });
    }
  
}