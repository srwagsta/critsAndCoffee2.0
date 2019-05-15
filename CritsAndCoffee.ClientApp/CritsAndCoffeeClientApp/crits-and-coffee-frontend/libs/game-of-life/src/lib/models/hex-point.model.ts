export enum Color {
  RED_HEX_COLOR = '#8c0808',
  YELLOW_HEX_COLOR = '#f4db1f'
}

export class HexPoint {
  public x: number;
  public y: number;
  public color: Color;

  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
}
