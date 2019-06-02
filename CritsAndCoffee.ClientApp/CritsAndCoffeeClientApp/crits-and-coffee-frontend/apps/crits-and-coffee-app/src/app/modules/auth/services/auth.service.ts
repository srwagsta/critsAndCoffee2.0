import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
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

  public login(username: string, password: string): {success: boolean, errors: string|null}{
    let success: boolean = false;
    let errors: string|null = null;

    this._http.post<{access_token: string, refresh_token: string}>(`${this._authUrl}/login`,
      {'username': username, 'password': password})
      .pipe(
        tap(data => {
          alert(data);
          success = true;
        }),catchError(error => () => {
          this.handleError(error, []);
          success = false;
          errors = error;
        })
      ).subscribe();
    return {'success': success, 'errors': errors};
  }

  public logout(): Observable<{detail: string}>{
    return this._http.post<{detail: string}>(`${this._authUrl}/logout/`, httpOptions)
      .pipe(
        tap(data => console.log(`Entry content: ${data}`),
            error =>  catchError(this.handleError(error, [])))
      );
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
