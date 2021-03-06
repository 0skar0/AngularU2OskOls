import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// utför kontroller och tilldelar värden på userName och loggedUser.
export class LoginComponent {

  userName: string;
  loggedUser: string;

  // kollar värdet på userName, som jag använder i min ngIf
  constructor(private authService: AuthServiceService) {
    this.userName = authService.checkIfLoggedIn();
  }

  // kontrollerar så att användaren skrivit in minst 10 characters och minst en siffra. om search-metoden inte hittar en siffra får den ett värde på -1. Om kraven uppfylls skickas loggedUser till authService.
  checkUser(): void {
    let searchForNumber = this.loggedUser.search(/\d+/);
    if (this.loggedUser.length >= 10 && searchForNumber >= 0) {
      this.authService.login(this.loggedUser);
    } else {
      alert('Your login can\'t be under 10 characters long and must contatin at least one number!');
    }
  }

  // kallar på logout-metoden i authService.
  logout(): void {
    this.authService.logout();
  }

}
