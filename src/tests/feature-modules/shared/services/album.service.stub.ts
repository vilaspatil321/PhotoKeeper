import { Observable } from 'rxjs/Rx';
import { Album } from '../../../../app/feature-modules/shared/types/album';
import { UtilService } from '../../../../app/feature-modules/shared/services/util.service';

export class AlbumServiceStub {
    utilService = new UtilService();
    getUserAlbums(userId: number): Observable<Album[]> {
        let albumList: any[] = [
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
            }];
        albumList = albumList.filter((item) => item.userId == userId);
        return Observable.of(albumList.map((item) => { item.isSelected = false; return item; }));
    }

    deleteAlbum(albumList: Album[], albumId: number) {
        this.utilService.deleteArrayItem(albumList, 'id', albumId);
    }

    getAlbumIndex(albumList: Album[], albumId: number) {
        return this.utilService.getArrayItemIndex(albumList, 'id', albumId);
    }

    getAlbumName(albumList: Album[], albumId: number): string {
        let index: number = this.getAlbumIndex(albumList, albumId);
        return index != -1 ? albumList[index].title : null;
    }
}