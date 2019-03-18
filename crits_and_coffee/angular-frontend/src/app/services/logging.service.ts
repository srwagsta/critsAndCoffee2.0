import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LoggingService {

  constructor() { }

  info(message:string):void{
    console.info(`${+new Date} -- ${message}`);
  }

  error(message:string):void{
    console.error(`${+new Date} -- ${message}`);
    console.trace();
  }

}
