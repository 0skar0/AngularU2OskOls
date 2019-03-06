import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService   {

  public loggedUser: string;

  constructor() {

   }

  public login(name: string): void {
    localStorage.setItem('user', name);
    this.loggedUser = name;
  }

  public logout():void {
    localStorage.clear();
    this.loggedUser = undefined;
  }

  public checkIfLoggedIn() {
    return localStorage.getItem('user')
  }


}
