import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  loggedUser: string;

  constructor(private authService: AuthServiceService) {
    this.userName = this.authService.checkIfLoggedIn();
  }

  ngOnInit() {

  }

  // kontrollerar så att användaren skrivit in minst 10 characters och minst en siffra. om search-metoden inte hittar en siffra får den ett värde på -1. Om kraven uppfylls skickas loggedUser till authService.
  checkUser() {
    let searchForNumber = this.loggedUser.search(/\d+/);
    if(this.loggedUser.length >= 10 && searchForNumber >= 0) {
      this.authService.login(this.loggedUser);
    } else {
      alert('Your login can\'t be under 10 characters long and must contatin at least one number!');
    }


  }

  logout() {
    this.authService.logout();
  }

}
