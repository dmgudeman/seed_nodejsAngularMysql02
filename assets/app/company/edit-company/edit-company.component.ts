import { 
    Component, 
    ChangeDetectionStrategy,
    HostBinding,
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
import { $ }                           from 'jquery';
import { Observable }                  from 'rxjs/Observable';

import { Address }                     from '../../address/address';
import { CompanyService }              from '../company.service';
import { Company }                     from '../company';
import { customTransitionRight }       from '../../shared/custom-transition-right.component';
// import { InputComponent }              from '../shared/input/input.component';
import { ItemDetailComponent }         from '../../item/item-detail/item-detail.component';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css'],
  animations: [customTransitionRight ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCompanyComponent implements OnInit {
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';
            address:Address;
     company:Company;
     errorMessage: string;
     coId: number;
     coName:string;
     title:string;
     itemId: number;
     userId: number;

    myform : FormGroup;
    name   = new FormControl;
    color  = new FormControl;
    hourly = new FormControl;
    paymentTerms = new FormControl;
    active = new FormControl;
    
    constructor(
        private _companyService: CompanyService,
        private _location:Location,
        private _router:Router,
        private _route:ActivatedRoute,
        private _fb:FormBuilder) { }
    
    ngOnInit(){
        this.myform = this._fb.group({
            // "id":this.id,
            "name":this.name,
            "color":this.color,
            "hourly": this.hourly,
            "paymentTerms": this.paymentTerms,
            "active": this.active,
            });
        this._route.params
            .subscribe(params => { 
                this.coId = params['id']
                this.coName = params['coName']
                // this.userId = params['userId'];
            });
        this.userId = parseInt(localStorage.getItem("userId"));
        this.title = this.coId ? " Edit "+ this.coName + " Details" : " New Business";
                                  
        if(this.coId){
            this._companyService
                .getCompany(this.coId)
                .subscribe(company => {this.company= company;
                 console.log(`edit-company ngOnInit company= ${JSON.stringify(company)}`)
                    
                    this.name.setValue(this.company.name);
                    this.color.setValue(this.company.color);
                    this.hourly.setValue(this.company.hourly);
                    this.paymentTerms.setValue(this.company.paymentTerms);
                    this.active.setValue(this.company.active)
                    return this.company;
                },
                response => {
                    if (response.status === 404){
                        this._router.navigate(['NotFound']);
                }
            });
        }
    }
 
    onSubmit() {
        let  id = this.coId;
        let stringUid = '' + this.userId;
        var payload = this.myform.value;
        payload.userId=this.userId;
        // console.log(`edit-company onSubmit ${id}`);
        // console.log(`edit-company onSubmit payload ${payload}`);
        var result;
            if (id) {
                let result = this._companyService.updateCompany(payload, id);
                this._router.navigate(['companies']);
            } else {
                let ID = (id) ? id : "ID NOT HERE";
                // console.log(`edit-company onSubmit payload ${JSON.stringify(payload)}`);
                let result = this._companyService.addCompany(payload);
                // console.log(`result ${JSON.stringify(result)}`);
            }   
               this._router.navigate(['companies']);
        //    this._companyService.addCompany(payload).subscribe(x => {
        //         // Ideally, here we'd want:
        //         // this.form.markAsPristine();
        //         this._router.navigate(['companies']);
        //     });
    }

    goBack(): void {
        this._location.back();
    }
}
