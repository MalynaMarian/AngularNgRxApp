import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private userService: UserService) {
    this.users$ = userService.entities$;
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAll();
  }

  delete(user: User) {
    this.userService.delete(user);
  }

}
