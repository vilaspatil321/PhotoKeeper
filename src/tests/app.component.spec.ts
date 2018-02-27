import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
    let fixture: any;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: APP_BASE_HREF, useValue: '/' }
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        fixture = TestBed.createComponent(AppComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
    }));

});
