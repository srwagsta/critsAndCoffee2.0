import { AuthUserModel } from '../models/auth-user.model';

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public tokens: { access_token: string, refresh_token: string }, public user: AuthUserModel) {}
}

export class RefreshToken {
  static readonly type = '[Auth] Refresh';
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class PasswordReset {
  static readonly type = '[Auth] Password Reset';
  constructor(public payload: { email: string }) {}
}

export class PasswordChange {
  static readonly type = '[Auth] Password Change';
  constructor(public payload: {old_password: string, new_password1: string, new_password2: string}) {}
}

