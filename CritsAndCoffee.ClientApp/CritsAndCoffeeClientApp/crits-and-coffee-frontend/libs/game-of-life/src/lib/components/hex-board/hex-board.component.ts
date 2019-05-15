import { Component, OnInit } from '@angular/core';
import { HexPoint, Color } from '../../models/hex-point.model';

declare var SVG: any;
declare var Honeycomb: any;

@Component({
  selector: 'hex-board',
  templateUrl: './hex-board.component.html',
  styleUrls: ['./hex-board.component.scss']
})
export class HexBoardComponent implements OnInit {
  private cells: HexPoint[] = [
    new HexPoint(1,1, Color.RED_HEX_COLOR),
    new HexPoint(5 ,5, Color.YELLOW_HEX_COLOR)
  ];

  public zoomLevel: number = 25;
  public zoomButtonStatus: boolean = false;

  private _draw;
  private _hexGrid;
  private readonly _dimensionRegression = (x) => 193.82922931585227 * Math.exp(-0.08889697304008894 * x);
  private _hexPoint = (color: string = 'none') => this._draw.symbol()
    // map the corners' positions to a string and create a polygon
    .polygon(this._hexGrid().corners().map(({ x, y }) => `${x},${y}`))
    .fill({ opacity: 1, color: color })
    .stroke({ width: 1, color: '#999' });


  constructor(){ }

  ngOnInit(){
    this._draw = SVG(document.getElementById("hex-board"));
    this.updateGrid();
  }

  private updateGrid(){
    this._hexGrid =  Honeycomb.extendHex({ size: this.zoomLevel });
    const localGrid = Honeycomb.defineGrid(this._hexGrid);
    localGrid.rectangle({ width: this._dimensionRegression(this.zoomLevel),
                          height: this._dimensionRegression(this.zoomLevel) })
      .forEach(hex => {
        const { x, y } = hex.toPoint();
        const gameHex = this.cells.find((GameHex) => hex.x === GameHex.x && hex.y === GameHex.y);
        if(gameHex){
          this._draw.use(this._hexPoint(gameHex.color)).translate(x, y);
        }
        else {
          this._draw.use(this._hexPoint()).translate(x, y);
        }
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
   * TODO
   *     Define the rules.
   *     Add a service to get the game state and set it with state
   *         The state should have an array of HexPoints as the game's current state
   *     Mock the API call from now?
   *     Use a service to start the game randomly
   *         In the future this will be replaced by an API call and state
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
   */

}
