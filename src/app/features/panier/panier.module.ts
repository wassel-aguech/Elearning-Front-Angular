import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaniercoursComponent } from './paniercours/paniercours.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VenteComponent } from './vente/vente.component';
import { RapportventesComponent } from './rapportventes/rapportventes.component';



@NgModule({
  declarations: [
    PaniercoursComponent,
    PaymentComponent,
    VenteComponent,
    RapportventesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
   ReactiveFormsModule
  ]
})
export class PanierModule { }
