import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material';

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
              private _snackbar: MatSnackBar) {
  }

  ngOnInit() {
  }

  public onSubmit() {
    if (this.loginForm.dirty && this.loginForm.valid) {
      let successStatus: {success: boolean, errors: string} =
        this._authService.login(this.loginForm.value.username, this.loginForm.value.password);
      if ( !successStatus.success){
        this._snackbar.open(successStatus.errors, 'close', {
          duration: 2000,
        });
      }
    }
  }

}
