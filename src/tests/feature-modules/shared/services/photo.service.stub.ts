import { Observable } from 'rxjs/Rx';
import { Photo } from '../../../../app/feature-modules/shared/types/photo';

export class PhotoServiceStub {
    getAlbumPhotos(albumIds: number[]): Observable<Photo[]> {
        let photoList: any[] = [
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
            },
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
                "albumId": 1,
                "id": 3,
                "title": "officia porro iure quia iusto qui ipsa ut modi",
                "url": "http://placehold.it/600/24f355",
                "thumbnailUrl": "http://placehold.it/150/24f355"
            }
        ];
        return Observable.of(photoList.filter((item) => albumIds.indexOf(item.albumId) != -1));
    }
}