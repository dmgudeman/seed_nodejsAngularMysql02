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
// import { AlertService }           from '../alert.service';
// import { AuthenticationService }  from '../authentication.service';
import { UserService }            from '../user.service';

@Component({
    // moduleId: module.id.toString(),
    selector: 'login',
    templateUrl: 'login.component.html'

})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    myform: FormGroup;
    fcUsername = new FormControl();
    fcPassword = new FormControl();
    userId: number;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        // private _authenticationService: AuthenticationService,
        // private _alertService: AlertService,
        private _fb: FormBuilder,
        private _userService: UserService
    ) { }

    ngOnInit() {
        // reset login status
        // this._authenticationService.logout();
       
        console.log(`Hi THERE in ngInit login`);

        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
        this.myform = this._fb.group({
            "username": this.fcUsername,
            "password": this.fcPassword,
        });
    }
    onSubmit() {
        // PERMANENT CODE
        let result;
        let username = this.fcUsername.value;
        let password = this.fcPassword.value;
        let payload = { username, password };
        console.log(`${username}`);
        console.log(`${password}`);
        console.log(`login.component onSubmit payload ${JSON.stringify(payload)}`);
        result = this._userService.login(username, password);

        result.subscribe(x => {
            console.log(`login.component onSubmit result ${JSON.stringify(x)}`);
            
            // Ideally, here we'd want:
            // this.form.markAsPristine();

            // TEMPORARY CODE
            this._router.navigate([`register`]);
            // PERMANENT CODE
            // this._router.navigate([`companies` ]);
        });
        

        
    }
    

}