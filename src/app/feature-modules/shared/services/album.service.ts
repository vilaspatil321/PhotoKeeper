import { Injectable } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Album } from '../types/album';
import { UtilService } from './util.service';
import { ALBUM_API_URL } from '../config/config'

@Injectable()
export class AlbumService {
    constructor(private httpService: Http, private utilService: UtilService) {
    }

    getUserAlbums(userId: number): Observable<Album[]> {
        return this.httpService.get(ALBUM_API_URL).map(
            (response: Response) => response.json().filter((album) => album.userId == userId)
        );
    }

    deleteAlbum(albumList: Album[], albumId: number) {
        this.utilService.deleteArrayItem(albumList, 'id', albumId);
    }

    getAlbumIndex(albumList: Album[], albumId: number): number {
        return this.utilService.getArrayItemIndex(albumList, 'id', albumId);
    }

    getAlbumName(albumList: Album[], albumId: number): string {
        let index: number = this.getAlbumIndex(albumList, albumId);
        return index != -1 ? albumList[index].title : null;
    }

}
