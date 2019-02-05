import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadUsers } from 'src/app/app-store/user-store/actions';
import { Observable } from 'rxjs';
import { State } from 'src/app/app-store/app-state';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private store: Store<State>) { }


  ngOnInit() {
    this.store.dispatch(new LoadUsers());
    this.store.select('user').subscribe(state => {
      this.users = state.users;
    });
  }

}
