import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { AuthGuard }                from '../shared/auth-guard';
import { CompaniesComponent }       from './companies/companies.component';
import { CompanyCardComponent }     from './company-card/company-card.component';
import { CompanyDetailsComponent }  from './company-details/company-details.component';
import { EditCompanyComponent }     from './edit-company/edit-company.component';

const companyRoutes = [
  { path: 'companies',            component: CompaniesComponent, canActivate : [AuthGuard]}, 
  { path: 'company-card/:id',     component: CompanyCardComponent, canActivate : [AuthGuard] },
  { path: 'edit-company',         component: EditCompanyComponent, canActivate : [AuthGuard] },
  { path: 'edit-company/:id',     component: EditCompanyComponent, canActivate : [AuthGuard]},
  { path: 'company-details',      component: CompanyDetailsComponent, canActivate : [AuthGuard] },
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