import { Injectable} from '@angular/core';
import { Observable, of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {InstagramPostModel} from "../models/instagram-post.model";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class InstagramMappingService {

  constructor(private _http: HttpClient) { }

  private _serviceName:string = 'Instagram Mapping Service: ';
  private _instagramUrl:string = 'api/v1/instagram';


  public getClientPosition(): Observable<Position> {
    return Observable.create(
      (observer) => {
      navigator.geolocation.watchPosition((pos: Position) => { observer.next(pos); },
      () => {throw new Error(`${this._serviceName} Position not available.`) },
      { enableHighAccuracy: true });
    });
  }


  public getPosts(): Observable<InstagramPostModel[]> {
    return this._http.get<InstagramPostModel[]>(`${this._instagramUrl}/posts`, httpOptions)
      .pipe(
        tap(data => console.log(`Entry content: ${data}`),
            error =>  catchError(this.handleError(error, [])))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      throw new Error(`${this._serviceName} ${error} \n 
          ${this._serviceName} ${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}
