import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from "@angular/router"
 import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie=new Movie;
  movies: Array<object> = [];
  submitted = false;
  constructor(private moviesService: MoviesService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
	this.route.queryParams.subscribe(params => {
    this.moviesService.getMovie(this.route.snapshot.params.id).subscribe((data: Array<object>) => {
    //this.movie = data;
	this.movies=data;
    console.log(data);	
    });
	});
	  //this.reloadData();
  }
  
deleteMovie(id, name) {
	if(confirm("Are you sure to delete "+name)) {
	this.moviesService.deleteMovie(id)
      .subscribe(
        data => {
          console.log(data);
		  this.router.navigate(['/']);
          //this.reloadData();
        },
        error => console.log('ERROR: ' + error));
	console.log(id);	
  }    
  }
 }

