import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app-store/app-state';
import { AddUser } from 'src/app/app-store/user-store/actions';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  @ViewChild('usersForm') form: NgForm;
  user: User = new User();

  constructor(private routeActive: ActivatedRoute,
    private store: Store<State>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.store.dispatch(new AddUser(this.user));
    this.form.reset();
  }
}
