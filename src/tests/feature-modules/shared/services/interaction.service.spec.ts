import { InteractionService } from '../../../../app/feature-modules/shared/services/interaction.service';
import { Album } from '../../../../app/feature-modules/shared/types/album';

describe('Interaction service', () => {
    it('should add album ids to album id collection', () => {
        let service: InteractionService = new InteractionService();
        service.albums.push({id:1, title:'album one', isSelected: false, userId: 1});
        service.albums.push({ id: 2, title: 'album two', isSelected: false, userId: 1 });
        expect(service.albums.length).toBe(2);
    });
    
});