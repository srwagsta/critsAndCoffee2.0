import { State, Action, Selector, StateContext } from '@ngxs/store';
import {Login, Logout, PasswordChange, PasswordReset, Register} from './auth.actions';
import { AuthService } from '../../services/auth.service'
import { AuthUserModel } from "../../models/auth-user.model";
import { tap } from 'rxjs/operators';

export class AuthStateModel {
  access_token: string|null;
  refresh_token: string|null;
  user: AuthUserModel|null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    access_token: null,
    refresh_token: null,
    user: null
  }
})
export class AuthState {

  @Selector()
  static access_token(state: AuthStateModel) { return state.access_token; }

   @Selector()
  static user(state: AuthStateModel) { return state.user; }

  constructor(private authService: AuthService) {}

  @Action(Login)
  login({ patchState }: StateContext<AuthStateModel>, { payload }: Login) {
    patchState({access_token: payload.access_token, refresh_token: payload.refresh_token})
  }

  @Action(Logout)
  logout({ setState }: StateContext<AuthStateModel>) {
    return this.authService.logout().pipe(tap(() => {
      setState({access_token: null, refresh_token:null ,user: null});
    }));
  }

  @Action(PasswordReset)
  passwordReset({ patchState }: StateContext<AuthStateModel>, action: PasswordReset) {
    return this.authService.passwordReset(action.payload.email).pipe(tap(() => {
      patchState({access_token: null});
    }));
  }

  @Action(PasswordChange)
  passwordChange({ setState }: StateContext<AuthStateModel>, action: PasswordChange) {
    return this.authService.passwordChange(action.payload).pipe(tap(() => {
      setState({access_token: null, refresh_token:null, user: null});
    }));
  }

  @Action(Register)
  register({ setState }: StateContext<AuthStateModel>, action: Register) {
    return this.authService.basicRegister(action.payload).pipe(tap(() => {
      setState({access_token: null, refresh_token:null, user: null});
    }));
    // TODO: This need to be set based on the expected response
  }

}
