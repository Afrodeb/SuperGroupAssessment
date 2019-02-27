import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MoviesService} from "./movies.service";
import { LoginComponent } from './login/login.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailsComponent,
    CreateMovieComponent,
    LoginComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
	routing,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }