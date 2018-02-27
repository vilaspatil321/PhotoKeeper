import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { PipeModule } from '../shared/pipes/pipe.module';
import { UserListComponent } from './user-list.component';

@NgModule({
    declarations: [UserListComponent],
    imports: [RouterModule, CommonModule, PipeModule],
    exports: [UserListComponent],
    providers: []
})
export class UserModule { }