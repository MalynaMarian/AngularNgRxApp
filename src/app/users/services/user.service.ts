import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/app-store/app-state';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private store: Store<State>) { }

  private request(
    method: string,
    endpoint: string,
    body?: any
  ): Observable<any> {
    const url = `${this.URL}/${endpoint}`;
    return this.http.request(method, url, {
      body
    });
  }

  getUsers(): Observable<User[]> {
    return this.request('GET', 'user');
  }

  getUser(id: string): Observable<User> {
    let user: any;
    this.store.select('user').subscribe(state => {
      if (state.users.length) {
        [user] = state.users.filter(el => el.id === +id);
        user = of(user);
      } else {
        user = this.request('GET', `user/${id}`);
      }
    });
    return user;
  }

  createUser(user: User) {
    return this.request('POST', `user`, user);
  }

  putUser(user: User) {
    return this.request('PUT', `user/${user.id}`, user);
  }

  deleteUser(userId): Observable<User> {
    return this.request('DELETE', `user/${userId}`);
  }
}
