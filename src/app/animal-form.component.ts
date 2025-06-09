import { Component } from '@angular/core';
import { AbstractControl } from '@angular/forms';
//import { Animal } from './animal.model';
import { Animal } from './types';

@Component({
  selector: 'animal-form',
  standalone: false,
  templateUrl: './animal-form.component.html',
  styleUrl: './animal-form.component.css',
})
export class AnimalFormComponent {
  regimes = ['herbivore', 'carnivore', 'omnivore', 'frugivore'];
  //model = new Animal(1, 'Lion', this.regimes[1], 'Le roi de la savane.');
  model: Animal = { id: 1, name: 'Léo', type: 'Lion', regime: this.regimes[1], desc: 'Le roi de la savane.', phone: '0610421109' };
  estEnvoye = false;

  surEnvoi() {
    this.estEnvoye = true;
  }

  log(str: any) {
    console.log(str);
  }
}
