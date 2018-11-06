import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = 'http://localhost:3030/api/user/login'
  private _registerUrl = 'http://localhost:3030/api/user/register'

  constructor(private http:HttpClient,private _router:Router) { }

  userRegistration(user){
    return this.http.post<any>(this._registerUrl,user);
  }
  userLogin(user){
    return this.http.post<any>(this._loginUrl,user);
  }
  logedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logedOut(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }
}
