import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData ={};
  error ='';
  constructor(private authSrv:AuthService,private _router:Router) { }

  ngOnInit() {
  }

  loginUser(){
    this.authSrv.userLogin(this.loginData)
    .subscribe( res=>{
      console.log(res);
      if(res.auth){
       localStorage.setItem('token',res.token);
       this._router.navigate(['/hotels']);
      }else{
        this._router.navigate(['/login']);
      }
    },err=>{
      console.log(err); 
      this.error = err.error.message;     
    })
  }
  
}
