import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthServiceService } from './auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(public router: Router, private authService: AuthServiceService) {

  }

  canActivate(): boolean {
    let loggedUser = this.authService.checkIfLoggedIn();
    if (!loggedUser) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
