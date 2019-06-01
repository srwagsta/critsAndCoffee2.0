import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';

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
      Validators.minLength(11),
      FormValidationService.passwordValidator
    ]]
  });

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
  }

  public onSubmit() {
    alert('Submitted');
  }

}
