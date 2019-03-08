import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

// Sköter logik för ut- och inloggning
export class AuthServiceService {

  public loggedUser: string;

  constructor() {}

  // tilldelar loggedUser ett värde från login-component i localStorage
  public login(name: string): void {
    localStorage.setItem('user', name);
    this.loggedUser = name;
  }

  // rensar localStorage vit utloggning och sätter loggedUser till undefined
  public logout(): void {
    localStorage.clear();
    this.loggedUser = undefined;
  }

  // kontrollerar om man är inloggad eller ej genom att hämta värdet av user i localStorage.
  public checkIfLoggedIn(): string {
    return localStorage.getItem('user')
  }
}
