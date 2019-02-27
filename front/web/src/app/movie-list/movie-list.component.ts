import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movie: Movie=new Movie;
  movies: Array<object> = [];
  submitted = false;
  constructor(private moviesService: MoviesService,private router: Router) { }

  ngOnInit() {
	  if(localStorage.getItem('isLoggedIn') != "true"){
		  this.router.navigate(['/login']);
	  }
	  this.reloadData();
  }
deleteUsers() {
    this.moviesService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
 
  reloadData() {
	this.moviesService.getMovieList().subscribe((data: Array<object>) => {
this.movies = data;
console.log(data);
});
  }
}
