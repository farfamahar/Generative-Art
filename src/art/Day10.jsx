import React from "react";
import Sketch from "react-p5";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "/src/data/const";

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(CANVAS_WIDTH * 1.5, CANVAS_HEIGHT).parent(canvasParentRef);

    p5.angleMode(p5.DEGREES);
    p5.noLoop();
  };

  function draw(p5) {
    p5.background(250);
    let t = p5.frameCount / 100; //updates time

    p5.translate((CANVAS_WIDTH * 1.5) / 2, CANVAS_HEIGHT);
    branch(p5.random(60, 90), p5);
  }
  function branch(len, p5) {
    p5.push();
    if (len > 10) {
      p5.strokeWeight(p5.map(len, 10, 100, 1, 15));
      p5.stroke(70, 40, 10);
      p5.line(0, 0, 0, -len); // vertical line
      p5.translate(0, -len);
      p5.rotate(p5.random(-20, -30));
      branch(len * p5.random(0.7, 0.9), p5);
      p5.rotate(p5.random(50, 60));
      branch(len * p5.random(0.2, 0.9), p5);
      branch(len * p5.random(0.7, 0.9), p5);
    } else {
      if (p5.random(1) < 0.9) {
        //red
        p5.fill(255, 194, 245);
        leafShape(p5);
        if (p5.random(1) < 0.2) {
          //light purple
          p5.fill(255, 194, 245);
          p5.noStroke();
          leafShape(p5);
        }
      } else {
        //deep purple
        p5.fill(117, 0, 98);
        p5.strokeWeight(2);
        leafShape(p5);

      }
    }
    p5.pop();
  }

  function leafShape(p5){
    p5.beginShape();
        for (let i = 45; i < 200; i++) {
          let rad = 5;
          let x = rad * p5.cos(i);
          let y = rad * p5.sin(i);
          p5.noStroke();
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

  return <Sketch setup={setup} draw={draw} className="" />;
};
