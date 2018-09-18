import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  regUsers: Object;

  constructor(private users: UsersService) { }

  ngOnInit() {
    this.users.getUsers().subscribe(
      data => this.regUsers = data
    )
  }

}
