import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Logout } from '../../state/auth.actions';
import { FormValidationService } from '../../services/form-validation.service';
import { GlobalUserRoles } from '../../models/auth-roles.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'CritsAndCoffee-inline-account',
  templateUrl: './inline-account.component.html',
  styleUrls: ['./inline-account.component.scss']
})
export class InlineAccountComponent implements OnInit, OnDestroy{

  private _subscriptions: Subscription = new Subscription();
  public user$ = this._store.select(state => state.auth.user);
  public userFirstName$ = this._store.select(state => state.auth.user.first_name);
  public lastLogin$ = this._store.select(state => state.auth.user.last_login);
  public isAdmin: boolean = false;

  public loginForm = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', [
      Validators.required,
      FormValidationService.passwordValidator
    ]]
  });

  constructor(private _formBuilder: FormBuilder,
              private _store: Store,
              private _authService: AuthService) { }

  ngOnInit() {
    this._subscriptions.add(
      this.user$.subscribe(user =>
        this.isAdmin = user && user.scopes.includes(GlobalUserRoles.ADMIN))
    );
  }

  ngOnDestroy(): void {
    this._subscriptions.unsubscribe();
  }

  public onLoginSubmit() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this._authService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(()=> this.loginForm.reset(),
          (error)=> this.loginForm.setErrors({"BackendError": error}));
    }
  }

  public onLogoutClick() {
    this._store.dispatch(new Logout());
  }

}
