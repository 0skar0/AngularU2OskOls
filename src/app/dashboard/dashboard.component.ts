import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

//Sparar en egenskap som en array med alla users som skickas in
export class DashboardComponent implements OnInit {
  userList: string[] = ["John Deere"];
  loggedUser: string;


  constructor(private authService: AuthServiceService) {
    this.loggedUser = authService.checkIfLoggedIn();


  }

  ngOnInit() {
  }
  //skickar in en user från input in i userList
  onAddUser(user:string) {
    this.userList.push(user);
  }

  //tar bort den sista usern i userList
  onRemoveUser() {
    this.userList.pop();
  }

}
