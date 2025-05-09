import { Routes } from '@angular/router';
import { HomeViewComponent } from './components/layout/main/home-view/home-view.component';
import { StarshipsViewComponent } from './components/layout/main/starships-view/starships-view.component';
import { StarshipDetailsComponent } from './components/starship-details/starship-details.component';

export const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'starships', component: StarshipsViewComponent },
  { path: 'starships/:id', component: StarshipDetailsComponent },
];
