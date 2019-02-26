import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  // TODO: Add the time and application data to the logging

  info(message:string):void{
    console.info(message);
  }

  error(message:string):void{
    console.trace();
    console.error(message);
  }

}
