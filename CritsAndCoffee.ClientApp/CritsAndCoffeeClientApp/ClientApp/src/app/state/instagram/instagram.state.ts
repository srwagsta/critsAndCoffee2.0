import { State, Action, StateContext } from '@ngxs/store';
import { InstagramAction } from './instagram.actions';

export class InstagramStateModel {
  public items: string[];
}

@State<InstagramStateModel>({
  name: 'instagram',
  defaults: {
    items: []
  }
})
export class InstagramState {
  @Action(InstagramAction)
  add(ctx: StateContext<InstagramStateModel>, action: InstagramAction) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.payload ] });
  }
}
