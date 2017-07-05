import { Component, OnInit }      from '@angular/core';
import { FormBuilder, 
         FormControl, 
         FormGroup,
         FormsModule, 
         ReactiveFormsModule, 
         Validators }             from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
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
        ) { }

    ngOnInit() {
        // this.firstname= new FormControl();
        // this.lastname = new FormControl('', Validators.required);
        // this.username = new FormControl('', Validators.required),
        // this.password= new FormControl('', [Validators.required,
        //                                       Validators.minLength(1)]);
        // this.password_confirm = new FormControl('', Validators.required);  
        
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this.buildForm();
    }
    
    buildForm(): void {
        this.myform = this._fb.group({
            "firstname": [this.user.firstName, [
                Validators.required,]
               
            ],
            "lastname": [this.user.lastName,[
                Validators.required]
            ],
            "username": [this.user.username, [
                Validators.required]
            ],
            "password": [this.user.password,[
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(24)]
            ],
            "password_confirm": [ this.user.password_confirm, [
                Validators.required]
            ],
        });
        this.myform
            .valueChanges
            .subscribe(data => this.onValueChanged(data));
 
        this.onValueChanged(); // (re)set validation messages now
    }
    onValueChanged(data?: any) {
        if (!this.myform) { 
            return; }

        const form = this.myform;
    
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
        'confirm_password': ''
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
        'confirm_password': {
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

