import {Component, Input, OnInit} from '@angular/core';
import {InstagramPostModel} from "../../../models/instagram-post.model";
import {LoggingService} from "../../../services/logging.service";

@Component({
  selector: 'app-instagram-post-detail',
  templateUrl: './instagram-post-detail.component.html',
  styleUrls: ['./instagram-post-detail.component.scss']
})
export class InstagramPostDetailComponent implements OnInit {

  constructor(private log: LoggingService) { }

  private _componentName: string = "Instagram Post Detail: ";
  @Input() post:InstagramPostModel;

  ngOnInit() {
    this.log.info(`${this._componentName} Displaying post -- ${this.post.idCode}`);
  }

}
