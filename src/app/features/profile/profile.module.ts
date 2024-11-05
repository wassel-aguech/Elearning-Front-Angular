import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { TeacherProfileComponent } from './teacher-profile/teacher-profile.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateteacherComponent } from './updateteacher/updateteacher.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { RequestsessionComponent } from './requestsession/requestsession.component';






@NgModule({
  declarations: [
    StudentProfileComponent,
    TeacherProfileComponent,
    UpdateteacherComponent,
    UpdatestudentComponent,
    RequestsessionComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ]
})
export class ProfileModule { }
