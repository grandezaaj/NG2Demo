System.register(['angular2/core', 'angular2/router', './customer-service.component', './customer-filter.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, customer_service_component_1, customer_filter_pipe_1;
    var CustomerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (customer_service_component_1_1) {
                customer_service_component_1 = customer_service_component_1_1;
            },
            function (customer_filter_pipe_1_1) {
                customer_filter_pipe_1 = customer_filter_pipe_1_1;
            }],
        execute: function() {
            CustomerComponent = (function () {
                function CustomerComponent(_customerService, _router) {
                    this._customerService = _customerService;
                    this._router = _router;
                    this.pageTitle = 'Customers';
                }
                CustomerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._customerService.getCustomers()
                        .subscribe(function (customers) { return _this.customers = customers; }, function (error) { return _this.errorMessage = error; });
                };
                CustomerComponent.prototype.onBack = function () {
                    this._router.navigate(['Welcome']);
                };
                CustomerComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/customer/customer-list.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: [customer_filter_pipe_1.CustomerFilterPipe],
                    }), 
                    __metadata('design:paramtypes', [customer_service_component_1.CustomerService, router_1.Router])
                ], CustomerComponent);
                return CustomerComponent;
            }());
            exports_1("CustomerComponent", CustomerComponent);
        }
    }
});
//# sourceMappingURL=customer.component.js.map