import { State, Action, StateContext } from '@ngxs/store';
import { InstagramAction } from './instagram.actions';

export interface InstagramStateModel {
  id: string | null;
  image_thumbnail_url: string | null;
  image_low_resolution_url: string | null;
  image_standard_resolution_url: string | null;
  created_time: string | null;
  likes: string | null;
  tags: string | null;
  link: string | null;
  caption: string|null
  location_name: string | null;
  location: any;
}

@State<InstagramStateModel>({
  name: 'instagram-post',
})
export class InstagramState {
  @Action(InstagramAction)
  add(ctx: StateContext<InstagramStateModel>, action: InstagramAction) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.payload ] });
  }
}
