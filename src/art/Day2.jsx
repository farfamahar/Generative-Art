import React from "react";
import Sketch from "react-p5";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '/src/data/const' 

let points = [];
let mult = 0.008; //control speed of angle change

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);

    // p5.mouseX = canvasWidth / 2;
    // p5.mouseY = canvasHeight / 2;
    p5.background(30);
    p5.noiseDetail(1);
    p5.angleMode(p5.DEGREES);
    let density = 10; //how spaced out things are
    let space = CANVAS_WIDTH / density;

    for (let x = 0; x < CANVAS_WIDTH; x += space) {
      for (let y = 0; y < CANVAS_HEIGHT; y += space) {
        let p = p5.createVector(x + p5.random(-10, 10), y + p5.random(-10, 10));
        points.push(p);
      }
    }
  };

  function draw(p5) {
    p5.noStroke();
    p5.fill(255);

    for (let i = 0; i < points.length; i++) {
      //maps the coordinates of the points to the r,g,b values
      let r = p5.map(points[i].x, 0, CANVAS_WIDTH, 50, 255);
      let g = p5.map(points[i].y, 0, CANVAS_WIDTH, 50, 255);
      let b = p5.map(points[i].x, 0, CANVAS_WIDTH, 255, 50);

      p5.fill(r, g, b);

      //add a vector to each point based on the angle
      let angle = p5.map(
        p5.noise(points[i].x * mult, points[i].y * mult),
        0,
        1,
        0,
        720
      );
      points[i].add(p5.createVector(p5.cos(angle), p5.sin(angle)));

      p5.ellipse(points[i].x, points[i].y, 5);
    }
  }

  return <Sketch setup={setup} draw={draw} className="" />;
};
