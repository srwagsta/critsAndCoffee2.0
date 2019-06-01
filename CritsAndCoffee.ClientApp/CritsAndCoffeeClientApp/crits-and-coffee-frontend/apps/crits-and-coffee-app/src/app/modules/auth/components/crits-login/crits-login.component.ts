import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'CritsAndCoffee-crits-login',
  templateUrl: './crits-login.component.html',
  styleUrls: ['../auth-forms.scss']
})
export class CritsLoginComponent implements OnInit {

  public loginForm = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  public onSubmit(){
    alert('Submitted');
  }

}
