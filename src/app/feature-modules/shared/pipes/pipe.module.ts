import {NgModule} from '@angular/core';
import { AddressPipe } from './address.pipe';

@NgModule({
    declarations: [AddressPipe],
    imports: [],
    exports: [AddressPipe],
    providers: []
})
export class PipeModule { }