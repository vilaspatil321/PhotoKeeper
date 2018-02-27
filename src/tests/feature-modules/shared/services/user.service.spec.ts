import {async, TestBed, getTestBed } from '@angular/core/testing';
import {DebugElement, Injector, ReflectiveInjector} from '@angular/core';
import {BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from '../../../../app/app.routing.module';
import { User } from '../../../../app/feature-modules/shared/types/user';
import { UserService } from '../../../../app/feature-modules/shared/services/user.service';
import { USER_API_URL } from '../../../../app/feature-modules/shared/config/config';

describe('User service', () => {
    let backend: MockBackend;
    let service: UserService;
    let serviceUrl: string;

    beforeEach(async(() => {
        serviceUrl = USER_API_URL;
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                UserService,
                {
                    deps: [
                        MockBackend,
                        BaseRequestOptions
                    ],
                    provide: Http,
                    useFactory: (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ]
        });
        const testbed = getTestBed();
        backend = testbed.get(MockBackend);
        service = testbed.get(UserService);
        
    }));

    function setupConnections(backend: MockBackend, options: any) {
        backend.connections.subscribe((connection: MockConnection) => {
            if (connection.request.url === serviceUrl) {
                const responseOptions = new ResponseOptions(options);
                const response = new Response(responseOptions);

                connection.mockRespond(response);
            }
        });
    }

    it('should returnn list of users', () => {
        console.log("Executing");
        setupConnections(backend, {
            body: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                            "lat": "-37.3159",
                            "lng": "81.1496"
                        }
                    },
                    "phone": "1-770-736-8031 x56442",
                    "website": "hildegard.org",
                    "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                    }
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "address": {
                        "street": "Victor Plains",
                        "suite": "Suite 879",
                        "city": "Wisokyburgh",
                        "zipcode": "90566-7771",
                        "geo": {
                            "lat": "-43.9509",
                            "lng": "-34.4618"
                        }
                    },
                    "phone": "010-692-6593 x09125",
                    "website": "anastasia.net",
                    "company": {
                        "name": "Deckow-Crist",
                        "catchPhrase": "Proactive didactic contingency",
                        "bs": "synergize scalable supply-chains"
                    }
                }],
            status: 200
        });
        console.log("Executing 1");
        service.getAllUsers().subscribe((data: User[]) => {
            expect(data.length).toBe(2);
        });        
    });
});