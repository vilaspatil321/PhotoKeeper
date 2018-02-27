import {Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PhotoService } from '../shared/services/photo.service';
import { Photo } from '../shared/types/photo';
import { AlbumService } from '../shared/services/album.service';
import { InteractionService } from '../shared/services/interaction.service';

@Component({
    selector: 'photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
    @Input() photoList: Photo[];
    albumName: string;

    constructor(private interactionService: InteractionService,
                private albumService: AlbumService) {
    }

    ngOnInit() {
        this.albumName = this.photoList.length ? this.getAlbumName(this.photoList[0].albumId) : '';
    }

    getAlbumName(albumId: number): string {
        return this.albumService.getAlbumName(this.interactionService.albums, albumId);
    }
}