import { SVG_NS } from '../settings';

export default class Paddle {

  constructor(boardHeight, width, height, x, y, up, down) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;

    document.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case up:
          this.up();
          break;
        case down:
          this.down();
          break;
        }
    });
  }

  up(){
      this.y = Math.max( 0,this.y - this.speed);

  }
  down(){
      this.y = Math.min( this.boardHeight - this.height,this.y + this.speed);
  }

  coordinates(x, y, width, height) {
  let leftX = x;
  let rightX = x + width;
  let topY = y;
  let bottomY = y + height;
  return [leftX, rightX, topY, bottomY];
}

  render(svg) {
    //   <rect height="56" width="8" fill="white" x="10" y="100" />
    let rect= document.createElementNS(SVG_NS, 'rect');
    rect.setAttributeNS(null, 'width', this.width);
    rect.setAttributeNS(null, 'height', this.height);
    rect.setAttributeNS(null, 'fill', 'white');
    rect.setAttributeNS(null, 'x', this.x);
    rect.setAttributeNS(null, 'y', this.y);

    svg.appendChild(rect);

  }
}