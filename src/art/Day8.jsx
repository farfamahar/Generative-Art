import React from "react";
import Sketch from "react-p5";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "/src/data/const";

let randomSize;
let randomRotate;
let randomShape;
let cosModify;
let sinModify;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, p5.WEBGL).parent(
      canvasParentRef
    );
    p5.angleMode(p5.DEGREES);
    randomSize = p5.random(2, 4);
    randomShape = p5.random(20, 150);
    randomRotate = p5.random(20, 50);
    cosModify = p5.random(1, 10);
    sinModify = p5.random(1, 10);
  };

  function draw(p5) {
    p5.background(30);
    p5.rotateX(60);
    p5.noFill();
    p5.stroke(255);

    for (let i = 0; i < 40; i++) {
      // let r = p5.map(p5.sin(p5.frameCount), 1, 1, 0, 255);
      // let g = p5.map(i, 200, 100, 0, 255);
      // let b = p5.map(p5.cos(p5.frameCount), -1, 1, 255,0)

      // p5.stroke(r,g,b);
      p5.rotate(p5.frameCount / randomRotate);

      p5.beginShape();

      for (let j = 0; j < 360; j += randomShape) {
        let rad = i * 4;
        let x = rad * p5.cos(j * cosModify);
        let y = rad * p5.sin(j * sinModify);
        let z = p5.sin(p5.frameCount * 2 + i * 5) * 50;

        p5.vertex(x, y, z);
      }

      p5.endShape(p5.CLOSE);
    }
  }

  return <Sketch setup={setup} draw={draw} className="" />;
};
