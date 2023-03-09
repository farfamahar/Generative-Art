import React from "react";
import Sketch from "react-p5";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '/src/data/const' 

let points = [];
let r = 5;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);
    p5.noStroke();

    // create points randomly on canvas
    for (let i = 0; i < 100; i = i + 1) {
      let x = p5.random(CANVAS_WIDTH);
      let y = p5.random(CANVAS_HEIGHT);
      let a = p5.random(p5.TWO_PI); //angle
      let fill = p5.color(p5.random(255), p5.random(255), p5.random(255));
      points[i] = {
        x: x,
        y: y,
        dx: r * p5.cos(a),
        dy: r * p5.sin(a), // speed of point using parametric equation
        fill: fill,
      };
    }
  };

  function draw(p5) {
    // p5.background(30);

    for (let i = 0; i < 100; i += 1) {
      let point = points[i];
      point.x = point.x + point.dx;
      point.y = point.y + point.dy;
      //prevent from going off screen
      if (point.x > CANVAS_WIDTH || point.x < 0) {
        point.dx = point.dx * -1;
      }
      if (point.y > CANVAS_HEIGHT || point.y < 0) {
        point.dy = point.dy * -1;
      }
      p5.fill(point.fill);
      p5.circle(point.x, point.y, 10);
    }
  }

  return <Sketch setup={setup} draw={draw} className="" />;
};
