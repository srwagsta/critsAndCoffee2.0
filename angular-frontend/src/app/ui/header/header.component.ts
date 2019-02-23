import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  API_route: string = `${window.location.origin}/api-docs`;

  constructor() { }

  ngOnInit() {
  }

}
