import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class LoggingService {

  constructor(private http: HttpClient,) {
  }

  private _loggingUrl: string = 'api/v1/logger';

  // No need to return anything, not worried about logging failures.
  public info(message: string): void {
    console.log(message);
    this.http.post(`${this._loggingUrl}/info`, message).subscribe();
  }

  public warning(message: string): void {
    console.warn(message);
    this.http.post(`${this._loggingUrl}/warning`, message).subscribe();
  }

  public error(message: string): void {
    console.error(message);
    this.http.post(`${this._loggingUrl}/error`, message).subscribe();
  }

  public critical(message: string): void {
    console.trace(message);
    this.http.post(`${this._loggingUrl}/critical`, message).subscribe();
  }

  public debug(message: string): void {
    console.debug(message);
    this.http.post(`${this._loggingUrl}/debug`, message).subscribe();

  }
}
