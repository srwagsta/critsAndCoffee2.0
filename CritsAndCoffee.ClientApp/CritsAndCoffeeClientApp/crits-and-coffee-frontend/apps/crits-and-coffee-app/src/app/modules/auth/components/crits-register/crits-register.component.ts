import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Navigate } from '@ngxs/router-plugin';
import { AuthService } from '../../services/auth.service';
import { Store } from '@ngxs/store';

@Component({
  selector: 'CritsAndCoffee-crits-register',
  templateUrl: './crits-register.component.html',
  styleUrls: ['../auth-forms.scss']
})
export class CritsRegisterComponent implements OnInit {

  public registrationForm = this._formBuilder.group({
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', Validators.required],
    password: ['', [
      Validators.required,
      // Validators.minLength(11),
      // FormValidationService.passwordValidator
    ]],
    password_confirm: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder,
              private _authService: AuthService,
              private _store: Store) { }

  ngOnInit() {
  }

  public onSubmit() {
    if (this.registrationForm.dirty && this.registrationForm.valid) {
      this._authService.register(this.registrationForm.value.first_name,
        this.registrationForm.value.last_name, this.registrationForm.value.username,
        this.registrationForm.value.email, this.registrationForm.value.password)
        .subscribe(()=> this._store.dispatch(new Navigate(['/'])),
          (error)=> this.registrationForm.setErrors({"BackendError": error}));
    }
  }


}
