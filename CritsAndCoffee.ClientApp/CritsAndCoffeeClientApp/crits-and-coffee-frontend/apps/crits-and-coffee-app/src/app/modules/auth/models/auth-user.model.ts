export interface AuthUserModel {
  username: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
  last_login: Date| null;
  scopes: string[]| null;
}
