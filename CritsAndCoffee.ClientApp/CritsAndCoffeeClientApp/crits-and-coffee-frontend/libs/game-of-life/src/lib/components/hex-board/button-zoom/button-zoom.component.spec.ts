import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonZoomComponent } from './button-zoom.component';

describe('ButtonZoomComponent', () => {
  let component: ButtonZoomComponent;
  let fixture: ComponentFixture<ButtonZoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonZoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonZoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
