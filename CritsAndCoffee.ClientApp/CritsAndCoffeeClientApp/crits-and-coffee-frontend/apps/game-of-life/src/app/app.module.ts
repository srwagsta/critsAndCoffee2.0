import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { HexBoardComponent } from './components';
import { GameRootComponent } from './game-root/game-root.component';

@NgModule({
  declarations: [GameRootComponent, HexBoardComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [GameRootComponent],
  bootstrap: [GameRootComponent]
})
export class AppModule {}

@NgModule({})
export class GameOfLifeApp {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers: []
    }
  }
}
