import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public login(credentials: {username: string, password: string}): Observable<string>{
    return "TODO: get a token"
  }

  public logout(token: string): Observable<Boolean>{
    // TODO: Use the token to log the user out of the django backend
  }
}
