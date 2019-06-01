import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritsLogoutComponent } from './crits-logout.component';

describe('CritsLogoutComponent', () => {
  let component: CritsLogoutComponent;
  let fixture: ComponentFixture<CritsLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritsLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritsLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
