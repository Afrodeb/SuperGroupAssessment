import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {
  movie: Movie=new Movie;
  submitted = false;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }
 newMovie(): void {
    this.submitted = false;
    this.movie = new Movie();
  }
 
  save() {
    this.moviesService.createMovie(this.movie)
      .subscribe(data => console.log(data), error => console.log(error));
    this.movie = new Movie();
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}