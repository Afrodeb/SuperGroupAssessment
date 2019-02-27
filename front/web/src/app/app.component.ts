import { Component } from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super Group Assessment';
  loggedIn = true;
   constructor(private router: Router) { }
    ngOnInit() {
		 console.log(this.router.url.includes('login'));
	  if (this.router.url.includes('login')) {
	  this.loggedIn = false;
	  }
	 
  }
  logout(){
	localStorage.setItem('isLoggedIn',"false");
	  this.loggedIn = false; 
	  this.router.navigate(['/login']);
	 } 
}
