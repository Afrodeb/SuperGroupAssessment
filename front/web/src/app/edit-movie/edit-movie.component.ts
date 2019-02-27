import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {
  movie: Movie=new Movie();
  movies: Array<Movie> = [];
  submitted = false;
  constructor(private moviesService: MoviesService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
	this.route.queryParams.subscribe(params => {
    this.moviesService.getMovie(this.route.snapshot.params.id).subscribe((data: Array<Movie>) => {
	this.movies=data;
    //console.log(this.movie);	
    });
	});
	  //this.reloadData();
  }
   newMovie(): void {
    this.submitted = false;
    this.movie = new Movie();
	this.router.navigate(['/']);
  }
   update() {	   
	  // console.log(this.movies[0].id);
    this.moviesService.updateMovie(this.movies[0].id,this.movies[0])
      .subscribe(data => console.log(data), error => console.log(error));
     
	 this.submitted = true;
  }  
 }