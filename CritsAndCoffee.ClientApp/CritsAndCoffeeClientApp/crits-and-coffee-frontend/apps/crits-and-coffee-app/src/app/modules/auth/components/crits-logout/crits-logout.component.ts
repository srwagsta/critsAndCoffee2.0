import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from '../../state/auth/auth.actions';

@Component({
  selector: 'CritsAndCoffee-crits-logout',
  templateUrl: './crits-logout.component.html',
  styleUrls: ['../auth-forms.scss']
})
export class CritsLogoutComponent implements OnInit {

  constructor(private _store: Store) { }

  ngOnInit() {
  }

  public onClick(){
    this._store.dispatch(new Logout());
  }
}
