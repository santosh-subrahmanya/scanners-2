import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      alert('Inside AuthGuard !!!!')
     if(localStorage.getItem('currentUser')) {
      // logged in so return true
       return true;
     } 

     // not logged in and hence redirect the user to the login page
     this.router.navigate(['/login'], {queryParams: {returnUrl : state.url}});
  }
}
