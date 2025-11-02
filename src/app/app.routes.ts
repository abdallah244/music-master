import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ArtistsComponent } from './pages/artists/artists';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: '**', redirectTo: '' }
];
