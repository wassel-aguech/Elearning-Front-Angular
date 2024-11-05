import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './features/home/home.module';
import { AuthModule } from './features/auth/auth.module';
import { ProfileModule } from './features/profile/profile.module';
import { CoursesModule } from './features/courses/courses.module';
import { AdminModule } from './features/admin/admin.module';
import { SessionenligneModule } from './features/sessionenligne/sessionenligne.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PanierModule } from './features/panier/panier.module';
import { provideHttpClient } from '@angular/common/http';
import { AboutusComponent } from './features/aboutus/aboutus.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GestionmatiereComponent } from './pageprofesseur/gestionmatiere/gestionmatiere.component';
import { GestionniveauComponent } from './pageprofesseur/gestionniveau/gestionniveau.component';
import { GestioncourComponent } from './pageprofesseur/gestioncour/gestioncour.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    GestionmatiereComponent,
    GestionniveauComponent,
    GestioncourComponent,
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    ProfileModule,
    CoursesModule,
    AdminModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PanierModule,
    ToastrModule.forRoot(), 
    BrowserAnimationsModule, 
    ReactiveFormsModule,


],
  


providers: [
  provideHttpClient() 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
