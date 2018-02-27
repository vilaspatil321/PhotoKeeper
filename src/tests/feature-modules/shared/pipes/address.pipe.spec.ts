import { AddressPipe } from '../../../../app/feature-modules/shared/pipes/address.pipe';
import { Address } from '../../../../app/feature-modules/shared/types/address';

describe('Address pipe', () => {    
    it('should transform given address', () => {        
        let pipe: AddressPipe = new AddressPipe();
        let address: Address = {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        };
        expect(pipe.transform(address)).toBe('Apt. 556, Kulas Light, Gwenborough, 92998-3874');
    });

    it('should handle null address', () => {
        let pipe: AddressPipe = new AddressPipe();
        expect(pipe.transform(null)).toBeUndefined();
    });
});