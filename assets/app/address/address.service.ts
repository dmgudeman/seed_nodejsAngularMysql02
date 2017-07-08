import { Injectable }        from '@angular/core';
import { Http, 
         Response, 
         Headers, 
         RequestOptions}     from '@angular/http';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/concatMap';
import { Address }           from './address';
import { MyGlobals }         from '../shared/myglobals';
import { Shared }            from '../shared/shared';

@Injectable()
export class AddressService {
    shared: Shared;
    myglobals: MyGlobals;
	private _url ;
	// private _url = "http://localhost:3000";
    // = "http://192.168.1.3:3000";


	constructor(private _http: Http){
        this.shared = new Shared();
        this.myglobals = new MyGlobals();
        this._url = this.myglobals.url;
	}

    addAddress(payload){
        // console.log("PAYLOAD " + JSON.stringify(payload));
        // console.log("this.getAddressUpdateUrl()" + this.getAddressUrl());
        return this._http.post(this.getAddressUrl(), payload)
                        .map((res:Response) => <Address>res.json())
                        .catch(this.shared.handleError);
        }
    updateAddress(payload, id){
	    // console.log("address.service updateAddress payload " + JSON.stringify(payload))
		return this._http
		           .put(this.getUpdateAddressUrl(id), payload)
		           .map((res:Response) => <Address>res.json())
                   .do(data => console.log(`address.service updateAddress DATA ${data}`))
                   .catch(this.shared.handleError);
	} 
    getAddress(addressId){
        return this._http
                   .get(this.getUpdateAddressUrl(addressId))
                   .map((res) => <Address>res.json())
                   .catch(this.shared.handleError);
    }
    getAddressByCoId(coId){
        return this._http
                   .get(this._url +  "/companies/" + coId )
                   .map((res) => {
                       let address = res.json().company.Address;
                    //    console.log(`getAddressByCoId ${JSON.stringify(address)}`);
                       return address;
                   })
                   .catch(this.shared.handleError);

    }

    getAddressUrl(){
        return this._url +"/addresses";
    }

    getUpdateAddressUrl(coId){
		return this._url + "/addresses/" + coId;
	}
}
