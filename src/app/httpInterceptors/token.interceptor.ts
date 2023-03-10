import { LoginService } from '../auth/services/login.service';

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    private loginService:LoginService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.loginService.isLoggedIn()) {
      const currentUser = this.loginService.getCurrentUser();
      request = request.clone({
          setHeaders: { Authorization: `Bearer ${currentUser}` }
      });
    }
    return next.handle(request);
  }

}
