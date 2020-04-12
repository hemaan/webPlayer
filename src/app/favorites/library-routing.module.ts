import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { LibraryComponent } from './components/favorites.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'library',
    component: LibraryComponent,
    children: [
      {
        path: 'artist',
        component: ArtistComponent,
      },
      {
        path: 'playlist',
        component: PlaylistComponent,
      },
      {
        path: 'album',
        component: AlbumComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesRoutingModule {}
