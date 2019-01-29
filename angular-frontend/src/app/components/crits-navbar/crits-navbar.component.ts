import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crits-navbar',
  templateUrl: './crits-navbar.component.html',
  styleUrls: ['./crits-navbar.component.scss']
})
export class CritsNavbarComponent implements OnInit {

  brandImageURL:string = "/static/angular_resources/images/components/crits-navbar/brand.png";
  constructor() { }

  ngOnInit() {
  }

}
