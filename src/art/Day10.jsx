import React from "react";
import Sketch from "react-p5";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "/src/data/const";

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);

    p5.angleMode(p5.DEGREES);
    p5.noLoop();
  };

  function draw(p5) {
    p5.background(244);
    p5.translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT);
    branch(60, p5);
  }

  function branch(len, p5) {
    p5.push();
    if (len > 10) {
      p5.strokeWeight(p5.map(len, 10, 100, 1, 15));
      p5.stroke(70, 40, 20);
      p5.line(0, 0, 0, -len); // vertical line
      p5.translate(0, -len);
      p5.rotate(p5.random(-20, -30));
      branch(len * p5.random(0.7, 0.9), p5);
      p5.rotate(p5.random(50, 60));
      branch(len * p5.random(0.7, 0.9), p5);
    } else {
      let r = 220 + p5.random(-20, 20);
      let g = 120 + p5.random(-20, 20);
      let b = 170 + p5.random(-20, 20);
      p5.fill(r, g, b, 300);
      p5.noStroke();

      p5.beginShape();
      for (let i = 45; i < 200; i++) {
        let rad = 5;
        let x = rad * p5.cos(i);
        let y = rad * p5.sin(i);
        p5.vertex(x, y);
      }
      for (let i = 135; i < 0; i--) {
        let rad = 5;
        let x = rad * p5.cos(i);
        let y = rad * p5.sin(-i) + 20;
        p5.vertex(x, y);
      }
      p5.endShape(p5.CLOSE);
    }
    p5.pop();
  }

  return <Sketch setup={setup} draw={draw} className="" />;
};
