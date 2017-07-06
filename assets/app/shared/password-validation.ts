import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable()
export class PasswordValidation {

    MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let password_confirm = AC.get('password_confirm').value; // to get value in input tag
        if (password !== password_confirm) {
            console.log('false');
            // AC.get('password_confirm').setErrors({ MatchPassword: true })
            return true;
        } else {
            console.log('true');
            return null;
        }
    }
}