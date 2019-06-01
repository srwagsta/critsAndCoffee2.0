import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritsLoginComponent } from './crits-login.component';

describe('CritsLoginComponent', () => {
  let component: CritsLoginComponent;
  let fixture: ComponentFixture<CritsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
