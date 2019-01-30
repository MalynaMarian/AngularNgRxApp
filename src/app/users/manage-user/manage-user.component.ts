import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(private routeActive: ActivatedRoute,
    private userService: UserService,
    private router: Router) {
    this.users$ = userService.entities$;
  }

  ngOnInit() {
    this.routeActive.params.subscribe(data => {
      if (data.id) {
        this.typeOfButton = true;
        this.user$ = this.userService.getByKey(data.id);
      } else {

      }
    });

  }

  addUser(user: User) {
    this.userService.add(user);
  }

  goBack() {
    this.router.navigate(['/users']);
  }
  onSubmit() {

  }
}
