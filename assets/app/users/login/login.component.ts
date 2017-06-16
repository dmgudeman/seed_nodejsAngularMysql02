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
        localStorage_consoleInfo();
        // END OF: HEALTH OF LOCALSTORAGE----------------------------------------

        // PERMANENT CODE -------------------------------------------------------
        let result;
        let username = this.fcUsername.value;
        let password = this.fcPassword.value;
        let payload = { username, password };
        // console.log(`${username}`);
        // console.log(`${password}`);
        // console.log(`login.component onSubmit payload ${JSON.stringify(payload)}`);
        result = this._userService.login(username, password);

        result.subscribe(x => {
            // console.log(`login.component onSubmit result ${JSON.stringify(x)}`);
            // console.log(`login.component onSubmit x.token ${x.token}`);
            // console.log(`login.component onSubmit x.userId ${x.userId}`);
            localStorage.setItem('token', x.token);
            localStorage.setItem('userId', x.userId);
            // Ideally, here we'd want:
            // this.form.markAsPristine();

            // TEMPORARY CODE
            this._router.navigate([`register`]);
            // PERMANENT CODE
            // this._router.navigate([`companies` ]);
        });
        

        
    }
    

}