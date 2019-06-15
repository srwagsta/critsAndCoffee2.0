import { Injectable, NgZone } from '@angular/core';
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { Store } from '@ngxs/store';
import { Login, Logout } from '../state/auth.actions';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _jwtHelper: JwtHelperService = new JwtHelperService();
  private _serviceName:string = 'Instagram Auth Service: ';
  private _authUrl:string = 'api/v1/auth';

  constructor(private _http: HttpClient,
              private _store: Store,
              private _snackbar: MatSnackBar,
              private _zone: NgZone) { }

  public register(fname:string, lname: string, username:string, email:string, password:string){
    return this._http.post(`${this._authUrl}/registration`,
      {'first_name': fname, 'last_name': lname, 'username': username,
        'email':email, 'password': password},
      {observe: 'response'})
      .pipe(
        tap((response:any) => {
          this._store.dispatch(new Login(response.body, this._jwtHelper.decodeToken(response.body.access_token).user_claims));
        }),catchError(error =>
          new Observable<HttpEvent<any>>(observer => {
            this._zone.run(() => this._snackbar.open("Invalid Registration", 'Close',
              {panelClass: 'crits-error-snackbar'}));
            observer.error(error);
            observer.complete();
          }))
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

  public refreshAccessToken():boolean{
    // TODO: Refresh the token. 
    return true;
  }

  public logout(): Observable<{detail: string}>{
    return this._http.delete<{detail: string}>(`${this._authUrl}/logout`, httpOptions)
      .pipe(
        tap(() => this._store.dispatch(new Logout())),
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
        tap(data => console.log(`TODO: Auth Service Password Change ${data}`),
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
