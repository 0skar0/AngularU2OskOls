import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})

// tar emot inputs från users-list 
export class UserListItemComponent implements OnInit {

  @Input() users: string[];
  @Input() textColor: boolean;
  constructor() { }

  ngOnInit() {
  }


}
