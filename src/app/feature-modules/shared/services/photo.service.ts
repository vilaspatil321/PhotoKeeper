import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Album } from '../types/album';
import { Photo } from '../types/photo';
import { PHOTO_API_URL } from '../config/config'

@Injectable()
export class PhotoService {
    constructor(private httpService: Http) {
    }

    getAlbumPhotos(albumIds: number[]): Observable<Photo[]> {
        return this.httpService.get(PHOTO_API_URL).map(
            (response: Response) => response.json()
                .filter((photo) => albumIds.indexOf(photo.albumId) != -1)
        );
    }
}
