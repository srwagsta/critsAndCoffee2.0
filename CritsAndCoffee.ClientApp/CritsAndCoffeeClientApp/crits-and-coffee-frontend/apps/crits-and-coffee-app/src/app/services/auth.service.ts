import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthUserModel} from "../models/auth-user.model";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _serviceName:string = 'Instagram Auth Service: ';
  private _authUrl:string = 'api/v1/auth';

  constructor(private _http: HttpClient) { }

  public login(credentials: {username: string, password: string, email?: string}): Observable<{token: string, user:AuthUserModel}> {
    return this._http.post<{token: string, user: AuthUserModel}>(`${this._authUrl}/login/`, credentials)
      .pipe(
        tap(data => console.log(`Login success for => ${data.user.username}`),
            error =>  catchError(this.handleError(error, [])))
      );
  }

  public logout(): Observable<{detail: string}>{
    return this._http.post<{detail: string}>(`${this._authUrl}/logout/`, httpOptions)
      .pipe(
        tap(data => console.log(`Entry content: ${data}`),
            error =>  catchError(this.handleError(error, [])))
      );
    // TODO: On the backend a blacklist needs to be setup to understand an invalid token
  }

  public passwordReset(email: string): Observable<string> {
    return this._http.post<string>(`${this._authUrl}/password/reset/`, email)
      .pipe(
        tap(data => console.log(`Entry content: ${data}`),
            error =>  catchError(this.handleError(error, [])))
      );
  }

  public passwordChange(credentials: {old_password: string, new_password1: string, new_password2: string}): Observable<string> {
    return this._http.post<string>(`${this._authUrl}/password/change/`, credentials)
      .pipe(
        tap(data => console.log(`Entry content: ${data}`),
            error =>  catchError(this.handleError(error, [])))
      );
  }

  public basicRegister(credentials: {username: string, password1: string, password2: string, email: string}): Observable<string> {
    return this._http.post<string>(`${this._authUrl}/registration/`, credentials)
      .pipe(
        tap(data => console.log(`Entry content: ${data}`),
            error =>  catchError(this.handleError(error, [])))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      throw new Error(`${this._serviceName} ${error} \n 
          ${this._serviceName} ${operation} failed: ${error.message}`);
    };
  }

}
