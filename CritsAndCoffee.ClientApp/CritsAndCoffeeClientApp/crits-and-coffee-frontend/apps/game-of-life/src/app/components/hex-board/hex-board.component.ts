import { Component, OnInit } from '@angular/core';

declare var PIXI: any;
declare var Honeycomb: any;

@Component({
  selector: 'hex-board',
  templateUrl: './hex-board.component.html',
  styleUrls: ['./hex-board.component.scss']
})
export class HexBoardComponent implements OnInit {
  public app: any;

  constructor(){ }

  ngOnInit(){
    this.app = new PIXI.Application({ transparent: true });
    document.getElementById("hex-board").appendChild(this.app.view);

    const graphics = new PIXI.Graphics();
    const Hex = Honeycomb.extendHex({ size: 5 });
    const Grid = Honeycomb.defineGrid(Hex);


// set a line style of 1px wide and color #999
    graphics.lineStyle(1, 0x999999);

// render 10,000 hexes
    Grid.rectangle({ width: 100, height: 100 }).forEach(hex => {
      const point = hex.toPoint();
      // add the hex's position to each of its corner points
      const corners = hex.corners().map(corner => corner.add(point));
      // separate the first from the other corners
      const [firstCorner, ...otherCorners] = corners;

      // move the "pen" to the first corner
      graphics.moveTo(firstCorner.x, firstCorner.y);
      // draw lines to the other corners
      otherCorners.forEach(({ x, y }) => graphics.lineTo(x, y));
      // finish at the first corner
      graphics.lineTo(firstCorner.x, firstCorner.y);

      this.app.stage.addChild(graphics);
    });

  }


  /**
   * This is far from the complete design. I think I will need more components?
   *     Add the grid.
   *     Define the rules.
   *     Use a service to start the game randomly
   *         In the future this will be replaced by an API call and state
   *     Maybe component to add objects to the game?
   *         Services for these components?
   *     I need to add the websocket and API portion of the game
   *
   *
   * The Rules:
   *   Take the sum S of the 6-cell neighborhood where death=0, yellow=1, and red=2
   *   If the cell is currently dead it comes to life as yellow if S is exactly 4.
   *   If the cell is yellow it goes to red if S is 1 to 4 inclusive or is exactly 6.
   *   If the cell is red it stays red if S is 1 or 2 and goes to yellow if S is 4.
   *   Otherwise it is dead in the next generation.
   *
   *   ... Considering adding this entire project as a feature module to the main app
   *       That seems like the better route.
   */

}
