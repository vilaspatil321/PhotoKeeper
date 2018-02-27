import { TestBed, async } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';
import { PipeModule } from '../../../app/feature-modules/shared/pipes/pipe.module';
import { UserListComponent } from '../../../app/feature-modules/user/user-list.component';
import { UserService } from '../../../app/feature-modules/shared/services/user.service';
import { UserServiceStub } from '../shared/services/user.service.stub';

describe('UserListComponent', () => {
    let fixture: any;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule, PipeModule],
        declarations: [
          UserListComponent
        ],
        providers: [UserService,
            { provide: APP_BASE_HREF, useValue: '/' },
            { provide: UserService, useClass: UserServiceStub }
        ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
        fixture = TestBed.createComponent(UserListComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component).toBeTruthy();
  }));

  it('should contain 2 users in list', async(() => {
      fixture = TestBed.createComponent(UserListComponent);
      const component: UserListComponent = fixture.debugElement.componentInstance;
      component.ngOnInit();
      expect(component.userList.length).toBe(2);
  }));
  
});
