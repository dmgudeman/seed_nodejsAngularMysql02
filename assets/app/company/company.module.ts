import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FlexLayoutModule }        from '@angular/flex-layout';
import { HttpModule }              from '@angular/http';
import { RouterModule, Routes }    from '@angular/router';
import { MaterialModule }          from '@angular/material';
import { SharedModule }            from '../shared/shared.module';
import { AddressComponent }        from '../address/address/address.component';
import { AddressEditComponent }    from '../address/address-edit/address-edit.component';
import { AddressService }          from '../address/address.service';
import { CompaniesComponent }      from './companies/companies.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyCardComponent }    from './company-card/company-card.component';
import { CompanyService }          from './company.service';
import { CompanyRoutingModule }    from './company-routing.module';
import { EditCompanyComponent }    from './edit-company/edit-company.component';
import { ItemDetailComponent }     from '../item/item-detail/item-detail.component';

@NgModule({
  declarations: [
    AddressComponent,
    AddressEditComponent,
    CompaniesComponent,
    CompanyCardComponent,
    CompanyDetailsComponent,
    EditCompanyComponent,
    ItemDetailComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    // FlexLayoutModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    RouterModule,
    SharedModule,
    
    CompanyRoutingModule,
  ],
  providers: [
    AddressService,
    CompanyService,
  ]
})
export class CompanyModule { }
