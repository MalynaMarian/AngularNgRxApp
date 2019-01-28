import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  users$: Observable<User[]>;
  user$: Observable<User>;
  typeOfButton: boolean;
  // user: User = new User;

  constructor(private route: ActivatedRoute,
    private userService: UserService) {
    this.users$ = userService.entities$;
  }

  ngOnInit() {
    this.route.params.subscribe(data => {
      if (data.id) {
        this.typeOfButton = true;
        this.user$ = this.userService.getByKey(data.id);
      } else {

      }
    });

  }

  add(user: User) {
    this.userService.add(user);
  }

}
