import {InstagramPostModel} from "./instagram.state";

export class AddInstagramPost {
  static readonly type = '[Instagram] Add post';
  constructor(public payloadPost: InstagramPostModel) { }
}
