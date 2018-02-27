import { TestBed, async } from '@angular/core/testing';
import {RouterModule} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { PipeModule } from '../../../app/feature-modules/shared/pipes/pipe.module';
import { PhotoFlipperComponent } from '../../../app/feature-modules/photo/photo-flipper.component';
import { PhotoListComponent } from '../../../app/feature-modules/photo/photo-list.component';
import { InteractionService } from '../../../app/feature-modules/shared/services/interaction.service';
import { PhotoService } from '../../../app/feature-modules/shared/services/photo.service';
import { AlbumService } from '../../../app/feature-modules/shared/services/album.service';
import { AlbumServiceStub } from '../shared/services/album.service.stub';
import { PhotoServiceStub } from '../shared/services/photo.service.stub';

describe('PhotoFlipperComponent', () => {
    let fixture: any;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, RouterModule, PipeModule],
            declarations: [
                PhotoFlipperComponent, PhotoListComponent
            ],
            providers: [PhotoService, InteractionService,
                { provide: APP_BASE_HREF, useValue: '/' },
                { provide: PhotoService, useClass: PhotoServiceStub },
                { provide: AlbumService, useClass: AlbumServiceStub }
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        fixture = TestBed.createComponent(PhotoFlipperComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    }));

    it('should contain 7 albums in list', async(() => {
        fixture = TestBed.createComponent(PhotoFlipperComponent);
        const component: PhotoFlipperComponent = fixture.debugElement.componentInstance;
        (component as any).interactionService.albums = [{ id: 1, title: 'album one', isSelected: false, userId: 1 }, { id: 2, title: 'album two', isSelected: false, userId: 1 }];
        component.ngOnInit();
        expect(component.photoList.length).toBe(7);
    }));

});
