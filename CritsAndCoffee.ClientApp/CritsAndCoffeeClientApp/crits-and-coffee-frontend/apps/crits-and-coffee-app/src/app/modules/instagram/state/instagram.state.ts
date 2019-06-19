import {State, Action, Selector, StateContext, NgxsAfterBootstrap} from '@ngxs/store';
import {GetInstagramPosts, SetClientLocation} from './instagram.actions';
import {InstagramMappingService} from "../services/instagram-mapping.service"
import {InstagramPostModel} from "../models/instagram-post.model";


export interface InstagramPostListModel {
  clientPosition: {latitude: number, longitude: number};
  posts: InstagramPostModel[];
}

@State<InstagramPostListModel>({
  name: 'instagramPostList',
  defaults: {
    clientPosition: {
      latitude: 43.067303,
      longitude: -87.876882
    },
    posts: []
  }
})
export class InstagramPostListState implements NgxsAfterBootstrap {

  
  constructor(private _instagramService: InstagramMappingService) {
  }
  
  @Selector()
  public static posts(state: InstagramPostListModel) {
    return state.posts;
  }

  @Selector()
  public static recentPosts(state: InstagramPostListModel){
    return state.posts.slice(0,14);
  }

  @Selector()
  public static clientPosition(state: InstagramPostListModel) {
    return state.clientPosition;
  }

  ngxsAfterBootstrap(ctx: StateContext<InstagramPostListModel>) {
    ctx.dispatch(new GetInstagramPosts());
    ctx.dispatch(new SetClientLocation());
  }

  @Action(SetClientLocation)
  setLocation({patchState}: StateContext<InstagramPostListModel>) {
    this._instagramService.getClientPosition().subscribe(location => {
      patchState({clientPosition: {latitude: location.coords.latitude, longitude: location.coords.longitude}});
    });
  }

  @Action(GetInstagramPosts)
  getPosts({patchState}: StateContext<InstagramPostListModel>) {
    this._instagramService.getPosts().subscribe(posts => {
      patchState({posts: posts});
    });
  }

}

