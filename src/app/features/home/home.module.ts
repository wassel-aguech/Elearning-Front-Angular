import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ChoixComponent } from './choix/choix.component';




@NgModule({
  declarations: [
    HomeComponent,
    ChoixComponent,
   
  
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
