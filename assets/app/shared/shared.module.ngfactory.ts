/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './shared.module';
import * as import2 from '@angular/common';
import * as import3 from './auth-guard';
import * as import4 from './password-validation';
import * as import5 from '@angular/router';
class SharedModuleInjector extends import0.ɵNgModuleInjector<import1.SharedModule> {
  _CommonModule_0:import2.CommonModule;
  _SharedModule_1:import1.SharedModule;
  __NgLocalization_2:import2.NgLocaleLocalization;
  __AuthGuard_3:import3.AuthGuard;
  __PasswordValidation_4:import4.PasswordValidation;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _NgLocalization_2():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_2 == null)) { (this.__NgLocalization_2 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_2;
  }
  get _AuthGuard_3():import3.AuthGuard {
    if ((this.__AuthGuard_3 == null)) { (this.__AuthGuard_3 = new import3.AuthGuard(this.parent.get(import5.Router))); }
    return this.__AuthGuard_3;
  }
  get _PasswordValidation_4():import4.PasswordValidation {
    if ((this.__PasswordValidation_4 == null)) { (this.__PasswordValidation_4 = new import4.PasswordValidation()); }
    return this.__PasswordValidation_4;
  }
  createInternal():import1.SharedModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._SharedModule_1 = new import1.SharedModule();
    return this._SharedModule_1;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import1.SharedModule)) { return this._SharedModule_1; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_2; }
    if ((token === import3.AuthGuard)) { return this._AuthGuard_3; }
    if ((token === import4.PasswordValidation)) { return this._PasswordValidation_4; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const SharedModuleNgFactory:import0.NgModuleFactory<import1.SharedModule> = new import0.NgModuleFactory<any>(SharedModuleInjector,import1.SharedModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1ZvbHVtZXMvRy1EUklWRS9teURpcmVjdG9yeS9zZWVkX25vZGVqc0FuZ3VsYXJNeXNxbDAyL2Fzc2V0cy9hcHAvc2hhcmVkL3NoYXJlZC5tb2R1bGUubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVm9sdW1lcy9HLURSSVZFL215RGlyZWN0b3J5L3NlZWRfbm9kZWpzQW5ndWxhck15c3FsMDIvYXNzZXRzL2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
