/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './company.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/forms';
import * as import4 from '@angular/http';
import * as import5 from '@angular/material';
import * as import6 from '@angular/router';
import * as import7 from '../shared/shared.module';
import * as import8 from './company-routing.module';
import * as import9 from '../shared/auth-guard';
import * as import10 from '../shared/password-validation';
import * as import11 from '../address/address.service';
import * as import12 from './company.service';
import * as import13 from '../../../node_modules/@angular/material/typings/index.ngfactory';
import * as import14 from './companies/companies.component.ngfactory';
import * as import15 from './company-card/company-card.component.ngfactory';
import * as import16 from './edit-company/edit-company.component.ngfactory';
import * as import17 from './company-details/company-details.component.ngfactory';
import * as import18 from '@angular/platform-browser';
import * as import19 from './companies/companies.component';
import * as import20 from './company-card/company-card.component';
import * as import21 from './edit-company/edit-company.component';
import * as import22 from './company-details/company-details.component';
class CompanyModuleInjector extends import0.ɵNgModuleInjector<import1.CompanyModule> {
  _CommonModule_0:import2.CommonModule;
  _ɵba_1:import3.ɵba;
  _FormsModule_2:import3.FormsModule;
  _ReactiveFormsModule_3:import3.ReactiveFormsModule;
  _HttpModule_4:import4.HttpModule;
  _MATERIAL_SANITY_CHECKS_5:any;
  _CompatibilityModule_6:import5.CompatibilityModule;
  _MdCommonModule_7:import5.MdCommonModule;
  _PlatformModule_8:import5.PlatformModule;
  _ScrollDispatchModule_9:import5.ScrollDispatchModule;
  _MdRippleModule_10:import5.MdRippleModule;
  _MdSelectionModule_11:import5.MdSelectionModule;
  _MdOptionModule_12:import5.MdOptionModule;
  _PortalModule_13:import5.PortalModule;
  _OverlayModule_14:import5.OverlayModule;
  _MdAutocompleteModule_15:import5.MdAutocompleteModule;
  _StyleModule_16:import5.StyleModule;
  _MdButtonModule_17:import5.MdButtonModule;
  _MdButtonToggleModule_18:import5.MdButtonToggleModule;
  _MdCardModule_19:import5.MdCardModule;
  _MdChipsModule_20:import5.MdChipsModule;
  _MdCheckboxModule_21:import5.MdCheckboxModule;
  _A11yModule_22:import5.A11yModule;
  _MdDialogModule_23:import5.MdDialogModule;
  _MdDatepickerModule_24:import5.MdDatepickerModule;
  _MdLineModule_25:import5.MdLineModule;
  _MdGridListModule_26:import5.MdGridListModule;
  _MdIconModule_27:import5.MdIconModule;
  _MdInputModule_28:import5.MdInputModule;
  _MdListModule_29:import5.MdListModule;
  _MdMenuModule_30:import5.MdMenuModule;
  _MdProgressBarModule_31:import5.MdProgressBarModule;
  _MdProgressSpinnerModule_32:import5.MdProgressSpinnerModule;
  _MdRadioModule_33:import5.MdRadioModule;
  _MdSelectModule_34:import5.MdSelectModule;
  _MdSidenavModule_35:import5.MdSidenavModule;
  _RtlModule_36:import5.RtlModule;
  _MdSliderModule_37:import5.MdSliderModule;
  _MdSlideToggleModule_38:import5.MdSlideToggleModule;
  _MdSnackBarModule_39:import5.MdSnackBarModule;
  _ObserveContentModule_40:import5.ObserveContentModule;
  _MdTabsModule_41:import5.MdTabsModule;
  _MdToolbarModule_42:import5.MdToolbarModule;
  _MdTooltipModule_43:import5.MdTooltipModule;
  _MaterialModule_44:import5.MaterialModule;
  _RouterModule_45:import6.RouterModule;
  _SharedModule_46:import7.SharedModule;
  _CompanyRoutingModule_47:import8.CompanyRoutingModule;
  _CompanyModule_48:import1.CompanyModule;
  __NgLocalization_49:import2.NgLocaleLocalization;
  __ɵi_50:import3.ɵi;
  __FormBuilder_51:import3.FormBuilder;
  __BrowserXhr_52:import4.BrowserXhr;
  __ResponseOptions_53:import4.BaseResponseOptions;
  __XSRFStrategy_54:any;
  __XHRBackend_55:import4.XHRBackend;
  __RequestOptions_56:import4.BaseRequestOptions;
  __Http_57:any;
  __Platform_58:import5.Platform;
  __ScrollDispatcher_59:any;
  __ViewportRuler_60:any;
  __OverlayContainer_61:any;
  __ɵo_62:import5.ɵo;
  __Overlay_63:import5.Overlay;
  __FocusOriginMonitor_64:any;
  __UniqueSelectionDispatcher_65:any;
  __InteractivityChecker_66:import5.InteractivityChecker;
  __FocusTrapFactory_67:import5.FocusTrapFactory;
  __LiveAnnouncer_68:any;
  __MdDialog_69:import5.MdDialog;
  __MdDatepickerIntl_70:import5.MdDatepickerIntl;
  __MdIconRegistry_71:any;
  __HAMMER_GESTURE_CONFIG_72:import5.GestureConfig;
  __MdSnackBar_73:import5.MdSnackBar;
  __ɵa_74:import5.ɵa;
  __AuthGuard_75:import9.AuthGuard;
  __PasswordValidation_76:import10.PasswordValidation;
  _ROUTES_77:any[];
  __AddressService_78:import11.AddressService;
  __CompanyService_79:import12.CompanyService;
  constructor(parent:import0.Injector) {
    super(parent,[
      import13.MdDialogContainerNgFactory,
      import13.MdDatepickerContentNgFactory,
      import13.MdSnackBarContainerNgFactory,
      import13.SimpleSnackBarNgFactory,
      import13.TooltipComponentNgFactory,
      import14.CompaniesComponentNgFactory,
      import15.CompanyCardComponentNgFactory,
      import16.EditCompanyComponentNgFactory,
      import17.CompanyDetailsComponentNgFactory
    ]
    ,([] as any[]));
  }
  get _NgLocalization_49():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_49 == null)) { (this.__NgLocalization_49 = new import2.NgLocaleLocalization(this.parent.get(import0.LOCALE_ID))); }
    return this.__NgLocalization_49;
  }
  get _ɵi_50():import3.ɵi {
    if ((this.__ɵi_50 == null)) { (this.__ɵi_50 = new import3.ɵi()); }
    return this.__ɵi_50;
  }
  get _FormBuilder_51():import3.FormBuilder {
    if ((this.__FormBuilder_51 == null)) { (this.__FormBuilder_51 = new import3.FormBuilder()); }
    return this.__FormBuilder_51;
  }
  get _BrowserXhr_52():import4.BrowserXhr {
    if ((this.__BrowserXhr_52 == null)) { (this.__BrowserXhr_52 = new import4.BrowserXhr()); }
    return this.__BrowserXhr_52;
  }
  get _ResponseOptions_53():import4.BaseResponseOptions {
    if ((this.__ResponseOptions_53 == null)) { (this.__ResponseOptions_53 = new import4.BaseResponseOptions()); }
    return this.__ResponseOptions_53;
  }
  get _XSRFStrategy_54():any {
    if ((this.__XSRFStrategy_54 == null)) { (this.__XSRFStrategy_54 = import4.ɵb()); }
    return this.__XSRFStrategy_54;
  }
  get _XHRBackend_55():import4.XHRBackend {
    if ((this.__XHRBackend_55 == null)) { (this.__XHRBackend_55 = new import4.XHRBackend(this._BrowserXhr_52,this._ResponseOptions_53,this._XSRFStrategy_54)); }
    return this.__XHRBackend_55;
  }
  get _RequestOptions_56():import4.BaseRequestOptions {
    if ((this.__RequestOptions_56 == null)) { (this.__RequestOptions_56 = new import4.BaseRequestOptions()); }
    return this.__RequestOptions_56;
  }
  get _Http_57():any {
    if ((this.__Http_57 == null)) { (this.__Http_57 = import4.ɵc(this._XHRBackend_55,this._RequestOptions_56)); }
    return this.__Http_57;
  }
  get _Platform_58():import5.Platform {
    if ((this.__Platform_58 == null)) { (this.__Platform_58 = new import5.Platform()); }
    return this.__Platform_58;
  }
  get _ScrollDispatcher_59():any {
    if ((this.__ScrollDispatcher_59 == null)) { (this.__ScrollDispatcher_59 = import5.ɵf(this.parent.get(import5.ScrollDispatcher,(null as any)),this.parent.get(import0.NgZone),this._Platform_58)); }
    return this.__ScrollDispatcher_59;
  }
  get _ViewportRuler_60():any {
    if ((this.__ViewportRuler_60 == null)) { (this.__ViewportRuler_60 = import5.ɵd(this.parent.get(import5.ViewportRuler,(null as any)),this._ScrollDispatcher_59)); }
    return this.__ViewportRuler_60;
  }
  get _OverlayContainer_61():any {
    if ((this.__OverlayContainer_61 == null)) { (this.__OverlayContainer_61 = import5.ɵb(this.parent.get(import5.OverlayContainer,(null as any)))); }
    return this.__OverlayContainer_61;
  }
  get _ɵo_62():import5.ɵo {
    if ((this.__ɵo_62 == null)) { (this.__ɵo_62 = new import5.ɵo(this._ViewportRuler_60)); }
    return this.__ɵo_62;
  }
  get _Overlay_63():import5.Overlay {
    if ((this.__Overlay_63 == null)) { (this.__Overlay_63 = new import5.Overlay(this._OverlayContainer_61,this.componentFactoryResolver,this._ɵo_62,this.parent.get(import0.ApplicationRef),this,this.parent.get(import0.NgZone))); }
    return this.__Overlay_63;
  }
  get _FocusOriginMonitor_64():any {
    if ((this.__FocusOriginMonitor_64 == null)) { (this.__FocusOriginMonitor_64 = import5.FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY(this.parent.get(import5.FocusOriginMonitor,(null as any)),this.parent.get(import0.NgZone),this._Platform_58)); }
    return this.__FocusOriginMonitor_64;
  }
  get _UniqueSelectionDispatcher_65():any {
    if ((this.__UniqueSelectionDispatcher_65 == null)) { (this.__UniqueSelectionDispatcher_65 = import5.ɵj(this.parent.get(import5.UniqueSelectionDispatcher,(null as any)))); }
    return this.__UniqueSelectionDispatcher_65;
  }
  get _InteractivityChecker_66():import5.InteractivityChecker {
    if ((this.__InteractivityChecker_66 == null)) { (this.__InteractivityChecker_66 = new import5.InteractivityChecker(this._Platform_58)); }
    return this.__InteractivityChecker_66;
  }
  get _FocusTrapFactory_67():import5.FocusTrapFactory {
    if ((this.__FocusTrapFactory_67 == null)) { (this.__FocusTrapFactory_67 = new import5.FocusTrapFactory(this._InteractivityChecker_66,this.parent.get(import0.NgZone))); }
    return this.__FocusTrapFactory_67;
  }
  get _LiveAnnouncer_68():any {
    if ((this.__LiveAnnouncer_68 == null)) { (this.__LiveAnnouncer_68 = import5.ɵi(this.parent.get(import5.LiveAnnouncer,(null as any)),this.parent.get(import5.LIVE_ANNOUNCER_ELEMENT_TOKEN,(null as any)),this._Platform_58)); }
    return this.__LiveAnnouncer_68;
  }
  get _MdDialog_69():import5.MdDialog {
    if ((this.__MdDialog_69 == null)) { (this.__MdDialog_69 = new import5.MdDialog(this._Overlay_63,this,this._ViewportRuler_60,this.parent.get(import2.Location,(null as any)),this.parent.get(import5.MdDialog,(null as any)))); }
    return this.__MdDialog_69;
  }
  get _MdDatepickerIntl_70():import5.MdDatepickerIntl {
    if ((this.__MdDatepickerIntl_70 == null)) { (this.__MdDatepickerIntl_70 = new import5.MdDatepickerIntl()); }
    return this.__MdDatepickerIntl_70;
  }
  get _MdIconRegistry_71():any {
    if ((this.__MdIconRegistry_71 == null)) { (this.__MdIconRegistry_71 = import5.ICON_REGISTRY_PROVIDER_FACTORY(this.parent.get(import5.MdIconRegistry,(null as any)),this._Http_57,this.parent.get(import18.DomSanitizer))); }
    return this.__MdIconRegistry_71;
  }
  get _HAMMER_GESTURE_CONFIG_72():import5.GestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_72 == null)) { (this.__HAMMER_GESTURE_CONFIG_72 = new import5.GestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_72;
  }
  get _MdSnackBar_73():import5.MdSnackBar {
    if ((this.__MdSnackBar_73 == null)) { (this.__MdSnackBar_73 = new import5.MdSnackBar(this._Overlay_63,this._LiveAnnouncer_68,this.parent.get(import5.MdSnackBar,(null as any)))); }
    return this.__MdSnackBar_73;
  }
  get _ɵa_74():import5.ɵa {
    if ((this.__ɵa_74 == null)) { (this.__ɵa_74 = new import5.ɵa()); }
    return this.__ɵa_74;
  }
  get _AuthGuard_75():import9.AuthGuard {
    if ((this.__AuthGuard_75 == null)) { (this.__AuthGuard_75 = new import9.AuthGuard(this.parent.get(import6.Router))); }
    return this.__AuthGuard_75;
  }
  get _PasswordValidation_76():import10.PasswordValidation {
    if ((this.__PasswordValidation_76 == null)) { (this.__PasswordValidation_76 = new import10.PasswordValidation()); }
    return this.__PasswordValidation_76;
  }
  get _AddressService_78():import11.AddressService {
    if ((this.__AddressService_78 == null)) { (this.__AddressService_78 = new import11.AddressService(this._Http_57)); }
    return this.__AddressService_78;
  }
  get _CompanyService_79():import12.CompanyService {
    if ((this.__CompanyService_79 == null)) { (this.__CompanyService_79 = new import12.CompanyService(this._Http_57)); }
    return this.__CompanyService_79;
  }
  createInternal():import1.CompanyModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ɵba_1 = new import3.ɵba();
    this._FormsModule_2 = new import3.FormsModule();
    this._ReactiveFormsModule_3 = new import3.ReactiveFormsModule();
    this._HttpModule_4 = new import4.HttpModule();
    this._MATERIAL_SANITY_CHECKS_5 = true;
    this._CompatibilityModule_6 = new import5.CompatibilityModule(this.parent.get(import18.DOCUMENT,(null as any)),this._MATERIAL_SANITY_CHECKS_5);
    this._MdCommonModule_7 = new import5.MdCommonModule();
    this._PlatformModule_8 = new import5.PlatformModule();
    this._ScrollDispatchModule_9 = new import5.ScrollDispatchModule();
    this._MdRippleModule_10 = new import5.MdRippleModule();
    this._MdSelectionModule_11 = new import5.MdSelectionModule();
    this._MdOptionModule_12 = new import5.MdOptionModule();
    this._PortalModule_13 = new import5.PortalModule();
    this._OverlayModule_14 = new import5.OverlayModule();
    this._MdAutocompleteModule_15 = new import5.MdAutocompleteModule();
    this._StyleModule_16 = new import5.StyleModule();
    this._MdButtonModule_17 = new import5.MdButtonModule();
    this._MdButtonToggleModule_18 = new import5.MdButtonToggleModule();
    this._MdCardModule_19 = new import5.MdCardModule();
    this._MdChipsModule_20 = new import5.MdChipsModule();
    this._MdCheckboxModule_21 = new import5.MdCheckboxModule();
    this._A11yModule_22 = new import5.A11yModule();
    this._MdDialogModule_23 = new import5.MdDialogModule();
    this._MdDatepickerModule_24 = new import5.MdDatepickerModule();
    this._MdLineModule_25 = new import5.MdLineModule();
    this._MdGridListModule_26 = new import5.MdGridListModule();
    this._MdIconModule_27 = new import5.MdIconModule();
    this._MdInputModule_28 = new import5.MdInputModule();
    this._MdListModule_29 = new import5.MdListModule();
    this._MdMenuModule_30 = new import5.MdMenuModule();
    this._MdProgressBarModule_31 = new import5.MdProgressBarModule();
    this._MdProgressSpinnerModule_32 = new import5.MdProgressSpinnerModule();
    this._MdRadioModule_33 = new import5.MdRadioModule();
    this._MdSelectModule_34 = new import5.MdSelectModule();
    this._MdSidenavModule_35 = new import5.MdSidenavModule();
    this._RtlModule_36 = new import5.RtlModule();
    this._MdSliderModule_37 = new import5.MdSliderModule();
    this._MdSlideToggleModule_38 = new import5.MdSlideToggleModule();
    this._MdSnackBarModule_39 = new import5.MdSnackBarModule();
    this._ObserveContentModule_40 = new import5.ObserveContentModule();
    this._MdTabsModule_41 = new import5.MdTabsModule();
    this._MdToolbarModule_42 = new import5.MdToolbarModule();
    this._MdTooltipModule_43 = new import5.MdTooltipModule();
    this._MaterialModule_44 = new import5.MaterialModule();
    this._RouterModule_45 = new import6.RouterModule(this.parent.get(import6.ɵa,(null as any)),this.parent.get(import6.Router,(null as any)));
    this._SharedModule_46 = new import7.SharedModule();
    this._CompanyRoutingModule_47 = new import8.CompanyRoutingModule();
    this._CompanyModule_48 = new import1.CompanyModule();
      this._ROUTES_77 = [[
        {
          path: 'companies',
          component: import19.CompaniesComponent,
          canActivate: [import9.AuthGuard]
        }
        ,
        {
          path: 'company-card/:id',
          component: import20.CompanyCardComponent,
          canActivate: [import9.AuthGuard]
        }
        ,
        {
          path: 'edit-company',
          component: import21.EditCompanyComponent,
          canActivate: [import9.AuthGuard]
        }
        ,
        {
          path: 'edit-company/:id',
          component: import21.EditCompanyComponent,
          canActivate: [import9.AuthGuard]
        }
        ,
        {
          path: 'company-details',
          component: import22.CompanyDetailsComponent,
          canActivate: [import9.AuthGuard]
        }

      ]
    ];
    return this._CompanyModule_48;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ɵba)) { return this._ɵba_1; }
    if ((token === import3.FormsModule)) { return this._FormsModule_2; }
    if ((token === import3.ReactiveFormsModule)) { return this._ReactiveFormsModule_3; }
    if ((token === import4.HttpModule)) { return this._HttpModule_4; }
    if ((token === import5.MATERIAL_SANITY_CHECKS)) { return this._MATERIAL_SANITY_CHECKS_5; }
    if ((token === import5.CompatibilityModule)) { return this._CompatibilityModule_6; }
    if ((token === import5.MdCommonModule)) { return this._MdCommonModule_7; }
    if ((token === import5.PlatformModule)) { return this._PlatformModule_8; }
    if ((token === import5.ScrollDispatchModule)) { return this._ScrollDispatchModule_9; }
    if ((token === import5.MdRippleModule)) { return this._MdRippleModule_10; }
    if ((token === import5.MdSelectionModule)) { return this._MdSelectionModule_11; }
    if ((token === import5.MdOptionModule)) { return this._MdOptionModule_12; }
    if ((token === import5.PortalModule)) { return this._PortalModule_13; }
    if ((token === import5.OverlayModule)) { return this._OverlayModule_14; }
    if ((token === import5.MdAutocompleteModule)) { return this._MdAutocompleteModule_15; }
    if ((token === import5.StyleModule)) { return this._StyleModule_16; }
    if ((token === import5.MdButtonModule)) { return this._MdButtonModule_17; }
    if ((token === import5.MdButtonToggleModule)) { return this._MdButtonToggleModule_18; }
    if ((token === import5.MdCardModule)) { return this._MdCardModule_19; }
    if ((token === import5.MdChipsModule)) { return this._MdChipsModule_20; }
    if ((token === import5.MdCheckboxModule)) { return this._MdCheckboxModule_21; }
    if ((token === import5.A11yModule)) { return this._A11yModule_22; }
    if ((token === import5.MdDialogModule)) { return this._MdDialogModule_23; }
    if ((token === import5.MdDatepickerModule)) { return this._MdDatepickerModule_24; }
    if ((token === import5.MdLineModule)) { return this._MdLineModule_25; }
    if ((token === import5.MdGridListModule)) { return this._MdGridListModule_26; }
    if ((token === import5.MdIconModule)) { return this._MdIconModule_27; }
    if ((token === import5.MdInputModule)) { return this._MdInputModule_28; }
    if ((token === import5.MdListModule)) { return this._MdListModule_29; }
    if ((token === import5.MdMenuModule)) { return this._MdMenuModule_30; }
    if ((token === import5.MdProgressBarModule)) { return this._MdProgressBarModule_31; }
    if ((token === import5.MdProgressSpinnerModule)) { return this._MdProgressSpinnerModule_32; }
    if ((token === import5.MdRadioModule)) { return this._MdRadioModule_33; }
    if ((token === import5.MdSelectModule)) { return this._MdSelectModule_34; }
    if ((token === import5.MdSidenavModule)) { return this._MdSidenavModule_35; }
    if ((token === import5.RtlModule)) { return this._RtlModule_36; }
    if ((token === import5.MdSliderModule)) { return this._MdSliderModule_37; }
    if ((token === import5.MdSlideToggleModule)) { return this._MdSlideToggleModule_38; }
    if ((token === import5.MdSnackBarModule)) { return this._MdSnackBarModule_39; }
    if ((token === import5.ObserveContentModule)) { return this._ObserveContentModule_40; }
    if ((token === import5.MdTabsModule)) { return this._MdTabsModule_41; }
    if ((token === import5.MdToolbarModule)) { return this._MdToolbarModule_42; }
    if ((token === import5.MdTooltipModule)) { return this._MdTooltipModule_43; }
    if ((token === import5.MaterialModule)) { return this._MaterialModule_44; }
    if ((token === import6.RouterModule)) { return this._RouterModule_45; }
    if ((token === import7.SharedModule)) { return this._SharedModule_46; }
    if ((token === import8.CompanyRoutingModule)) { return this._CompanyRoutingModule_47; }
    if ((token === import1.CompanyModule)) { return this._CompanyModule_48; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_49; }
    if ((token === import3.ɵi)) { return this._ɵi_50; }
    if ((token === import3.FormBuilder)) { return this._FormBuilder_51; }
    if ((token === import4.BrowserXhr)) { return this._BrowserXhr_52; }
    if ((token === import4.ResponseOptions)) { return this._ResponseOptions_53; }
    if ((token === import4.XSRFStrategy)) { return this._XSRFStrategy_54; }
    if ((token === import4.XHRBackend)) { return this._XHRBackend_55; }
    if ((token === import4.RequestOptions)) { return this._RequestOptions_56; }
    if ((token === import4.Http)) { return this._Http_57; }
    if ((token === import5.Platform)) { return this._Platform_58; }
    if ((token === import5.ScrollDispatcher)) { return this._ScrollDispatcher_59; }
    if ((token === import5.ViewportRuler)) { return this._ViewportRuler_60; }
    if ((token === import5.OverlayContainer)) { return this._OverlayContainer_61; }
    if ((token === import5.ɵo)) { return this._ɵo_62; }
    if ((token === import5.Overlay)) { return this._Overlay_63; }
    if ((token === import5.FocusOriginMonitor)) { return this._FocusOriginMonitor_64; }
    if ((token === import5.UniqueSelectionDispatcher)) { return this._UniqueSelectionDispatcher_65; }
    if ((token === import5.InteractivityChecker)) { return this._InteractivityChecker_66; }
    if ((token === import5.FocusTrapFactory)) { return this._FocusTrapFactory_67; }
    if ((token === import5.LiveAnnouncer)) { return this._LiveAnnouncer_68; }
    if ((token === import5.MdDialog)) { return this._MdDialog_69; }
    if ((token === import5.MdDatepickerIntl)) { return this._MdDatepickerIntl_70; }
    if ((token === import5.MdIconRegistry)) { return this._MdIconRegistry_71; }
    if ((token === import18.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_72; }
    if ((token === import5.MdSnackBar)) { return this._MdSnackBar_73; }
    if ((token === import5.ɵa)) { return this._ɵa_74; }
    if ((token === import9.AuthGuard)) { return this._AuthGuard_75; }
    if ((token === import10.PasswordValidation)) { return this._PasswordValidation_76; }
    if ((token === import6.ROUTES)) { return this._ROUTES_77; }
    if ((token === import11.AddressService)) { return this._AddressService_78; }
    if ((token === import12.CompanyService)) { return this._CompanyService_79; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const CompanyModuleNgFactory:import0.NgModuleFactory<import1.CompanyModule> = new import0.NgModuleFactory<any>(CompanyModuleInjector,import1.CompanyModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1ZvbHVtZXMvRy1EUklWRS9teURpcmVjdG9yeS9zZWVkX25vZGVqc0FuZ3VsYXJNeXNxbDAyL2Fzc2V0cy9hcHAvY29tcGFueS9jb21wYW55Lm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Wb2x1bWVzL0ctRFJJVkUvbXlEaXJlY3Rvcnkvc2VlZF9ub2RlanNBbmd1bGFyTXlzcWwwMi9hc3NldHMvYXBwL2NvbXBhbnkvY29tcGFueS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
