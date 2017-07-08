import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard }        from './auth-guard';
import { DateRangePipe }        from './date-range.pipe';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule }     from '@angular/flex-layout';
// import { HttpModule } from '@angular/http';
// import { RouterModule, Routes } from '@angular/router';
// import { MaterialModule } from '@angular/material';
// import { ItemDetailComponent }     from 'app/item/item-detail/item-detail.component';
import { TruncatePipe }            from './truncate.pipe';
import { PasswordValidation}        from './password-validation';

@NgModule({
  declarations: [
     DateRangePipe,
     TruncatePipe
  ],
  imports: [
    CommonModule,
//     FormsModule,
//     FlexLayoutModule,
//     ReactiveFormsModule,
//     HttpModule,
//     MaterialModule,
//     RouterModule
  ],
  exports: [
   
      //  ItemDetailComponent    
  ],
  providers: [
      AuthGuard,
      PasswordValidation
  ]
})
export class SharedModule {} 