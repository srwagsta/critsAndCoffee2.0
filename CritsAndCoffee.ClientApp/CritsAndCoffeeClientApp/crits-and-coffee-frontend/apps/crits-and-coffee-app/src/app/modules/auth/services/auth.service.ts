import { Injectable, NgZone } from '@angular/core';
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import {AuthUserModel} from "../models/auth-user.model";
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngxs/store';
import { Login } from '../state/auth/auth.actions';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Navigate } from '@ngxs/router-plugin';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _serviceName:string = 'Instagram Auth Service: ';
  private _authUrl:string = 'api/v1/auth';
  private _jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private _http: HttpClient,
              private _store: Store,
              private _snackbar: MatSnackBar,
              private _zone: NgZone) { }

  public basicRegister(credentials: {username: string, password1: string, password2: string, email: string}): Observable<string> {
    return this._http.post<string>(`${this._authUrl}/registration/`, credentials)
      .pipe(
        tap(data => console.log(`Entry content: ${data}`),
          error =>  catchError(this.handleError(error, [])))
      );
  }

  public login(username: string, password: string){
    return this._http.post(`${this._authUrl}/login`,
      {'username': username, 'password': password}, {observe: 'response'})
      .pipe(
        tap((response:any) => {
          this._store.dispatch(new Login(response.body, this._jwtHelper.decodeToken(response.body.access_token).user_claims));
        }),catchError(error =>
            new Observable<HttpEvent<any>>(observer => {
              this._zone.run(() => this._snackbar.open("Invalid Login", 'Close',
                {panelClass: 'crits-error-snackbar'}));
              observer.error(error);
              observer.complete();
            }))
      );
  }

  public logout(): Observable<{detail: string}>{
    return this._http.delete<{detail: string}>(`${this._authUrl}/logout`, httpOptions)
      .pipe(
        tap(() => this._store.dispatch(new Navigate(['/']))),
            catchError(error =>  this.handleError(error, [])));
  }



  public passwordReset(email: string): Observable<string> {
    return this._http.post<string>(`${this._authUrl}/password/reset/`, email)
      .pipe(
        tap(data => {
          alert(`RESET PASSWORD${data}`);
        }),
            catchError(error => this.handleError(error, [])));
  }

  public passwordChange(credentials: {old_password: string, new_password1: string, new_password2: string}): Observable<string> {
    return this._http.post<string>(`${this._authUrl}/password/change/`, credentials)
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
