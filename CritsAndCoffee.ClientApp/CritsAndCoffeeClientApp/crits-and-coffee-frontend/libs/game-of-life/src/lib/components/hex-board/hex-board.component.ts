import { Component, OnInit } from '@angular/core';

declare var SVG: any;
declare var Honeycomb: any;

@Component({
  selector: 'hex-board',
  templateUrl: './hex-board.component.html',
  styleUrls: ['./hex-board.component.scss']
})
export class HexBoardComponent implements OnInit {
  public zoomLevel: number = 25;
  public zoomButtonStatus: boolean = false;
  private _draw;
  private readonly _dimensionRegression = (x) => 193.82922931585227 * Math.exp(-0.08889697304008894 * x);

  constructor(){ }

  ngOnInit(){
    this._draw = SVG(document.getElementById("hex-board"));
    this.updateGrid();
  }

  private updateGrid(){
    const Hex = Honeycomb.extendHex({ size: this.zoomLevel });
    const Grid = Honeycomb.defineGrid(Hex);
// get the corners of a hex (they're the same for all hexes created with the same Hex factory)
    const corners = Hex().corners();
// an SVG symbol can be reused
    const hexSymbol = this._draw.symbol()
    // map the corners' positions to a string and create a polygon
      .polygon(corners.map(({ x, y }) => `${x},${y}`))
      .fill('none')
      .stroke({ width: 1, color: '#999' });

// render 10,000 hexes
    Grid.rectangle({ width: this._dimensionRegression(this.zoomLevel), height: this._dimensionRegression(this.zoomLevel) }).forEach(hex => {
      const { x, y } = hex.toPoint();
      // use hexSymbol and set its position for each hex
      this._draw.use(hexSymbol).translate(x, y);
    });

  }

  public updateZoom(newZoom: number){
    this.zoomLevel = newZoom;
    this.zoomButtonStatus = true;
    this._draw.clear();
    this.updateGrid();
    this.zoomButtonStatus = false;
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
