import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram-map',
  templateUrl: './instagram-map.component.html',
  styleUrls: ['./instagram-map.component.scss']
})
export class InstagramMapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
