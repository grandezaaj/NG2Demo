import { PipeTransform, Pipe } from 'angular2/core';
import { ICustomer } from './customer';

@Pipe({
    name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

    transform(value: ICustomer[], args: string[]): ICustomer[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((customer: ICustomer) =>
            customer.contactName.toLocaleLowerCase().indexOf(filter) != -1) : value;
    }
}