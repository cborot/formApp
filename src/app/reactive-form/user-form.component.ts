import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  standalone: false
})
export class UserFormComponent implements OnInit {
  registrationForm!: FormGroup; // Déclaration du formulaire réactif
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    // Initialisation du formulaire réactif sans validateurs
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required], // Champs pour le prénom
      lastName: ['', Validators.required], // Champs pour le nom
      email: ['', [Validators.required, Validators.email]], // Champs pour l'adresse email
      phone: ['', [Validators.required, Validators.pattern('[0-9]{7,15}')]], // Champs pour le téléphone
      address: ['', Validators.required], // Champs pour l'adresse postale
      password: ['', [Validators.required, Validators.minLength(6)]] // Champs pour le mot de passe
    });
  }

  onSubmit() {
    // Soumission des données
    console.log(this.registrationForm.value);
  }
}
