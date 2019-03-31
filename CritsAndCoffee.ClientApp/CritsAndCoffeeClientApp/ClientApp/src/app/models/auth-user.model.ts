export interface AuthUserModel {
  pk: number;
  username: string;
  email: string | null;
  first_name: string | null;
  last_name: string | null;
}
