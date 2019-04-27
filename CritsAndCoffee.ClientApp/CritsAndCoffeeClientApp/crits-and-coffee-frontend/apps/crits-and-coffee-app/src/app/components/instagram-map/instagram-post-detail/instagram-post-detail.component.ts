import {Component, Input, OnInit} from '@angular/core';
import {InstagramPostModel} from "../../../models/instagram-post.model";
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-instagram-post-detail',
  templateUrl: './instagram-post-detail.component.html',
  styleUrls: ['./instagram-post-detail.component.scss']
})
export class InstagramPostDetailComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  private _componentName: string = "Instagram Post Detail: ";
  @Input() post:InstagramPostModel;

  ngOnInit() {
    console.log(`${this._componentName} Displaying post -- ${this.post.id}`);
  }


}
