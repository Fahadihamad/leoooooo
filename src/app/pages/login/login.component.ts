import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user = new User();
  
msg='';

  constructor(private _service : RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }
  loginUser(){
   this._service.loginUserFromRemote(this.user).subscribe(
     data =>{
      console.log("response recieved"),
     this._router.navigate(["/loginsuccess"])
     },
     error =>{
      console.log("exception occured");
      this.msg="please inter correct registration number or password";
     }
   )
  
      
  }

}  
