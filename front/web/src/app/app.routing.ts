import { RouterModule, Routes } from '@angular/router';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'view/:id', component: MovieDetailsComponent },
   { path: 'edit/:id', component: EditMovieComponent },
  { path: 'movie-create', component: CreateMovieComponent },
  { path: 'login', component: LoginComponent },
  ];

export const routing = RouterModule.forRoot(routes);