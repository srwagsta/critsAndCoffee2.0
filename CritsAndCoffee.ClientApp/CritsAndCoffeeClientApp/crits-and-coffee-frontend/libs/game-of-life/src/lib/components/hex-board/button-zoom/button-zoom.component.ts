import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'CritsAndCoffee-button-zoom',
  templateUrl: './button-zoom.component.html',
  styleUrls: ['./button-zoom.component.scss']
})
export class ButtonZoomComponent implements OnInit {

  @Input() initialZoom = 10;
  @Output() changeZoom = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  public zoomIn(){
    this.changeZoom.emit(++this.initialZoom);
  }

  public zoomOut(){
    this.changeZoom.emit(--this.initialZoom);
  }
}
