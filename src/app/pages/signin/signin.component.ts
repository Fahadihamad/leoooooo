import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user =new User();
  msg='';

  constructor(private _service:RegistrationService,private  _router :Router) { }

  ngOnInit(): void {
  }
  signinUser(){
    this._service.registerUserFromRemote(this.user).subscribe(
      data =>{
        console.log("response recieved");
        this._router.navigate(['/login'])
      },
      error=>{
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }

}
