import { Component, 
         OnInit,
         HostBinding }             from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule }        from '@angular/flex-layout';
import { Router, 
         ActivatedRoute, 
         Params,
         CanActivate }             from '@angular/router';
import { Observable }              from 'RXJS/Observable';

// my components and services
import { Company }                 from '../company';
import { CompanyCardComponent }    from '../company-card/company-card.component';
import { CompanyService }          from '../company.service';
import { UserService }             from '../../users/user.service';
// import { InputComponent }          from '../../shared/input/input.component';
import { InvoiceService }          from '../../invoice/invoice.service';
import { Invoice }                 from '../../invoice/invoice';
import { customTransitionLeft }    from '../../shared/custom-transition-left.component';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  animations: [customTransitionLeft]
})
export class CompaniesComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  active:boolean;
  class: any;
  color:string;
  companies: Observable<Company[]>;
  companiesArray:Company[]
  editing:boolean = false;
  errorMessage: string;
  invoice: Invoice;
  hourly:number;
  name:string;
  paymentTerms:number;
  token:string;
  userId:number
  
  constructor(
              private _companyService: CompanyService,
              private _invoiceService: InvoiceService,
              private _route:ActivatedRoute,
              private _router:Router,
              private _userService: UserService,
              ) {};

  ngOnInit() { 
     
    this.getCompanies();
    this.userId = parseInt(localStorage.getItem("userId"));
    this.token = localStorage.getItem("token");
  }
  
  getCompanies(){
   this._companyService.getCompanies()
        .subscribe(companies => {
          console.log(`in companies.Component getCompanies companies= ${JSON.stringify(companies)}`);
          // if (companies ===[]){
          //   this._router.navigate(['/login'])
          // } else {
          this.companiesArray = companies
          // }
        });
  }

  localStorage_consoleInfo() {
            // var amount = 0;
            // var size = 0;
            // for (var i = 0; i < localStorage.length; ++i) {
            //     var key = localStorage.key(i)
            //     var value = localStorage.getItem(key);
            //     console.log(amount, key, value);
            //     size += key.length + value.length;
            //     amount++;
            // }
            // console.log("Total entries:", amount);
            // console.log("Total size:", size);
          //  let x = localStorage.getItem("userId");
           console.log(`localStorage_console() in companies.component userId= ${this.userId}`);
        }
        
  
  goToEditCompany(company?:Company){
      if (company){
          let coId = company.id;
          let coName = company.name;
          let color = company.color;
          let hourly = company.hourly;
          let paymentTerms = company.paymentTerms;
          let active = company.active;
          let userId = company.userId;
          this._router.navigate(['/edit-company/' + coId || '', {id:coId, name:coName, color:color}]);
          
      } else {
        this._router.navigate(['/edit-company']);

     }
  }

  onLogout() {
     this._userService.onLogout();
     this._router.navigate(['login'])

  }
  goToNowhere () {
    
  }
}