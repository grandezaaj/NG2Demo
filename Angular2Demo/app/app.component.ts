import { Component } from 'angular2/core';
import { HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { CustomerComponent } from './customer/customer.component';
import { CustomerService } from './customer/customer-service.component';
import { WelcomeComponent } from './home/welcome.component';

@Component({
    selector: 'ng2-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Welcome</a></li>
                    <li><a [routerLink]="['Customers']">Customers</a></li>
                </ul>
            </div>
        </nav>  
        <div class='container'>
            <router-outlet></router-outlet>
        </div>      
     </div>`,
    directives: [ROUTER_DIRECTIVES],
    providers: [CustomerService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true},
    { path: '/customers', name: 'Customers', component: CustomerComponent },    
])

export class AppComponent {
    pageTitle: string = "Angular JS Demo"
}