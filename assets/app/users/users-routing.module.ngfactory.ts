/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './users-routing.module';
import * as import2 from '@angular/router';
import * as import3 from './login/login.component.ngfactory';
import * as import4 from './register/register.component.ngfactory';
import * as import5 from './logout/logout.component.ngfactory';
import * as import6 from './login/login.component';
import * as import7 from './register/register.component';
import * as import8 from './logout/logout.component';
class UsersRoutingModuleInjector extends import0.ɵNgModuleInjector<import1.UsersRoutingModule> {
  _RouterModule_0:import2.RouterModule;
  _UsersRoutingModule_1:import1.UsersRoutingModule;
  _ROUTES_2:any[];
  constructor(parent:import0.Injector) {
    super(parent,[
      import3.LoginComponentNgFactory,
      import4.RegisterComponentNgFactory,
      import5.LogoutComponentNgFactory
    ]
    ,([] as any[]));
  }
  createInternal():import1.UsersRoutingModule {
    this._RouterModule_0 = new import2.RouterModule(this.parent.get(import2.ɵa,(null as any)),this.parent.get(import2.Router,(null as any)));
    this._UsersRoutingModule_1 = new import1.UsersRoutingModule();
      this._ROUTES_2 = [[
        {
          path: 'login',
          component: import6.LoginComponent,
          name: 'Login',
          useAsDefault: true
        }
        ,
        {
          path: 'register',
          component: import7.RegisterComponent,
          name: 'Register'
        }
        ,
        {
          path: 'logout',
          component: import8.LogoutComponent,
          name: 'Logout'
        }

      ]
    ];
    return this._UsersRoutingModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.RouterModule)) { return this._RouterModule_0; }
    if ((token === import1.UsersRoutingModule)) { return this._UsersRoutingModule_1; }
    if ((token === import2.ROUTES)) { return this._ROUTES_2; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const UsersRoutingModuleNgFactory:import0.NgModuleFactory<import1.UsersRoutingModule> = new import0.NgModuleFactory<any>(UsersRoutingModuleInjector,import1.UsersRoutingModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1ZvbHVtZXMvRy1EUklWRS9teURpcmVjdG9yeS9zZWVkX25vZGVqc0FuZ3VsYXJNeXNxbDAyL2Fzc2V0cy9hcHAvdXNlcnMvdXNlcnMtcm91dGluZy5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVm9sdW1lcy9HLURSSVZFL215RGlyZWN0b3J5L3NlZWRfbm9kZWpzQW5ndWxhck15c3FsMDIvYXNzZXRzL2FwcC91c2Vycy91c2Vycy1yb3V0aW5nLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
