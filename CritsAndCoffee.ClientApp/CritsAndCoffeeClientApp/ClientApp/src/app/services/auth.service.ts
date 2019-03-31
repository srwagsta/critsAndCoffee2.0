import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {LoggingService} from "./logging.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _serviceName:string = "Instagram Auth Service: ";
  private _authUrl:string = 'api/v1/auth';

  constructor(private log: LoggingService, private http: HttpClient) { }

  public login(credentials: {username: string, password: string}): Observable<{token: string}> {
    return this.http.post<{token: string}>(`${this._authUrl}/jwt`, credentials)
      .pipe(
        tap(data => this.log.info(`Entry content: ${data}`),
            error =>  catchError(this.handleError(error, [])))
      );
  }
  //
  // public login(credentials: {username: string, password: string}): Observable<string>{
  //   return Observable.of("TODO: get a token");
  // }
  //
  // public logout(token: string): Observable<Boolean>{
  //   TODO: Use the token to log the user out of the django backend
  // }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log.error(`${this._serviceName} ${error}`);
      this.log.error(`${this._serviceName} ${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
