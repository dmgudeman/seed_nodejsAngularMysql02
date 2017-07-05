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
import { UserService }           from '../user.service';
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
   
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _fb:FormBuilder,
        private _userService:UserService
        ) { }

    ngOnInit() {
        // this.firstname= new FormControl('', Validators.required);
        // this.lastname = new FormControl('', Validators.required);
        // this.username = new FormControl('', Validators.required),
        // this.password= new FormControl('', [Validators.required,
        //                                       Validators.minLength(1)]);
        // this.password_confirm = new FormControl('', Validators.required);  
        
        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

        this.myform = this._fb.group({
            "firstname": [this.firstname, [
                Validators.required]
            ],
            "lastname": [this.lastname,[
                Validators.required]
            ],
            "username": [this.username, [
                Validators.required]
            ],
            "password": [this.password,[
                Validators.required]
            ],
            "password_confirm": [ this.password_confirm, [
                Validators.required]
            ],
        });
    }
    
       onLogout() {
         this._userService.onLogout();
         this._router.navigate(['login']);
    }

    onSubmit() {
      
        let result;
        console.log(``);
        console.log(`register.component onSubmit payload= ${JSON.stringify(this.myform.value)}`);
        let myform = this.myform.value;
        console.log(`register.component onSubmit payload= ${JSON.stringify(myform.firstname)}`);
        let firstname = myform.firstname;
        let lastname = myform.lastname;
        let username = myform.username;
        let password = myform.password;
        let password_confirmation = myform.password_confirm;

        let payload = { firstname, lastname, username, password };
        console.log(`register.component onSubmit payload= ${payload}`);
        result = this._userService.addUser(payload);
    
        result.subscribe(x => {
                // Ideally, here we'd want:
                // this.form.markAsPristine();
            this._router.navigate(['login']);
        });
    }

}

