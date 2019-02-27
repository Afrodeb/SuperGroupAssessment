import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUrl = 'http://localhost:9000/api/user';
 
  constructor(private http: HttpClient) { }
 
  login(user: Object): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/login`, user);
  }
 
}

