import {Injectable} from 'angular2/core';
import { ICustomer } from './customer';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CustomerService {
    private _productUrl = 'http://wdf2demo.leanconsulting.ph/api/Customers';
    constructor(private _http: Http) {}

    getCustomers(): Observable<ICustomer[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <ICustomer[]>response.json())            
            .catch(this.handleError);

            //.do(data => console.log("All: " + JSON.stringify(data)))
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}