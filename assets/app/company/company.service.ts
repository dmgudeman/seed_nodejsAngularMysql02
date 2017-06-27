import { Injectable }        from '@angular/core';
import { Http, 
         Response, 
         Headers, 
         RequestOptions}     from '@angular/http';
import { Observable }        from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/concatMap'
import { Company }           from './company';
import { Item }              from '../item/item';
import { MyGlobals }         from '../shared/myglobals';
import { Shared }            from '../shared/shared';
@Injectable()
export class CompanyService {
    
    company:Company;
    items: Item[];
    shared: Shared;
    myglobals: MyGlobals;
    
	private _url ;

	constructor(private _http: Http){
        this.shared = new Shared();
        this.myglobals = new MyGlobals();
        this._url = this.myglobals.url;
	}
    
	getCompanies():Observable<Company[]>{
        // console.log('IN COMPANY.SERVICE getCompanies');
        const token = localStorage.getItem('token') 
            ? localStorage.getItem('token')                                              
            : '';

        let headers = new Headers({'authorization': token });               
        let options = new RequestOptions({ headers: headers});

		return this._http
                   .get(this._url + "/companies", options)                                        
			       .map((res:Response) =>{ 
                        let body = (res.json().companies) ? res.json().companies : null;
                        return body ;
                   })
                   .catch(this.shared.handleError2);
	}

    getCompany(id:number) {
        let body;
        return this._http.get(this.getCompanyUrl(id) )
                   .map ((res:Response) => {body = res.json().company;
                                             return body;})
       } 

    getItemsByCompany(id:number){
        let body;
        return this._http.get(this.getCompanyUrl(id))
                         .map((res:Response) => {body = <Company>res.json()
        console.log("CO_SERVICE: getItemsByCompany " + JSON.stringify(body))
                                                return body;})
    }    
    getItemsByCompany2(id:number){
        console.log(`1. COMPANY.SERVICE getItemsByCompany2 id= ${id}`);
        console.log(`1. COMPANY.SERVICE getItemsByCompany2 this.getCompanyUrl(id)= ${this.getCompanyUrl(id)}`);

        let body;
        return this._http.get(this.getCompanyUrl(id))
                         .map((res:Response) => {body = <Company>res.json().company.Items;
           console.log("2. COMPANY.SERVICE getItemsByCompany2 " + JSON.stringify(body))
                         return body;})
    }    
    
    addCompany(payload){
        console.log(`payload in addCompany ${JSON.stringify(payload)}`);
               
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers })
    
        return this._http.post( this.getCompanyUpdateUrl() , JSON.stringify(payload), options)
                   .map(res => res.json())
    }

    updateCompany(payload, id){
		return this._http.put(this.getCompanyUrl(id), {company:payload})
                            .map((res:Response) => <Company>res.json())
                            .catch(this.shared.handleError);
        }
    
    deleteCompany(companyId){
		return this._http.delete(this.getCompanyUrl(companyId))
			.map(res => res.json());
	}
    
    getCompanyUrl(companyId){
		return this._url + "/companies/" + companyId;
	}
    getCompanyUpdateUrl(){
        return this._url +"/companies";
    }
    
    // https://angular.io/docs/ts/latest/guide/server-communication.html#!#extract-data
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    logout() {
        // console.log(`in logout company.service ${this._url +'/logout'}`);
        return this._http.get(this._url + '/logout')
                //    .map(res => res.json().user);
    }
}