import { NgModule }                from '@angular/core';
import { BrowserModule }            from '@angular/platform-browser';
import { RouterModule, Routes }    from '@angular/router';
import { FormsModule, 
         ReactiveFormsModule }     from '@angular/forms';
import { HttpModule }              from '@angular/http';
// my modules
// import { AlertService }            from './services/alert.service';
// import { AlwaysAuthGuard }         from './services/guards/always-auth-guard';
import { AuthenticationService }   from './authentication.service';
import { LoginComponent }          from './login/login.component';
import { LogoutComponent }          from './logout/logout.component';
// import { OnlyLoggedInUsersGuard }   from '../users/services/guards/only-loggedin-users-guard';
// import { UserComponent }           from './user/user.component';
import { UserService }             from './user.service';
import { UsersRoutingModule }      from './users-routing.module';
import { RegisterComponent }       from './register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    // UserComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    // AlertService,
    // AlwaysAuthGuard,
    AuthenticationService,
    // OnlyLoggedInUsersGuard,
    UserService
  ]
})
export class UsersModule { }
