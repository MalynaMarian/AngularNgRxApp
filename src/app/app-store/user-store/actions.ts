import { Action } from '@ngrx/store';
import { User } from 'src/app/users/models/user.model';

export enum UserActionTypes {
  LOAD_USERS = '[User] Load Users',
  LOAD_USERS_SUCCESS = '[User] Load Users Success',

  ADD_USER = '[User] Add User',
  ADD_USER_SUCCESS = '[User] Add User Success',

  UPDATE_USER = '[User] Update User',
  UPDATE_USER_SUCCESS = '[User] Update User Success',

  DELETE_USER = '[User] Delete User',
  DELETE_USER_SUCCESS = '[User] Delete User Success',

  LOAD_USER = '[User] Load User',
  LOAD_USER_SUCCESS = '[User] Load User Success',
}

export class LoadUsers implements Action {
  readonly type = UserActionTypes.LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = UserActionTypes.LOAD_USERS_SUCCESS;

  constructor(public payload: User[]) { }
}

export class AddUser implements Action {
  readonly type = UserActionTypes.ADD_USER;

  constructor(public payload: User) { }
}

export class AddUserSuccess implements Action {
  readonly type = UserActionTypes.ADD_USER_SUCCESS;

  constructor(public payload: User) { }
}
export class UpdateUser implements Action {
  readonly type = UserActionTypes.UPDATE_USER;

  constructor(public payload: User) { }
}

export class DeleteUser implements Action {
  readonly type = UserActionTypes.DELETE_USER;

  constructor(public payload: { id: string }) { }
}

export class LoadUser implements Action {
  readonly type = UserActionTypes.LOAD_USER;

  constructor(public payload: User) { }
}

export type UserActions =
  | LoadUsers
  | LoadUsersSuccess
  | AddUser
  | AddUserSuccess
  | UpdateUser
  | DeleteUser
  | LoadUser;
