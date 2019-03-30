import {State, Action, Selector, StateContext, NgxsOnInit} from '@ngxs/store';
import {AddInstagramPost} from './instagram.actions';
import {LoggingService} from "../../services/logging.service";
import {InstagramMappingService} from "../../services/instagram-mapping.service"
import {tap} from "rxjs/operators";
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

export interface InstagramPostListModel {
  clientPosition: Position;
  posts: InstagramPostModel[];
}

@State<InstagramPostListModel>({
  name: 'instagramPostList',
  defaults: {
    clientPosition: {
      timestamp: Date.now(),
      coords: {
        speed: null,
        heading: null,
        altitudeAccuracy: null,
        altitude: null,
        accuracy: null,
        latitude: 43.067303,
        longitude: -87.876882
      }
    },
    posts: []
  }
})
export class InstagramPostListState implements NgxsOnInit {

  constructor(private log: LoggingService,
              private instagramService: InstagramMappingService) {
  }

  ngxsOnInit({getState, patchState}: StateContext<InstagramPostListModel>) {
    this.instagramService.getPosts().subscribe(posts => {
      patchState({posts: posts});
    });

    this.instagramService.getClientPosition().subscribe(location =>{
      patchState({clientPosition: location});
    })

  }

  @Action(AddInstagramPost)
  addPost({getState, patchState}: StateContext<InstagramPostListModel>, action: AddInstagramPost) {
    const state = getState();
    patchState({posts: [...state.posts, action.payloadPost]});
    //TODO: To truly add a post the backend service would need to be posted to?
  }

  @Selector()
  public static posts(state: InstagramPostListModel) {
    return state.posts;
  }

  @Selector()
  public static clientPosition(state: InstagramPostListModel) {
    return state.clientPosition;
  }
}

