import { Injectable, OnInit } from '@angular/core';
import { Http, 
         Headers, 
         RequestOptions, 
         Response }           from '@angular/http';
import { Router }             from '@angular/router';
import { Observable }         from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User }               from './user';
import { MyGlobals }          from '../shared/myglobals';
import { Shared }             from '../shared/shared';

@Injectable()
export class UserService implements OnInit{
    	private _url;
    shared: Shared;
	myglobals:MyGlobals;
    users: User[];
    loggedIn: boolean;

    constructor(private _http: Http,
				private _router:Router) { 
                    this.shared = new Shared();
		            this.myglobals = new MyGlobals();
                    this._url = this.myglobals.url;
                }
    ngOnInit () {
    }

    getAllUsers() {
        return this._http
                   .get(this._url + '/users')
                   .do(data => console.log(`Bye there`))
                   .catch(this.shared.handleError);
    }

    addUser(payload) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(`addUser in user.service payload= ${JSON.stringify(payload)}`);
        return this._http
		           .post(this._url + '/users', payload, options)
				   .map(res => {
                       console.log(`addUser in user.service res= ${JSON.stringify(res)}`);
                       res.json()
                    })
                   .catch(this.shared.handleError);
    }
    
    login(username, password) {
        // console.log(`Im here in Authentication service ${username} ${password}`);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let payload = { username, password };
        console.log(`${this._url}/users/login xxxxxxxx payload=${JSON.stringify(payload)}`);
        
        return this._http
                .post(this._url + '/users/login', payload, options)
                .map((response: Response) => {
                    let result = JSON.parse(JSON.stringify(response));
                    let body = result._body;
                    console.log((typeof body == 'string'));
                    let objBody = JSON.parse(body);
                    let userId = objBody.userId;
                    let token = objBody.token;
                    let answer = {token, userId}
                    // console.log(`userId= ${userId}  token= ${token}`);
                    return answer;
                    // response.json()

                })
                .catch(this.shared.handleError)
    }

    onLogout() {
        localStorage.clear;
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}

// RESOURCES FOR FACEBOOK AUTHENTICATION ----------------------------------------------
// https://developers.facebook.com/docs/apps/register
// https://developers.facebook.com/docs/facebook-login/overview
// https://stackoverflow.com/questions/37770471/angular-2-facebook-login
// http://blog.selfbits.io/blog/tutorial/angular2/2016/11/24/dashboard-tutorial-part3-social-auth.html