import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramPostDetailComponent } from './instagram-post-detail.component';

describe('InstagramPostDetailComponent', () => {
  let component: InstagramPostDetailComponent;
  let fixture: ComponentFixture<InstagramPostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramPostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
