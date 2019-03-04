import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {LoggingService} from "./logging.service";
import {InstagramPostModel} from "../models/instagram-post.model";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class InstagramMappingService {

  constructor(private log: LoggingService, private http: HttpClient,) { }

  private _serviceName:string = "Instagram Mapping Service: ";
  private _instagramUrl:string = 'api/v1/instagram';


  public getClientPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
      navigator.geolocation.watchPosition((pos: Position) => { observer.next(pos); }),
      () => {this.log.error(`${this._serviceName} Position not available.`) },
      { enableHighAccuracy: true };
    });
  }


  public getPosts(){
    return this.http.get<InstagramPostModel[]>(`${this._instagramUrl}/posts`, httpOptions)
      .pipe(
        tap(data => this.log.info(`Entry content: ${data}`),
            error =>  catchError(this.handleError(error, []))));
    // TODO: I need to better understand how this pipe is going to map to my model if it can?
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log.error(`${this._serviceName} ${error}`);
      this.log.error(`${this._serviceName} ${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
