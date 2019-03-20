import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../ui.module.scss']
})
export class HeaderComponent implements OnInit {
  API_route: string = `${window.location.origin}/api/docs`;

  @ViewChild('sideNav') sidenav: MatSidenav;
  @ViewChild('menuIcon', {read: ElementRef}) menuIcon: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.menuIcon.nativeElement.classList.toggle('change');
    this.sidenav.toggle();
  }

  toggleMenuIcon() {
    this.menuIcon.nativeElement.classList.toggle('change');
  }

}
