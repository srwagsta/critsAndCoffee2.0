import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'CritsAndCoffee-crits-login',
  templateUrl: './crits-login.component.html',
  styleUrls: ['../auth-forms.scss']
})
export class CritsLoginComponent implements OnInit {

  public loginForm = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', [
      Validators.required,
      // Validators.minLength(11),
      // FormValidationService.passwordValidator
    ]]
  });

  constructor(private _formBuilder: FormBuilder,
              private _authService: AuthService,
              private _store: Store) {
  }

  ngOnInit() {
  }

  public onSubmit() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      this._authService.login(this.loginForm.value.username, this.loginForm.value.password)
        .subscribe(()=> this._store.dispatch(new Navigate(['/'])),
          (error)=> this.loginForm.setErrors({"BackendError": error}));

    }
  }

}
