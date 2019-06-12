import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public expansionStep: number = -1;

  constructor() { }

  ngOnInit() {
  }

  public setExpansionStep(newStep: number){
    this.expansionStep = newStep;
  }

  public nextStep() {
    this.expansionStep++;
  }

  public prevStep() {
    this.expansionStep--;
  }

}
