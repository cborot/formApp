import { Directive, input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';



@Directive({
  selector: 'phoneFormat',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneValidatorDirective, multi: true }],
  standalone: false
})
export class PhoneValidatorDirective implements Validator {
  allowedPhone = input<string>('', { alias: 'phoneFormat' });

  validate(control: AbstractControl): ValidationErrors | null {
    console.log(this.allowedPhone);
    return this.allowedPhone
      ? this.phoneValidator(new RegExp(this.allowedPhone(), 'i'))(control)
      : null;
  }

  phoneValidator(regexp: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const allowedPhone = regexp.test(control.value);
      return allowedPhone ? { phoneFormatNotAllowed: { value: control.value } } : null;
    };
  }
}