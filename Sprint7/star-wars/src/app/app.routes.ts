import { Routes } from '@angular/router';
import { HomeViewComponent } from './components/layout/main/home-view/home-view.component';
import { StarshipsViewComponent } from './components/layout/main/starships-view/starships-view.component';

export const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'starships', component: StarshipsViewComponent },
  { path: 'starships:id', component: StarshipsViewComponent },
];
