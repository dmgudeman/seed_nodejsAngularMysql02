import { 
    Component, 
    ChangeDetectionStrategy,
    HostBinding,
    Input,
    OnInit, 
    ViewChild }                        from '@angular/core';
import { 
    FormBuilder, 
    FormControl, 
    FormGroup, 
    FormsModule, 
    ReactiveFormsModule }              from '@angular/forms';
import { Location }                    from '@angular/common';
import { 
    Router, 
    ActivatedRoute, 
    Params }                           from '@angular/router';
import { Observable }                  from 'rxjs/Observable';
import { Address }                     from '../address';
import { AddressService }              from '../address.service';
import { CompanyService }              from '../../company/company.service';
import { Company }                     from '../../company/company';
import { customTransitionRight }       from '../../shared/custom-transition-right.component';
// import { InputComponent }              from '../shared/input/input.component';
import { ItemDetailComponent }         from '../../item/item-detail/item-detail.component';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.css']
})
export class AddressEditComponent implements OnInit {
    @Input() coId: number;
    // @Input() private address:Address;
            address:Address;
    addressId:number;
    company:Company;
    errorMessage: string;

    myform : FormGroup;
    // street1 = new FormControl();
    // street2 = new FormControl();
    // city = new FormControl();
    // state = new FormControl();
    // postalCode = new FormControl();
    // country = new FormControl();
    // invalid = new FormControl;
    // longitude = new FormControl;
    // latitude = new FormControl;
    // CompanyId = new FormControl;

    constructor( 
        private _addressService:AddressService,
        private _companyService:CompanyService,
        private _location:Location,
        private _router:Router,
        private _route:ActivatedRoute,
        private _fb:FormBuilder) {
            this.buildForm();
         }

    ngOnInit() {
        console.log(`address-edit ngOnInit has been fired`);
        // this.invalid.setValue(false);
    
        
        if(this.coId){
            // this.CompanyId.setValue(this.coId);
            this.getAddress(this.coId);
        }
    }
    buildForm() {
        this.myform = this._fb.group({
            city: ' ',
            country:'',
            invalid:'',
            latitude:'',
            longitude:'',
            postalCode:'',
            street1:'',
            street2:'',
            state:'',
            CompanyId:''
        });
    }
    getAddress(coId) { 
        this._companyService
            .getCompany(coId)
            .subscribe(company => {this.address= company.Address;
                // console.log(`address-edit getAddress address= ${JSON.stringify(this.address)}`)
                if (this.address !==null) {
                    this.myform.patchValue({
                    street1: this.address.street1,
                    street2: this.address.street2,
                    city: this.address.city,
                    state: this.address.state,
                    postalCode: this.address.postalCode,
                    country:  this.address.country,
                    })
                    response => {
                        if (response.status === 404){
                            this._router.navigate(['NotFound']);
                        }
                    }
                } else {
                    console.log(`this.address= ${this.address}`);
                }

        });
    }

    onSubmit2($event) {
            
        let  id; 
        if (this.address) {
            id=this.address.id
            console.log(`address-edit onSubmit id ${this.address}`);
        };
        
        let x = this.myform.value;
        let payload =   x;
        console.log(`address-edit onSubmit payload ${JSON.stringify(payload)}`)

        var result;
        if (!id) {
            result = this._addressService.addAddress({Address:payload});
        } else {
            let ID = (id) ? id : "ID NOT HERE";
    
        result = this._addressService.updateAddress ({Address:payload}, id);}   

        result.subscribe(x => {
            event.stopPropagation();
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['companies']);
        });
    }

    goBack(): void {
        this._location.back();
    }
}
