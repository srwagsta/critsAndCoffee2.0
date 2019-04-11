import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { InstagramPostListState } from 'src/app/state/instagram/instagram.state';
import { Observable } from 'rxjs';
import { InstagramPostModel } from 'src/app/models/instagram-post.model';

@Component({
  selector: 'crits-hero',
  templateUrl: './crits-hero.component.html',
  styleUrls: ['./crits-hero.component.scss']
})
export class CritsHeroComponent implements OnInit {

  @Select(InstagramPostListState.recentTenPosts) recentPosts$: Observable<InstagramPostModel[]>;

  constructor() { }

  ngOnInit() {
  }

}
