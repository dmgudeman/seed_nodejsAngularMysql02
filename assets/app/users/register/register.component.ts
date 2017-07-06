import { Component, OnInit }      from '@angular/core';
import { FormBuilder, 
         FormControl, 
         FormGroup,
         FormsModule, 
         ReactiveFormsModule, 
         Validators }             from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PasswordValidation }        from '../../shared/password-validation';
// import { AlertService }           from '../services/alert.service';
// import { AuthenticationService }  from '../services/authentication.service';
import { User }                   from '../user';
import { UserService }            from '../user.service';
// import { validateUsername }     from '../services/user-validators/validate-username';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    myform : FormGroup;
    firstname;
    lastname;
    username;
    password;
    password_confirm; 
    user = new User();

   
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _fb:FormBuilder,
        private _userService:UserService,
        private _passwordValidation: PasswordValidation
        ) {
            this.buildForm();
         }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        
    }
    
    buildForm(): void {
        this.myform = this._fb.group({
            firstname: ['',  Validators.required],
            lastname: ['', Validators.required],
            username: ['', Validators.required],
            password: ['',[
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(24)]
            ],
            password_confirm: ['', Validators.required],
        }
    //     ,{validator: this.checkIfMatchingPasswords('password', 'password_confirm')
    // }
    );
         
        this.myform
            .valueChanges
            .subscribe(data => this.onValueChanged(data));
 
        this.onValueChanged(); // (re)set validation messages now
    }

checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    console.log(`checkIfMatchingPasswords called`);
          return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
              return passwordConfirmationInput.setErrors({notEquivalent: true})
            }
            else {
                return passwordConfirmationInput.setErrors(null);
            }
          }
        }


    onValueChanged(data?: any) {
        if (!this.myform) { 
            return; }

        const form = this.myform;
    
        if (this.myform.value.password && this.myform.value.password_confirm){
            this._passwordValidation.MatchPassword(this.myform);
        }
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
        
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                console.log(`control= ${control}`);
                console.log(`control.dirty= ${control.dirty}`);
                console.log(`control.valid= ${control.valid}`);
                console.log(`control.touched= ${control.touched}`);
                console.log(`field= ${field}`);
                console.log(messages);
                for (const key in control.errors) {
                console.log(`key= ${key}`);
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
            
        
        }
    }
 
    formErrors = {
        'firstname': '',
        'lastname': '',
        'username': '',
        'password': '',
        'password_confirm': ''
    };
    
    validationMessages = {
        'firstname': {
            'required': 'First name is required.',
        },
        'lastname': {
            'required': 'Last name is required.',
        },
        'username': {
            'required': 'Username is required.'
        },
        'password': {
            'required': 'A password is required.',
            'minlength': 'Password must be at least 4 characters long.',
            'maxlength': 'Password cannot be more than 24 characters long.',
        },
        'password_confirm': {
            'required': 'Passwords must match'
        },
    };

    onLogout() {
        this._userService.onLogout();
        this._router.navigate(['login']);
    }

    onSubmit() {
      
        let result;
        // console.log(`register.component onSubmit payload= ${JSON.stringify(this.myform.value)}`);
        let myform = this.myform.value;
        // console.log(`register.component onSubmit payload= ${JSON.stringify(myform.firstname)}`);
        let firstname = myform.firstname;
        let lastname = myform.lastname;
        let username = myform.username;
        let password = myform.password;
        let password_confirmation = myform.password_confirm;

        let payload = { firstname, lastname, username, password };
        // console.log(`register.component onSubmit payload= ${payload}`);
        result = this._userService.addUser(payload);
    
        result.subscribe(x => {
                // Ideally, here we'd want:
                // this.form.markAsPristine();
            this._router.navigate(['login']);
        });
    }

}

