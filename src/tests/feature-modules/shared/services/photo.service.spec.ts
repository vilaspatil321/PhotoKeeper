import {async, TestBed, getTestBed } from '@angular/core/testing';
import {DebugElement, Injector, ReflectiveInjector} from '@angular/core';
import {BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from '../../../../app/app.routing.module';
import { Photo } from '../../../../app/feature-modules/shared/types/photo';
import { PhotoService } from '../../../../app/feature-modules/shared/services/photo.service';
import { PHOTO_API_URL } from '../../../../app/feature-modules/shared/config/config';

describe('Photo service', () => {
    let backend: MockBackend;
    let service: PhotoService;
    let serviceUrl: string;

    beforeEach(async(() => {
        serviceUrl = PHOTO_API_URL;
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                PhotoService,
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
        service = testbed.get(PhotoService);

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
                        "albumId": 1,
                        "id": 1,
                        "title": "accusamus beatae ad facilis cum similique qui sunt",
                        "url": "http://placehold.it/600/92c952",
                        "thumbnailUrl": "http://placehold.it/150/92c952"
                    },
                    {
                        "albumId": 1,
                        "id": 2,
                        "title": "reprehenderit est deserunt velit ipsam",
                        "url": "http://placehold.it/600/771796",
                        "thumbnailUrl": "http://placehold.it/150/771796"
                    },
                    {
                        "albumId": 2,
                        "id": 51,
                        "title": "non sunt voluptatem placeat consequuntur rem incidunt",
                        "url": "http://placehold.it/600/8e973b",
                        "thumbnailUrl": "http://placehold.it/150/8e973b"
                    },
                    {
                        "albumId": 2,
                        "id": 52,
                        "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
                        "url": "http://placehold.it/600/121fa4",
                        "thumbnailUrl": "http://placehold.it/150/121fa4"
                    },
                    {
                        "albumId": 2,
                        "id": 53,
                        "title": "soluta et harum aliquid officiis ab omnis consequatur",
                        "url": "http://placehold.it/600/6efc5f",
                        "thumbnailUrl": "http://placehold.it/150/6efc5f"
                    },
                    {
                        "albumId": 2,
                        "id": 54,
                        "title": "ut ex quibusdam dolore mollitia",
                        "url": "http://placehold.it/600/aa8f2e",
                        "thumbnailUrl": "http://placehold.it/150/aa8f2e"
                    }
            ],
            status: 200
        });
        service.getAlbumPhotos([1,2]).subscribe((data: Photo[]) => {
            expect(data.length).toBe(6);
        });
    });
});