import { Component, OnInit }      from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService }            from '../user.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html'

})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    myform: FormGroup;
    userId: number;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        // private _authenticationService: AuthenticationService,
        // private _alertService: AlertService,
        private _fb: FormBuilder,
        private _userService: UserService
    ) { 
        this.buildForm();
    }

    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    }

    buildForm(): void {
        this.myform = this._fb.group({
            username: ['', Validators.required ],
            password: ['', Validators.required ],
        });
         
        this.myform
            .valueChanges
            .subscribe(data => this.onValueChanged(data));
 
        this.onValueChanged(); // (re)set validation messages now
    }
    onValueChanged(data?: any) {
        if (!this.myform) {
            return; }
        // console.log(`data onValueChanged ${JSON.stringify(data)}`);
        const form = this.myform;
    
        for (const field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            // console.log(`control ${field}`);
            // console.log(`control.dirty ${control.dirty}`);
            // console.log(`control.valid ${control.valid}`);
            
            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                
            console.log(`messages ${messages}`);
                for (const key in control.errors) {
                    console.log(`key ${key}`);
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
 
    formErrors = {
        'username': '',
        'password': '',
    };
    
    validationMessages = {
        'username': {
            'required': 'Username is required.'
        },
        'password': {
            'required': 'A password is required.',
        },
    };
    goToRegister() {
        this._router.navigate(['/register']);
    }

    onLogout() {
         this._userService.onLogout();
    }
    
    onSubmit() {
       
       
        // HEALTH OF LOCALSTORAGE----------------------------------------
        // https://stackoverflow.com/questions/34245593/html5-localstorage-usefull-functions-javascript-typescript
        // There are a lot of good methods about the localStorage here. 
        // This because the items were being stored to localStorage but did not show up on the developer tools area. 
        function localStorage_consoleInfo() {
            var amount = 0;
            var size = 0;
            for (var i = 0; i < localStorage.length; ++i) {
                var key = localStorage.key(i)
                var value = localStorage.getItem(key);
                console.log(amount, key, value);
                size += key.length + value.length;
                amount++;
            }
            console.log("Total entries:", amount);
            console.log("Total size:", size);
        }
        // UNCOMMENT THIS TO ACTIVATE localStorage_consoleInfo
        // localStorage_consoleInfo()
        
        // END OF: HEALTH OF LOCALSTORAGE----------------------------------------

        let result;
        let username = this.myform.value.username;
        let password = this.myform.value.password;
        let payload = { username, password };

        // console.log(`${username}`);
        // console.log(`${password}`);
        // console.log(`login.component onSubmit payload ${JSON.stringify(payload)}`);
        result = this._userService.login(username, password);

        result.subscribe(x => {
            // console.log(`login.component onSubmit x.token ${x.token}`);
            // console.log(`login.component onSubmit result${x.userId}`);
            localStorage.setItem('token', x.token);
            localStorage.setItem('userId', x.userId);
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate([`companies`]);
        });
    }
}