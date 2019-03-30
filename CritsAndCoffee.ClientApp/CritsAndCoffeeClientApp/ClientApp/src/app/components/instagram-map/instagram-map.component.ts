import {Component, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {InstagramMappingService} from "../../services/instagram-mapping.service";
import {LoggingService} from "../../services/logging.service";
import {InstagramPostModel} from "../../models/instagram-post.model";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {InstagramPostDetailComponent} from "./instagram-post-detail/instagram-post-detail.component";
import {InstagramPostListState} from "../../state/instagram/instagram.state";
import {Select} from "@ngxs/store";


@Component({
  selector: 'app-instagram-map',
  templateUrl: './instagram-map.component.html',
  styleUrls: ['./instagram-map.component.scss'],

})
export class InstagramMapComponent implements OnInit, OnDestroy {

  constructor(private instagramService: InstagramMappingService,
              private log: LoggingService,
              private modalService: NgbModal) {}

  //<editor-fold desc="Class Fields">
  private _componentName: string = 'Instagram Map Component: ';
  @Select(InstagramPostListState.posts) postList$: Observable<InstagramPostModel[]>;
  @Select(InstagramPostListState.clientPosition) clientCoordinate$: Observable<Position>;

  private _subscriptions: Subscription[] = [];

  // public clientCoordinate: any = {lat: 43.067303, lng: -87.876882}; // ngxs can also hold this information
  //</editor-fold>

  //<editor-fold desc="ng Events">
  ngOnInit() {
    // this._subscriptions.push(this.instagramService.getClientPosition().subscribe(
    //   (pos: Position) => {
    //     this.clientCoordinate = {
    //       lat: +(pos.coords.latitude),
    //       lng: +(pos.coords.longitude)
    //     };
    //   }));

    // this.getPosts();
    // this.log.info(`${this._componentName} Started, focus location (${this.clientCoordinate.lat}, ${this.clientCoordinate.lng})`);
  }

  ngOnDestroy() {
    this._subscriptions.forEach(s => s.unsubscribe());
  }
  //</editor-fold>

  public onMarkerClick(post: InstagramPostModel): void{
    const modalRef = this.modalService.open(InstagramPostDetailComponent);
    modalRef.componentInstance.post = post;
  }

}
