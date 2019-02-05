import { User } from 'src/app/users/models/user.model';

export interface UserState {
  loading: boolean;
  loaded: boolean;
  users: User[];
  user?: User;
}

export const initialState: UserState = {
  loaded: false,
  loading: false,
  users: []
};
