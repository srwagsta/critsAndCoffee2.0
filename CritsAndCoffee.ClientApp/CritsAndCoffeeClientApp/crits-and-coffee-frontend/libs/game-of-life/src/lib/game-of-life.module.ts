import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { GameRootComponent } from './game-root/game-root.component';
import { HexBoardComponent } from './components';
import { ButtonZoomComponent } from './components/hex-board/button-zoom/button-zoom.component';

@NgModule({
  declarations: [GameRootComponent, HexBoardComponent, ButtonZoomComponent],
  imports: [CommonModule, FlexLayoutModule, MatButtonModule, MatIconModule],
  exports: [GameRootComponent]
})
export class GameOfLifeModule {}
