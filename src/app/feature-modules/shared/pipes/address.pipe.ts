import {Pipe, PipeTransform} from '@angular/core';
import { Address } from '../types/address';

@Pipe({
    name: 'address'
})
export class AddressPipe implements PipeTransform {
    transform(address: Address): string {
        let transformedAddress: string;
        if (address)
            transformedAddress = address.suite + ", " + address.street + ", " + address.city + ", " + address.zipcode;
        return transformedAddress;
    }
}