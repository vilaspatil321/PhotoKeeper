import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { AlbumListComponent } from './album-list.component';

@NgModule({
    declarations: [AlbumListComponent],
    imports: [CommonModule, RouterModule],
    exports: [AlbumListComponent],
    providers: []
})
export class AlbumModule { }