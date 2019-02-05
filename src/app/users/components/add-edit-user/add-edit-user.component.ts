import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app-store/app-state';
import { AddUser, LoadUser, UpdateUser } from 'src/app/app-store/user-store/actions';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  @ViewChild('usersForm') form: NgForm;
  user: User = new User();
  private canAdd = true;

  constructor(private routeActive: ActivatedRoute,
    private store: Store<State>) { }

  ngOnInit() {
    this.routeActive.params.subscribe(data => {
      if (data.id) {
        this.canAdd = false;
        this.store.dispatch(new LoadUser(data.id));
        this.store.select('user').subscribe(state => {
          if (state.user) {
            this.user = state.user;
          }
        });
      }
    });
  }

  onSubmit() {
    if (this.canAdd) {
      this.store.dispatch(new AddUser(this.user));
      this.form.reset();
    } else {
      this.store.dispatch(new UpdateUser(this.user));
    }
  }
}
