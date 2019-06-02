import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritsInlineLoginComponent } from './crits-inline-login.component';

describe('CritsInlineLoginComponent', () => {
  let component: CritsInlineLoginComponent;
  let fixture: ComponentFixture<CritsInlineLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritsInlineLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritsInlineLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
