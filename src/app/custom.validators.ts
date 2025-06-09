import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function phoneFormat(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const regexp = new RegExp("/^\+33\d{9}$/");
        const allowedPhone = regexp.test(control.value);
        return allowedPhone ? { phoneFormatNotAllowed: { value: control.value } } : null;
    };
}

export function emailIsUnique(control: AbstractControl): { [key: string]: any } | null {
    let returnVal: boolean = true;
    console.log('emailIsUnique');
    // Simulation connexion BDD, il faudrait appeler un service
    if (Math.random() > 0.4) {
        returnVal = false;
    }

    return returnVal ? { emailIsUnique: { value: control.value } } : null;
}


// Exemple
// export function createPasswordStrengthValidator(): ValidatorFn {
//     return (control:AbstractControl) : ValidationErrors | null => {

//         const value = control.value;

//         if (!value) {
//             return null;
//         }

//         const hasUpperCase = /[A-Z]+/.test(value);

//         const hasLowerCase = /[a-z]+/.test(value);

//         const hasNumeric = /[0-9]+/.test(value);

//         const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

//         return !passwordValid ? {passwordStrength:true}: null;
//     }
// }