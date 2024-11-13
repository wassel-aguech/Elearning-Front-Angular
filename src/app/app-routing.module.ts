import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { LoginComponent } from './features/auth/login/login.component';
import { SignupStudentComponent } from './features/auth/signup/signup-student/signup-student.component';
import { SignupTeacherComponent } from './features/auth/signup/signup-teacher/signup-teacher.component';
import { StudentProfileComponent } from './features/profile/student-profile/student-profile.component';
import { TeacherProfileComponent } from './features/profile/teacher-profile/teacher-profile.component';
import { CourseListComponent } from './features/courses/course-list/course-list.component';
import { CourseDetailComponent } from './features/courses/course-detail/course-detail.component';

import { ChoixComponent } from './features/home/choix/choix.component';
import { PaniercoursComponent } from './features/panier/paniercours/paniercours.component';
import { PaymentComponent } from './features/panier/payment/payment.component';
import { NewcourseComponent } from './features/courses/newcourse/newcourse.component';
import { VenteComponent } from './features/panier/vente/vente.component';
import { RapportventesComponent } from './features/panier/rapportventes/rapportventes.component';
import { RequestsessionComponent } from './features/profile/requestsession/requestsession.component';
import { UpdatestudentComponent } from './features/profile/updatestudent/updatestudent.component';
import { UpdateteacherComponent } from './features/profile/updateteacher/updateteacher.component';
import { UpdatecoursComponent } from './features/courses/updatecours/updatecours.component';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { SessionformComponent } from './features/sessionenligne/sessionform/sessionform.component';
import { GestionmatiereComponent } from './pageprofesseur/gestionmatiere/gestionmatiere.component';
import { GestionniveauComponent } from './pageprofesseur/gestionniveau/gestionniveau.component';
import { GestioncourComponent } from './pageprofesseur/gestioncour/gestioncour.component';
import { GestiontagComponent } from './pageprofesseur/gestiontag/gestiontag.component';







const routes: Routes = [
  { path: '', component: HomeComponent },
  {path : 'choix' , component:ChoixComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup/student', component: SignupStudentComponent },
  { path: 'signup/teacher', component: SignupTeacherComponent },
  { path: 'profile/student/:id', component: StudentProfileComponent },
  { path: 'profile/teacher/:id', component: TeacherProfileComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'courses/:id', component: CourseDetailComponent },
  {path: 'panier' , component:PaniercoursComponent},
  {path:'payment', component:PaymentComponent},
  {path:'course2', component:NewcourseComponent},
  {path:'vente',component:VenteComponent}, 
  {path:'rapportventes',component:RapportventesComponent}, 
  {path:'requestsession',component:RequestsessionComponent}, 
  {path:'uppdatestudent',component:UpdatestudentComponent},
  {path:'uppdateteacher',component:UpdateteacherComponent},  
  {path:'newcour',component:NewcourseComponent},
  {path:'updatecours', component:UpdatecoursComponent},
{path:'aboutus' , component:AboutusComponent},
{path:'session' , component:SessionformComponent},
{path:'matiere' , component:GestionmatiereComponent},
{path:'niveau' , component:GestionniveauComponent},
  {path : 'cour' , component : GestioncourComponent},
  {path : 'tag' , component : GestiontagComponent},


  { path: '**', redirectTo: '' } // Redirection pour les routes non définies
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
