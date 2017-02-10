import { SVG_NS } from '../settings'

export default class Score {

  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.score = 0;
  }
 
 render(svg) {
    
    let score= document.createElementNS(SVG_NS, 'text');
    score.setAttributeNS(null, 'x', this.x);
    score.setAttributeNS(null, 'y', this.y);
    score.setAttributeNS(null, 'fill', 'white');
    score.setAttributeNS(null, 'font-family', 'Silkscreen Web');
    score.setAttributeNS(null, 'font-size', this.size);
    score.innerHTML = this.score;

    svg.appendChild(score);
 }

}