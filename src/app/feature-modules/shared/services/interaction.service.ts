import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { Album } from '../types/album';
import { User } from '../types/user';

@Injectable()
export class InteractionService
{
    public albums: Album[] = [];
}