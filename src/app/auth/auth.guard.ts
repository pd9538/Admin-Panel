import { LoginService } from './services/login.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private loginService:LoginService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let url:string=state.url;
      return this.checkLogin(url);
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(next,state);
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url=`/${route.path}`;
      return this.checkLogin(url);
  }

  checkLogin(url:string):any{
    let val:any=localStorage.getItem('isUserLoggedIn');

    if(val!=null && val=='true'){
      if(url=='auth/login'){
        this.router.parseUrl('root/dashboard');
      }
      else{
        return true;
      }
    }
    else{
      return this.router.parseUrl('auth/login');
    }
  }

}
