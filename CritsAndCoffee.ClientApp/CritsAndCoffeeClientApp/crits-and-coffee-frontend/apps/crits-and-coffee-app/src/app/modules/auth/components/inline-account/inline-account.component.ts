import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FormBuilder, Validators } from '@angular/forms';
import { Navigate } from '@ngxs/router-plugin';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'CritsAndCoffee-inline-account',
  templateUrl: './inline-account.component.html',
  styleUrls: ['./inline-account.component.scss']
})
export class InlineAccountComponent implements OnInit {

  public user$ = this._store.select(state => state.auth.user);

  public loginForm = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', [
      Validators.required,
      // Validators.minLength(11),
      // FormValidationService.passwordValidator
    ]]
  });

  constructor(private _formBuilder: FormBuilder,
              private _store: Store,
              private _authService: AuthService) { }

  ngOnInit() {
  }

  public onLoginSubmit() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this._authService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(()=> this._store.dispatch(new Navigate(['/'])),
          (error)=> this.loginForm.setErrors({"BackendError": error}));
    }
  }

}
