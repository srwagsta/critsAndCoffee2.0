import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'CritsAndCoffee-crits-register',
  templateUrl: './crits-register.component.html',
  styleUrls: ['../auth-forms.scss']
})
export class CritsRegisterComponent implements OnInit {

  public loginForm = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', [
      Validators.required,
      // Validators.minLength(11),
      // FormValidationService.passwordValidator
    ]]
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
