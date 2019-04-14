import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material";
import { Store } from '@ngxs/store';
import { RouterState } from '@ngxs/router-plugin';

export class NavLinks{
  public static links:{label: string, link:string, icon:string}[] = [
    {label: 'Home',link: 'home', icon: 'home'},
    {label: 'Instagram Map',link: 'instagram-map', icon: 'map'},
    {label: 'About The Project',link: 'about', icon: 'help_outline'}
  ];
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../ui.module.scss']
})
export class HeaderComponent implements OnInit {
  API_route: string = `${window.location.origin}/api/docs`;
  links = NavLinks.links;

  @ViewChild('sideNav') sidenav: MatSidenav;
  @ViewChild('menuIcon', {read: ElementRef}) menuIcon: ElementRef;

  constructor(private _store: Store) {
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

  public getNavStyling():string{
    return this._store.selectSnapshot(RouterState.url) === '/home' ? 'crits-toolbar-home' : 'crits-toolbar';
  }
}
