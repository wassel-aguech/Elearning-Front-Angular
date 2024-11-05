import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'] // Assurez-vous que le nom est correct
})
export class PaymentComponent {
  paymentForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.paymentForm = this.fb.group({
      cardNumber: ['', Validators.required],
      expiryDate: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
      billingAddress: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.paymentForm.valid) {
      // Logique de traitement du paiement ici
      alert('Paiement effectué avec succès!');
    } else {
      alert('Veuillez remplir tous les champs correctement.');
    }
  }
}
