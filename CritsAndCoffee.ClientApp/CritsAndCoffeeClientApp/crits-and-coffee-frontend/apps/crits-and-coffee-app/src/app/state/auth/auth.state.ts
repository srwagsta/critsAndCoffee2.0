import { State, Action, Selector, StateContext } from '@ngxs/store';
import {Login, Logout, PasswordChange, PasswordReset, Register} from './auth.actions';
import { AuthService } from '../../services/auth.service'
import { AuthUserModel } from "../../models/auth-user.model";
import { tap } from 'rxjs/operators';

export class AuthStateModel {
  token: string|null;
  user: AuthUserModel|null;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    user: null
  }
})
export class AuthState {

  @Selector()
  static token(state: AuthStateModel) { return state.token; }

   @Selector()
  static user(state: AuthStateModel) { return state.user; }

  constructor(private authService: AuthService) {}

  @Action(Login)
  login({ setState }: StateContext<AuthStateModel>, action: Login) {
    return this.authService.login(action.payload).pipe(tap((auth_response) => {
      setState({ token: auth_response.token, user: auth_response.user });
    }));
  }

  @Action(Logout)
  logout({ setState }: StateContext<AuthStateModel>) {
    return this.authService.logout().pipe(tap(() => {
      setState({token: null, user: null});
    }));
  }

  @Action(PasswordReset)
  passwordReset({ patchState }: StateContext<AuthStateModel>, action: PasswordReset) {
    return this.authService.passwordReset(action.payload.email).pipe(tap(() => {
      patchState({token: null});
    }));
  }

  @Action(PasswordChange)
  passwordChange({ setState }: StateContext<AuthStateModel>, action: PasswordChange) {
    return this.authService.passwordChange(action.payload).pipe(tap(() => {
      setState({token: null, user: null});
    }));
  }

  @Action(Register)
  register({ setState }: StateContext<AuthStateModel>, action: Register) {
    return this.authService.basicRegister(action.payload).pipe(tap(() => {
      setState({token: null, user: null});
    }));
    // TODO: This need to be set based on the expected response
  }

}
