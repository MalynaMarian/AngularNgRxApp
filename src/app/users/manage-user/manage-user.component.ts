import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss']
})
export class ManageUserComponent implements OnInit {
  @ViewChild('usersForm') form: NgForm;
  user: User = new User();
  canEdit: boolean;

  constructor(private routeActive: ActivatedRoute,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.routeActive.params.subscribe(data => {
      if (data.id) {
        this.canEdit = true;
        this.userService.getByKey(data.id).subscribe(state => this.user = state);
      }
    });
  }

  goBack() {
    this.router.navigate(['/users']);
  }

  onSubmit() {
    if (this.canEdit) {
      this.userService.update(this.user);
    } else {
      this.userService.add(this.user);
    }
    this.form.reset();
  }
}
