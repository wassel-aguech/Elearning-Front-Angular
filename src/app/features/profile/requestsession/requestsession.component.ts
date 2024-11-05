import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-requestsession',
  templateUrl: './requestsession.component.html',
  styleUrl: './requestsession.component.css'
})
export class RequestsessionComponent implements OnInit {
  requestForm: FormGroup;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder) {
    this.requestForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      comments: ['']
    });
  }
  

  ngOnInit(): void {
    this.requestForm.valueChanges.subscribe(() => {
      console.log('Form status:', this.requestForm.status);
      console.log('Form invalid:', this.requestForm.invalid);
    });
  }
  

  // Getter methods for easier access to form fields
  get name() {
    return this.requestForm.get('name');
  }

  get email() {
    return this.requestForm.get('email');
  }

  get subject() {
    return this.requestForm.get('subject');
  }

  get date() {
    return this.requestForm.get('date');
  }

  get time() {
    return this.requestForm.get('time');
  }

  onSubmit() {
    if (this.requestForm.valid) {
      console.log('Form Submitted', this.requestForm.value);
      this.successMessage = 'Votre demande a été soumise avec succès !'; // Définir le message de succès
      this.requestForm.reset(); // Réinitialiser le formulaire après soumission
    } else {
      console.log('Form is not valid');
    }
  }
  }