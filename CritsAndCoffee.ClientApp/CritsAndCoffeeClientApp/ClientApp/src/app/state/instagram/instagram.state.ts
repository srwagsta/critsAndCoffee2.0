import {State, Action, StateContext, NgxsAfterBootstrap} from '@ngxs/store';
import {AddInstagramPost} from './instagram.actions';
import {LoggingService} from "../../services/logging.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { tap } from "rxjs/operators";
import {InstagramPostModel} from "../../models/instagram-post.model";

export interface InstagramPostModel {
  id: string | null;
  image_thumbnail_url: string | null;
  image_low_resolution_url: string | null;
  image_standard_resolution_url: string | null;
  created_time: string | null;
  likes: string | null;
  tags: string | null;
  link: string | null;
  caption: string | null
  location_name: string | null;
  location: any;
}


@State<InstagramPostModel[]>({
  name: 'instagramPostList',
  defaults: []
})
export class InstagramPostListState implements NgxsAfterBootstrap {

  private _instagramUrl: string = 'api/v1/instagram';

  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private log: LoggingService, private http: HttpClient) {
  }

  ngxsAfterBootstrap(ctx: StateContext<InstagramPostModel[]>) {
    this.http.get<InstagramPostModel>(`${this._instagramUrl}/posts`, this.httpOptions)
      .pipe(
        tap(post => ctx.dispatch(new AddInstagramPost(post)),
            error => this.log.error(`Instagram state: ${error}`))
      );
  }

  @Action(AddInstagramPost)
  addPost(ctx: StateContext<InstagramPostModel[]>, action: AddInstagramPost) {
    const state = ctx.getState();
    ctx.patchState([...state, action.payloadPost]);
  }

}

