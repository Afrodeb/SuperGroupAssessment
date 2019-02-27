import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user: User=new User;
 response: string='';
 email = '';
  password = '';
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit() {
  }

  tryLogin(){	  
	   this.userService.login(this.user)
      .subscribe(data =>
	  //console.log(data[0].text);
	   data.forEach(c => {
      console.log(c);
	  if(c.text === "true"){
	   localStorage.setItem('isLoggedIn', "true");
	   this.router.navigate(['/']);
	  }else{
		alert("Login failed");  
	  }
      });
      //response: string=this.data[0];	  
	  // console.log(this.response);
	  this.user = new User();
	  /**/, 
	  error => console.log(error));
	  
  }
  
}
