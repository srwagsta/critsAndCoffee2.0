import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { InstagramPostListState } from '../../../state/instagram/instagram.state';
import { Observable } from 'rxjs';
import { InstagramPostModel } from '../../../models/instagram-post.model';

@Component({
  selector: 'crits-hero',
  templateUrl: './crits-hero.component.html',
  styleUrls: ['./crits-hero.component.scss']
})
export class CritsHeroComponent implements OnInit {

  @Select(InstagramPostListState.recentPosts) recentPosts$: Observable<InstagramPostModel[]>;
  constructor() { }

  ngOnInit() {
  }

}
