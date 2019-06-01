import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritsRequestPasswordComponent } from './crits-request-password.component';

describe('CritsRequestPasswordComponent', () => {
  let component: CritsRequestPasswordComponent;
  let fixture: ComponentFixture<CritsRequestPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritsRequestPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritsRequestPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
