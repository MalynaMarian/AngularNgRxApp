import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf, EMPTY, from } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UserService } from 'src/app/users/services/user.service';
import * as fromActions from './actions';



@Injectable()
export class UserStoreEffects {
  constructor(private service: UserService, private actions$: Actions) { }

  @Effect()
  loadUsers = this.actions$
    .pipe(
      ofType<fromActions.LoadUsers>(fromActions.UserActionTypes.LOAD_USERS),
      mergeMap(() => this.service.getUsers()
        .pipe(
          map(users => new fromActions.LoadUsersSuccess(users)),
          catchError(() => EMPTY)
        )
      )
    );

  @Effect()
  addUser$ = this.actions$
    .pipe(
      ofType<fromActions.AddUser>(fromActions.UserActionTypes.ADD_USER),
      mergeMap(action => this.service.createUser(action.payload)
        .pipe(
          map(user => new fromActions.AddUserSuccess(user),
            catchError(() => EMPTY))
        )
      )
    );

  @Effect()
  loadUser$ = this.actions$
    .pipe(
      ofType<fromActions.LoadUser>(fromActions.UserActionTypes.LOAD_USER),
      mergeMap(action => this.service.getUser(action.payload)
        .pipe(
          map(user => new fromActions.LoadUserSuccess(user),
            catchError(() => EMPTY))
        )
      )
    );

  @Effect()
  updateUser$ = this.actions$
    .pipe(
      ofType<fromActions.UpdateUser>(fromActions.UserActionTypes.UPDATE_USER),
      mergeMap(action => this.service.putUser(action.payload)
        .pipe(
          map(user => new fromActions.UpdateUserSuccess(user),
            catchError(() => EMPTY))
        )
      )
    );
}
