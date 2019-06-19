import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CritsRegisterComponent } from './crits-register.component';

describe('CritsRegisterComponent', () => {
  let component: CritsRegisterComponent;
  let fixture: ComponentFixture<CritsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CritsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CritsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
