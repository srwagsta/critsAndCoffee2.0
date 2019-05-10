import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GameRootComponent } from './game-root/game-root.component';

import { HexBoardComponent } from './components';

@NgModule({
  declarations: [GameRootComponent, HexBoardComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [GameRootComponent]
})
export class GameOfLifeModule {}
