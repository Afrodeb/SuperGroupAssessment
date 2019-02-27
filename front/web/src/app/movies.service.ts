import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  private baseUrl = 'http://localhost:9000/api/movies';
 
  constructor(private http: HttpClient) { }
 
  getMovie(id: number): Observable<Object> {
    return this.http.get<Movie>(`${this.baseUrl}/id/${id}`);
  }

 
  createMovie(movie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, movie);
  }
 
  updateMovie(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
 
  deleteMovie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }
 
  getMovieList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/delete`, { responseType: 'text' });
  }
}

