import { initialState, UserState } from './state';
import { UserActionTypes, UserActions } from './actions';

export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.LOAD_USERS:
      return { ...state, loading: true, loaded: false };
    case UserActionTypes.LOAD_USERS_SUCCESS:
      const users = action.payload;
      return { ...state, users, loading: false, loaded: true };
    case UserActionTypes.LOAD_USER:
      return { ...state, loading: true, loaded: false };

    default: {
      return state;
    }
  }
}
