import { Injectable }        from '@angular/core';
import { Http,  
	     Response, 
		 Headers, 
		 RequestOptions }    from '@angular/http';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Company }           from '../company/company';
import { CompanyService }    from '../company/company.service';
import { Item }              from '../item/item';
import { MyGlobals }         from '../shared/myglobals';
import { Shared }            from '../shared/shared';

@Injectable()
export class ItemService {
	private _url;
    shared: Shared;
	myglobals:MyGlobals;

	constructor(private _http: Http,
	            private _companyService: CompanyService,
				private _router:Router){
		this.shared = new Shared();
		this.myglobals = new MyGlobals();
        this._url = this.myglobals.url;
	}

	getItems(){
		return this._http
		           .get(this._url)
			       .map(res => res.json());
	}

	// getItemsByCompany(id:number){
    //     let body;
    //     return this._http.get(this._companyService.getCompanyUrl(id))
    //                      .map((res:Response) => {body = <Company>res.json().company.Items;
    //     // console.log("CO_SERVICE: getItemsByCompany " + JSON.stringify(body))
    //                                             return body;})
    // }    
    getItemsByCompany(id:number){
        // let body:Item[];
        console.log(`IN GETITEMSBYCOMPANY ITEMS.SERVICE`);
        return this._http.get('/items/' + id)
                         .map((res:Response) => {
                             console.log(`IN MAPPPPPPPPPPPPPPPPPPPPPPP `);
                             let items = res.json().item;
                            //  let items = body.company;
						console.log(`ITEMS_SERVICE: items= ${JSON.stringify(res.json().item)}`);
                        // console.log("ITEMS_SERVICE: res.json()._body" + JSON.stringify(res.json()._body));
                         return items;})
    }    
	// getItemsByDateRange (coId, beginDate)
	// 	 return this.getItemsByCompany(coId)
	// 	            .filter (data => data.date > beginDate);
	// }
    
    getItem(itemId){
		// console.log("this.getItemUrl(itemId)  " + this.getItemUrl(itemId))
		let body:Item;
		let   yunkers = this._http
		                    .get(this.getItemUrl(itemId))
							.map((res:Response) => {body = <Item>res.json().item; return body})
							// .do(data => console.log("GETITEM BODY" + JSON.stringify(body)))
			                return yunkers;
	}
    
    addItem(payload){
		console.log("ADDITEM: payload " + JSON.stringify(payload))
		console.log(`this._url ${this._url}/items`);
		return this._http
		           .post(this._url + '/items', payload)
				   .map(res => res.json())
                   .catch(this.shared.handleError);
	}

    updateItem(payload, id){
	    console.log("UPDATE ITEM: payload " + JSON.stringify(payload))
		return this._http
		           .put(this.getItemUrl(id), payload)
		           .map((res:Response) => <Item>res.json())
                   .catch(this.shared.handleError);
	}
	
	calculateAmount(item:Item) {
		let id = item.companyId;
		let company: Company;
		let hourly: number;
		this._companyService
                .getCompany(id)
                .subscribe(
                    company => {company = company,
                                hourly = company.hourly;
								return hourly;
                               },
                    response => { if (response.status = 404) {
                                        this._router.navigate(['not-found']);}
                                }
                );
       console.log( "INVOICESERVICE hourly ", hourly);
       let subtotal = (item.hours * hourly) + item.amount;
       console.log( "INVOICESERVICE subtotal ", subtotal);

	   return subtotal;
  
	}
    deleteItem(itemId){
		return this._http
		           .delete(this.getItemUrl(itemId))
			       .map(res => res.json());
	}
    
    getItemUrl(itemId){
		return this._url + "/items/" + itemId;
	}


}