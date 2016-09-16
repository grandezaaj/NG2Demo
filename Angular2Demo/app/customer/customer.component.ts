import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';
import { ICustomer } from './customer';
import { CustomerService } from './customer-service.component';
import { CustomerFilterPipe } from './customer-filter.pipe';

@Component({
    templateUrl : 'app/customer/customer-list.html',
    directives: [ROUTER_DIRECTIVES],
    pipes: [CustomerFilterPipe],
})

export class CustomerComponent implements OnInit {    
    pageTitle: string = 'Customers';    
    customers: ICustomer[];
    errorMessage: string;

    constructor(private _customerService: CustomerService, private _router: Router){        
    }

    ngOnInit(): void {
        this._customerService.getCustomers()
            .subscribe(customers => this.customers = customers,
                error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['Welcome']);
    }

}