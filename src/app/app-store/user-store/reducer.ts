import { initialState, UserState } from './state';
import { UserActionTypes, UserActions } from './actions';

export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.LOAD_USERS: {
      return { ...state, loading: true, loaded: false };
    }
    case UserActionTypes.LOAD_USERS_SUCCESS: {
      const users = action.payload;
      return { ...state, users, loading: false, loaded: true };
    }
    case UserActionTypes.ADD_USER: {
      return { ...state, loading: true, loaded: false };
    }
    case UserActionTypes.ADD_USER_SUCCESS: {
      const user = action.payload;
      state.users.push(user);
      return { ...state, loading: false, loaded: true };
    }
    case UserActionTypes.LOAD_USER: {
      return { ...state, loading: true, loaded: false };
    }
    case UserActionTypes.LOAD_USER_SUCCESS: {
      const user = action.payload;
      return { ...state, user, loading: false, loaded: true };
    }
    case UserActionTypes.UPDATE_USER: {
      return { ...state, loading: true, loaded: false };
    }
    case UserActionTypes.UPDATE_USER_SUCCESS: {
      const user = action.payload;
      return { ...state, user, loading: false, loaded: true };
    }
    default: {
      return state;
    }
  }
}
