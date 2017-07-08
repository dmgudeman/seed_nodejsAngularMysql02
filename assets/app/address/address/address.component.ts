import { 
    Component, 
    OnInit,
    Input 
  }                          from '@angular/core';
import { Address }           from '../address';
import { AddressService }    from '../address.service';
import { Company }           from '../../company/company';
import { CompanyDetailsComponent }    from '../../company/company-details/company-details.component';
import { CompanyService }    from '../../company/company.service';
import { EditCompanyComponent } from '../../company/edit-company/edit-company.component'

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  @Input() coId:number;
  @Input() address:Address;
  company: Company;
  street1: string;
  street2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  CompanyId: number


  constructor(private _companyService:CompanyService,
              private _addressService:AddressService) { }
  
    ngOnInit() {
        this.getAddress(this.coId);
        console.log(`Address ngOnInit Address ${this.address}`);

    }

    getAddress(coId) { 
        this._addressService
            .getAddressByCoId(coId)
            .subscribe(address => {this.address = address;
                console.log(`address.component setAddress this.company ${JSON.stringify(this.address)}`);
                if(address)
                    // this.address = company.Address;
                    this.street1 = this.address.street1
                    this.street2 = this.address.street2
                    this.city = this.address.city;
                    this.postalCode = this.address.postalCode;
                    this.state = this.address.state;
                    this.country = this.address.country;
                    this.CompanyId= coId;
                    console.log("Address getCompany this.coId ", this.coId);
                    console.log("Address getCompany this.company" + JSON.stringify(address));
                }
            });
            
    }
}
