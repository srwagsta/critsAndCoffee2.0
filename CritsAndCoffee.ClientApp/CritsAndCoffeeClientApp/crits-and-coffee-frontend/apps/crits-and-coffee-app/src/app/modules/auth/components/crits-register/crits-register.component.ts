import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Navigate } from '@ngxs/router-plugin';

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

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  public onSubmit() {
    if (this.registrationForm.dirty && this.registrationForm.valid) { return true}
    return false
    //   this._authService.login(this.loginForm.value.username, this.loginForm.value.password)
    //     .subscribe(()=> this._store.dispatch(new Navigate(['/'])),
    //       (error)=> this.loginForm.setErrors({"BackendError": error}));
    // }
  }


}
