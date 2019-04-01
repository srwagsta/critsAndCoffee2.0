import { Component, OnInit } from '@angular/core';
import {Store} from "@ngxs/store";
import {Login} from "../../../state/auth/auth.actions";

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _store: Store) { }

  ngOnInit() {
  }

  public onSubmit(){
    // this._store.dispatch(new Login({username: 'username', password: 'password'}))
  }
}
