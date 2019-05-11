import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { GameRootComponent } from './game-root/game-root.component';
import { HexBoardComponent } from './components';
import { ButtonZoomComponent } from './components/hex-board/button-zoom/button-zoom.component';

@NgModule({
  declarations: [GameRootComponent, HexBoardComponent, ButtonZoomComponent],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatIconModule],
  exports: [GameRootComponent]
})
export class GameOfLifeModule {}
