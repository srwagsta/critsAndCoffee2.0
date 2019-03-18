import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramMapComponent } from './instagram-map.component';

describe('InstagramMapComponent', () => {
  let component: InstagramMapComponent;
  let fixture: ComponentFixture<InstagramMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
