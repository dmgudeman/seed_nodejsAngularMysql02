import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { CompaniesComponent }       from './companies/companies.component';
import { CompanyCardComponent }     from './company-card/company-card.component';
import { CompanyDetailsComponent }  from './company-details/company-details.component';
import { EditCompanyComponent }     from './edit-company/edit-company.component';

const companyRoutes = [
  { path: 'companies', component: CompaniesComponent, name: 'Companies'}, 
  { path: 'company-card/:id',     component: CompanyCardComponent },
  { path: 'edit-company',         component: EditCompanyComponent },
  { path: 'edit-company/:id',     component: EditCompanyComponent},
  { path: 'company-details',      component: CompanyDetailsComponent },
];

@NgModule({
  imports:[
    RouterModule.forChild(companyRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class CompanyRoutingModule{}