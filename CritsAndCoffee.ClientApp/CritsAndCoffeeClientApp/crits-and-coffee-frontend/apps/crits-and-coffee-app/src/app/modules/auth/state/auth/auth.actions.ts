export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: { access_token: string, refresh_token: string }) {}
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

export class Register {
  static readonly type = '[Auth] Register';
  constructor(public payload: { username: string, password1: string, password2: string, email: string }) {}
}
