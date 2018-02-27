import { UtilService } from '../../../../app/feature-modules/shared/services/util.service';

describe('Util service', () => {
    let albumList: any[] = [{
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
        }];
    let service: UtilService = new UtilService();
    it('should get array index', () => {
        expect(service.getArrayItemIndex(albumList,'id',3)).toBe(2);
    });

    it('should get array index', () => {
        service.deleteArrayItem(albumList, 'id', 2);
        expect(albumList.length).toBe(3);
    });

});