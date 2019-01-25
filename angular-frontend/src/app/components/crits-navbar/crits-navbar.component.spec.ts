import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritsNavbarComponent } from './crits-navbar.component';

describe('CritsNavbarComponent', () => {
  let component: CritsNavbarComponent;
  let fixture: ComponentFixture<CritsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
