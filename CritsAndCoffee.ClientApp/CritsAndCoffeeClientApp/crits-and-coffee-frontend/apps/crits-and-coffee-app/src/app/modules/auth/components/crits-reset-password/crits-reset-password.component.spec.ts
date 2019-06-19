import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritsResetPasswordComponent } from './crits-reset-password.component';

describe('CritsResetPasswordComponent', () => {
  let component: CritsResetPasswordComponent;
  let fixture: ComponentFixture<CritsResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritsResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritsResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
