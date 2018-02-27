import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { SharedModule } from './feature-modules/shared/shared.module';
import { UserModule } from './feature-modules/user/user.module';
import { AlbumModule } from './feature-modules/album/album.module';
import { PhotoModule } from './feature-modules/photo/photo.module';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { AppErrorHandler } from './feature-modules/shared/services/app-error-handler.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        UserModule,
        PhotoModule,
        AlbumModule        
    ],
    declarations: [
        AppComponent
    ],  
  exports:[SharedModule],
  providers: [
      {
          provide: ErrorHandler,
          useClass: AppErrorHandler
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
