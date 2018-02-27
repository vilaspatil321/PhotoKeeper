import {Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { AlbumService } from '../shared/services/album.service';
import { UserService } from '../shared/services/user.service';
import { InteractionService } from '../shared/services/interaction.service';
import { Album } from '../shared/types/album';
import { MAX_ALLOWED_ALBUMS } from '../shared/config/config';

@Component({
    selector: 'album-list',
    templateUrl: './album-list.component.html',
    styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit, OnDestroy {
    userId: number;
    albumList: Album[] = [];
    selectedCount: number = 0;
    validationMessage: string;
    getAlbumsSubscription: ISubscription;
    getUserSubscription: ISubscription;
    userName: string;

    constructor(private route: ActivatedRoute,
                private albumService: AlbumService,
                private userService: UserService,
                private interactionService: InteractionService) {        
    }

    ngOnInit() {
        this.interactionService.albums = [];
        this.userId = parseInt(this.route.snapshot.params['id']);
        if (!isNaN(this.userId)) {
            //the user details are retrieved by calling user service and not through interaction service 
            //because if the end user tries to get albums directly by entering url in the browser address bar
            //like http://localhost:4200/albums/7 that given user id may not be a part of the interaction service data
            //whereas the current approach would work fine
            this.getUserSubscription = this.userService.getUser(this.userId).subscribe((result) => {
                this.userName = result.length ? result[0].name : ''
            });
                
            this.getAlbumsSubscription = this.albumService.getUserAlbums(this.userId).subscribe(
                (result) => {
                    result.map((album) => this.albumList.push(album))
                }
            );
        }
    }    

    toggleSelection(album: Album) {
        if (this.selectedCount == MAX_ALLOWED_ALBUMS && !album.isSelected) {
            this.validationMessage = 'Only ' + MAX_ALLOWED_ALBUMS +' albums can be selected at most!';
            return;
        }
        this.validationMessage = '';
        album.isSelected = !album.isSelected;
        if (album.isSelected) {
            this.interactionService.albums.push(album);
            this.selectedCount += 1;
        }
        else {
            this.albumService.deleteAlbum(this.interactionService.albums, album.id);
            this.selectedCount -= 1;
        }
    }

    ngOnDestroy() {
        if (this.getAlbumsSubscription)
            this.getAlbumsSubscription.unsubscribe();
        if (this.getUserSubscription)
            this.getUserSubscription.unsubscribe();
    }
}