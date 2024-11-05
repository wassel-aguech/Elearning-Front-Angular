import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { FormsModule } from '@angular/forms';

import { NewcourseComponent } from './newcourse/newcourse.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatecoursComponent } from './updatecours/updatecours.component'; 
import { CourseService } from '../../core/services/course.service';



@NgModule({
  declarations: [
    CourseListComponent,
    CourseDetailComponent,
    
    NewcourseComponent,
          UpdatecoursComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  
   
  ]
})
export class CoursesModule { }
