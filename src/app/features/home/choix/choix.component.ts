import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrl: './choix.component.css'
})
export class ChoixComponent {


  constructor(private router:Router){}

  navigateToStudentSignup() {
    this.router.navigate(['/signup/student']);
  }

  navigateToTeacherSignup() {
    this.router.navigate(['/signup/teacher']);
  }

}
