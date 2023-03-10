import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl="http://192.168.29.79/ciProject";
  redirectUrl:string="";
  private token:string="";

  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };


  constructor(
              private http:HttpClient,
              private router:Router
              ) { }

  login(data:any):Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,data,this.httpOptions);
  }

  setToken(token:string):void{
    this.token=token;
    console.log(localStorage.getItem('token'))
  }

  getToken():string{
    return this.token;
  }

  doLogin(user:any){
   this.token=JSON.stringify(localStorage.getItem('token'));
  }

  getCurrentUser(){
    return localStorage.getItem('token');
  }

  getUserName(){
    return localStorage.getItem('username');
  }

  isLoggedIn(){
    const currentUser=this.getCurrentUser();
    if(currentUser){
        return true;
      // const currentTime=Math.round((new Date()).getTime()/1000);
    }
    return false;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('isUserLoggedIn');
    this.router.navigate(['auth/login']);
  }

  randomString(length:number) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    this.token=result;
    return result;
}


}
