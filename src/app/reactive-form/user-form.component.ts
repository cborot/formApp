import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailIsUnique } from '../custom.validators';

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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, emailIsUnique]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{7,15}')]],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  // Méthode pour vérifier si un champ a des erreurs spécifiques et les récupérer le cas échéant
  hasError(fieldName: string, errorName: string) {
    const fieldErrors = this.registrationForm.get(fieldName)?.errors;
    return fieldErrors ? fieldErrors[errorName] : false;
  }
  // Méthode pour afficher le message d'erreur associé à un champ donné
  showErrorMessage(fieldName: string) {
    const fieldControl = this.registrationForm.get(fieldName);
    // Vérifie si le champ est invalide et a été touché par l'utilisateur
    if (fieldControl?.invalid && fieldControl?.touched) {
      if (this.hasError(fieldName, 'required')) {
        // Affiche le message d'erreur pour le champ requis
        return 'Ce champ est requis.';
      } 
      else if (this.hasError(fieldName, 'email')) {
        // Affiche le message d'erreur pour le champ d'adresse e-mail invalide
        return 'Veuillez entrer une adresse e-mail valide.';
      }
      else if (this.hasError(fieldName, 'emailIsUnique')) {
        // Affiche le message d'erreur pour le champ d'adresse e-mail invalide
        return `Le champ ${fieldName} doit être unique`;
      } 
      else if (this.hasError(fieldName, 'pattern')) {
        // Affiche le message d'erreur pour le champ de numéro de téléphone invalide
        return 'Veuillez entrer un numéro de téléphone valide (entre 7 et 15 chiffres).';
      } 
      else if (this.hasError(fieldName, 'minlength')) {
        // Affiche le message d'erreur pour le champ de mot de passe invalide
        return 'Le mot de passe est requis et doit contenir au moins 6 caractères.';
      }
    }
    // Si le champ est valide ou n'a pas été touché, renvoie une chaîne vide
    return '';
  }

  onSubmit() {
    // Soumission des données
    console.log(this.registrationForm.value);
  }
}