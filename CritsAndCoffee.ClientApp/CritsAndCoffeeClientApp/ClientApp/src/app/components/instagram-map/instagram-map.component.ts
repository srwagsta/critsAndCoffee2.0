import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {LoggingService} from "../../services/logging.service";
import {InstagramPostModel} from "../../models/instagram-post.model";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {InstagramPostDetailComponent} from "./instagram-post-detail/instagram-post-detail.component";
import {InstagramPostListState} from "../../state/instagram/instagram.state";
import {Select, Store} from "@ngxs/store";

@Component({
  selector: 'app-instagram-map',
  templateUrl: './instagram-map.component.html',
  styleUrls: ['./instagram-map.component.scss'],

})
export class InstagramMapComponent implements OnInit{

  constructor(private log: LoggingService,
              private modalService: NgbModal,
              private _store: Store) {}

  //<editor-fold desc="Class Fields">
  private _componentName: string = 'Instagram Map Component: ';

  @Select(InstagramPostListState.posts) postList$: Observable<InstagramPostModel[]>;

  clientCoordinate = this._store.selectSnapshot(InstagramPostListState.clientPosition);
  //</editor-fold>

  //<editor-fold desc="ng Events">
  ngOnInit() {
    this.log.info(`${this._componentName}: Focus set (${this.clientCoordinate.latitude}, ${this.clientCoordinate.longitude})`);
  }

  //</editor-fold>

  public onMarkerClick(post: InstagramPostModel): void{
    const modalRef = this.modalService.open(InstagramPostDetailComponent);
    modalRef.componentInstance.post = post;
  }

}
