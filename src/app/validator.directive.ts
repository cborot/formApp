import { Directive, input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,

} from '@angular/forms';
import { phoneFormat } from './custom.validators';

@Directive({
  selector: '[phoneFormat]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true }],
  standalone: false
})
export class PhoneValidatorDirective implements Validator {
  //value = input<string>('', { alias: 'phoneFormat' });

  validate(control: AbstractControl): ValidationErrors | null {
    console.log('In validate' + control.value);
    return phoneFormat()(control);
  }
}