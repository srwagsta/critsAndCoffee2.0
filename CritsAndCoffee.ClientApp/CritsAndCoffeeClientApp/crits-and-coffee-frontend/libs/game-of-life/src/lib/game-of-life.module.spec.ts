import { async, TestBed } from '@angular/core/testing';
import { GameOfLifeModule } from './game-of-life.module';

describe('GameOfLifeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GameOfLifeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GameOfLifeModule).toBeDefined();
  });
});
