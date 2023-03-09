import React from "react";
import Sketch from "react-p5";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '/src/data/const' 

let circles = {};
let r;
let g;
let b;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);
  };

  function draw(p5) {
    p5.background("black");
    p5.noFill(); // set the fill color to transparent
    p5.stroke(255); // set the stroke color to white
    p5.strokeWeight(4); // set the stroke weight to 4 pixels
    r = p5.random(255); // r is a random number between 0 - 255
    g = p5.random(255); // g is a random number betwen 100 - 200
    b = p5.random(255); // b is a random number between 0 - 100
    // p5.frameRate(15)
    // draw a series of concentric circles
    for (let i = 0; i < CANVAS_WIDTH * 2; i += 20) {
      let alpha = p5.map(i, 0, CANVAS_WIDTH / 0.5, 255, 0); // calculate the alpha value based on the distance from the center
      p5.stroke(r, g, b, alpha); // set the stroke color with alpha value
      p5.ellipse(CANVAS_HEIGHT / 2, CANVAS_HEIGHT / 2, (i += 2));
      p5.strokeWeight(p5.random(20)); // set the stroke weight to 4 pixels
    }
    // draw a black circle at the center of the canvas
    p5.fill(0); // set the fill color to black
    p5.noStroke(); // set the stroke color to transparent
    p5.ellipse(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 100); // draw a circle at the center of the canvas with a diameter of 100 pixels
  }

  return <Sketch setup={setup} draw={draw} className="" />;
};
