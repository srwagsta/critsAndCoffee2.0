import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritsHeroComponent } from './crits-hero.component';

describe('CritsHeroComponent', () => {
  let component: CritsHeroComponent;
  let fixture: ComponentFixture<CritsHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritsHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
