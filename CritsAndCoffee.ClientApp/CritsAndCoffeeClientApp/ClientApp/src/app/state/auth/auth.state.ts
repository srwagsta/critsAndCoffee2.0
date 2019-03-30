import { State, Action, Selector, StateContext } from '@ngxs/store';
import { Login, Logout } from './auth.actions';
import { AuthService } from '../../services/auth.service'
import { tap } from 'rxjs/operators';

export class AuthStateModel {
  token?: string;
  username?: string;
}

@State<AuthStateModel>({
  name: 'auth'
})
export class AuthState {

  @Selector()
  static token(state: AuthStateModel) { return state.token; }

  constructor(private authService: AuthService) {}

  // @Action(Login)
  // login({ patchState }: StateContext<AuthStateModel>, { payload }: Login) {
  //   return this.authService.login(payload).pipe(tap((token:string) => {
  //     patchState({ token, username: payload.username });
  //   }))
  // }
  //
  // @Action(Logout)
  // logout({ setState, getState }: StateContext<AuthStateModel>) {
  //   const { token } = getState();
  //   return this.authService.logout(token).pipe(tap(() => {
  //     setState({});
  //   }));
  // }
}
