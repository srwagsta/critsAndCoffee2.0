import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoggingService} from "./logging.service";
import {InstagramLocation} from "../models/instagram-location";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InstagramMappingService {

  constructor(private log: LoggingService, private http: HttpClient,) { }

  private _instagramUrl:string = 'api/v1/instagram';

  getPosts(): Observable<InstagramLocation[]> {
    return this.http.get<InstagramLocation[]>(`${this._instagramUrl}/posts`)
      .pipe(
        tap(_ => this.log.info('Gathered instgram posts')),
        catchError(this.handleError('getPosts', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
