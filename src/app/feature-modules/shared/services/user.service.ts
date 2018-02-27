import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { User } from '../types/user';
import { USER_API_URL } from '../config/config'

@Injectable()
export class UserService {
    constructor(private httpService: Http) {
    }

    getAllUsers(): Observable<User[]> {
        return this.httpService.get(USER_API_URL).map(
            (response: Response) => response.json()
        );
    }

    getUser(userId: number): Observable<User[]> {
        return this.httpService.get(USER_API_URL).map(
            (response: Response) => response.json().filter((user) => user.id == userId)
        );
    }    
}
