import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature-modules/user/user-list.component';
import { AlbumListComponent } from './feature-modules/album/album-list.component';
import { PhotoFlipperComponent } from './feature-modules/photo/photo-flipper.component';

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'users'
    },
    {
        path: 'users', component: UserListComponent
    },
    {
        path: 'albums/:id', component: AlbumListComponent
    },
    {
        path: 'photos', component: PhotoFlipperComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {
}

//export const routableComponents = [
//    AppComponent
//]