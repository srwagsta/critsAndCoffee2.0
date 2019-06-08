import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineAccountComponent } from './inline-account.component';

describe('InlineAccountComponent', () => {
  let component: InlineAccountComponent;
  let fixture: ComponentFixture<InlineAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
