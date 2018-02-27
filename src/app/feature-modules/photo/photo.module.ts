import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { PhotoFlipperComponent } from './photo-flipper.component';
import { PhotoListComponent } from './photo-list.component';

@NgModule({
    declarations: [PhotoFlipperComponent, PhotoListComponent],
    imports: [CommonModule, RouterModule],
    exports: [PhotoFlipperComponent, PhotoListComponent],
    providers: []
})
export class PhotoModule { }