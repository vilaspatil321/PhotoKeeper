import {async, TestBed, getTestBed } from '@angular/core/testing';
import {DebugElement, Injector, ReflectiveInjector} from '@angular/core';
import {BaseRequestOptions, Http, Response, ResponseOptions, XHRBackend} from '@angular/http';
import {RouterTestingModule} from '@angular/router/testing';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from '../../../../app/app.routing.module';
import { Album } from '../../../../app/feature-modules/shared/types/album';
import { AlbumService } from '../../../../app/feature-modules/shared/services/album.service';
import { UtilService } from '../../../../app/feature-modules/shared/services/util.service';
import { ALBUM_API_URL } from '../../../../app/feature-modules/shared/config/config';

describe('Album service', () => {
    let backend: MockBackend;
    let service: AlbumService;
    let serviceUrl: string;

    beforeEach(async(() => {
        serviceUrl = ALBUM_API_URL;
        TestBed.configureTestingModule({
            providers: [
                BaseRequestOptions,
                MockBackend,
                AlbumService,
                UtilService,
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
        service = testbed.get(AlbumService);

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
        
        setupConnections(backend, {
            body: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "quidem molestiae enim"
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "sunt qui excepturi placeat culpa"
                    },
                    {
                        "userId": 1,
                        "id": 3,
                        "title": "omnis laborum odio"
                    },
                    {
                        "userId": 1,
                        "id": 4,
                        "title": "non esse culpa molestiae omnis sed optio"
                    },
                    {
                        "userId": 2,
                        "id": 11,
                        "title": "quam nostrum impedit mollitia quod et dolor"
                    },
                    {
                        "userId": 2,
                        "id": 12,
                        "title": "consequatur autem doloribus natus consectetur"
                    },
                    {
                        "userId": 2,
                        "id": 13,
                        "title": "ab rerum non rerum consequatur ut ea unde"
                    }
            ],
            status: 200
        });
        service.getUserAlbums(2).subscribe((data: Album[]) => {
            expect(data.length).toBe(3);
        });
    });

    it('should delete album', () => {
        let albumList: Album[] = [{
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim",
            "isSelected": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "sunt qui excepturi placeat culpa",
                "isSelected": false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "omnis laborum odio",
                "isSelected": false
            },
            {
                "userId": 1,
                "id": 4,
                "title": "non esse culpa molestiae omnis sed optio",
                "isSelected": false
            }];
        service.deleteAlbum(albumList, 2);
        expect(albumList.length).toBe(3);
    });

    it('should get album index', () => {
        let albumList: Album[] = [{
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim",
            "isSelected": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "sunt qui excepturi placeat culpa",
                "isSelected": false
            }];    
        expect(service.getAlbumIndex(albumList, 2)).toBe(1);
    });

    it('should get album name', () => {
        let albumList: Album[] = [{
            "userId": 1,
            "id": 1,
            "title": "quidem molestiae enim",
            "isSelected": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "sunt qui excepturi placeat culpa",
                "isSelected": false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "omnis laborum odio",
                "isSelected": false
            }];
        expect(service.getAlbumName(albumList, 2)).toBe("sunt qui excepturi placeat culpa");
    });
});