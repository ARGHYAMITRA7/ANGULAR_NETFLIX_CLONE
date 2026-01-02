import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'browse',loadComponent:()=>import('./pages/browse/browse.component').then(a=>a.BrowseComponent)},
    {path:'movie/:id',loadComponent:()=>import('./pages/movie-detail/movie-detail.component').then(a=>a.MovieDetailComponent)}
];
