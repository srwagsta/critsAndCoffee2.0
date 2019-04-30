import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexBoardComponent } from './hex-board.component';

describe('HexBoardComponent', () => {
  let component: HexBoardComponent;
  let fixture: ComponentFixture<HexBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
