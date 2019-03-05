import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
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
  @Output() postChange = new EventEmitter<InstagramPostModel>();

  ngOnInit() {
    this.log.info(`${this._componentName} Displaying post -- ${this.post.id_code}`);
  }

  public resetPost(){
    this.postChange.emit(null);
  }

}
