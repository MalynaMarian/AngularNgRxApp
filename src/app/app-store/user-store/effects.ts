import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf, EMPTY } from 'rxjs';
import { catchError, map, startWith, switchMap, mergeMap } from 'rxjs/operators';
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
}
