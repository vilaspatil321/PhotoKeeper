import {Component, OnInit, OnDestroy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/types/user';
import { Address } from '../shared/types/address';
import { AddressPipe } from '../shared/pipes/address.pipe';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
    prop: string = 'Initialize';
    userList: User[] = [];
    getAllUsersSubscription: ISubscription;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.getAllUsersSubscription = this.userService.getAllUsers().subscribe(
            (result) => {
                result.map((user) => this.userList.push(user));
            }
        );
    } 

    ngOnDestroy() {
        if (this.getAllUsersSubscription)
            this.getAllUsersSubscription.unsubscribe();
    }
}