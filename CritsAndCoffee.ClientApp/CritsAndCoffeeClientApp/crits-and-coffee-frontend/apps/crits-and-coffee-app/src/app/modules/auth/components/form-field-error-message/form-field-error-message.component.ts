import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormValidationService } from '../../services/form-validation.service';

@Component({
  selector: 'CritsAndCoffee-form-field-error-message',
  templateUrl: './form-field-error-message.component.html',
  styleUrls: ['../auth-forms.scss']
})
export class FormFieldErrorMessageComponent implements OnInit, OnChanges{
  errorMessage: string;
  @Input() control: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.errorMessage = this.getErrorMessage();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.errorMessage = this.getErrorMessage();
  }

  getErrorMessage() {
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return FormValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }
}
