import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'CritsAndCoffee-button-zoom',
  templateUrl: './button-zoom.component.html',
  styleUrls: ['./button-zoom.component.scss']
})
export class ButtonZoomComponent implements OnInit {

  @Input() initialZoom = 20;
  @Output() changeZoom = new EventEmitter<number>();

  private readonly MAX_ZOOM: number = 50;
  private readonly MIN_ZOOM = 3;

  constructor() { }

  ngOnInit() {
  }

  public zoomIn(){
    if ( this.initialZoom < this.MAX_ZOOM) {
      this.changeZoom.emit(++this.initialZoom);
    }
  }

  public zoomOut(){
    if(this.initialZoom > this.MIN_ZOOM) {
      this.changeZoom.emit(--this.initialZoom);
    }
  }
}
