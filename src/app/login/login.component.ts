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

  checkUser() {
    this.authService.login(this.loggedUser);

  }

  logout() {
    this.authService.logout();
  }

}
