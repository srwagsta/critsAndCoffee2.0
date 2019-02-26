import { Component, OnInit } from '@angular/core';
import {InstagramMappingService} from "../../services/instagram-mapping.service";
import {LoggingService} from "../../services/logging.service";
import {InstagramLocation} from "../../models/instagram-location";

@Component({
  selector: 'app-instagram-map',
  templateUrl: './instagram-map.component.html',
  styleUrls: ['./instagram-map.component.scss'],

})
export class InstagramMapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private instagramService: InstagramMappingService,
              private log: LoggingService) { }

  private _posts: InstagramLocation[];
  ngOnInit() {
    this.log.info('instgram component started.');
    this.getPosts();
    // TODO: Call instagram service to get map points
  }

  private getPosts():void{
    this.instagramService.getPosts()
    .subscribe(posts => this._posts = posts);
  }
  
}
