import React from "react";
import Sketch from "react-p5";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "/src/data/const";
let koiImage;
let koiFish = [];

function preload(p5) {
  koiImage = p5.loadImage('/koi.png');
}

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);


  };

  function draw(p5) {
    p5.background(0);
    
    // spawn new koi fish randomly
    if (p5.random(1) < 0.05) {
      koiFish.push(new Koi(p5.random(CANVAS_WIDTH), p5.random(CANVAS_HEIGHT),p5));
    }
    
    // update and display all koi fish
    for (let i = 0; i < koiFish.length; i++) {
      koiFish[i].update(p5);
      koiFish[i].display(p5);
    }
  }

  

  class Koi {
    constructor(x, y, p5) {
      this.x = x;
      this.y = y;
      this.angle = p5.random(p5.TWO_PI); // random starting angle
      this.radius = p5.random(50, 100); // random radius
      this.speed = p5.random(0.01, 0.05); // random speed
      this.image = koiImage;
      this.scaleFactor = 1; // scale factor for resizing fish
      this.scaleIncrement = 0.01; // how much to increment the scale each frame
      this.maxScale = 1.5; // maximum scale factor for resizing fish
    }
  
    update(p5) {
      // move in a circular pattern
      this.angle += this.speed;
      this.x = CANVAS_WIDTH / 2 + p5.cos(this.angle) * this.radius;
      this.y = CANVAS_HEIGHT / 2 + p5.sin(this.angle) * this.radius;
  
      // animate fish by scaling and rotating the image
      this.scaleFactor += this.scaleIncrement;
      if (this.scaleFactor >= this.maxScale || this.scaleFactor <= 1) {
        this.scaleIncrement *= -1; // reverse scale direction when max/min reached
      }
    }
  
    display(p5) {
      // apply transformations to the image to animate the fish
      p5.push();
      p5.translate(this.x, this.y);
      p5.rotate(this.angle);
      p5.scale(this.scaleFactor);
      p5.image(this.image, -25, -25, 50, 50);
      p5.pop();
    }
  }
  

  return <Sketch setup={setup} draw={draw} preload={preload} className="" />;
};
