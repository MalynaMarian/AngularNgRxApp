import { Component, OnInit } from '@angular/core';
import { UserStoreState } from 'src/app/app-store/user-store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = [1, 2, 3, 4, 5];

  constructor(private store: Store<UserStoreState.UserState>) { }


  ngOnInit() {
    this.store.select('users').subscribe(state => console.log(state));
  }

}
