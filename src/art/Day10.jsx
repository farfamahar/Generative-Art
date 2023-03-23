import React from "react";
import Sketch from "react-p5";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "/src/data/const";


export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(
      canvasParentRef
    );

    p5.angleMode(p5.DEGREES);
    p5.noLoop()

  };

  function draw(p5) {
    p5.background(100);
    p5.translate(CANVAS_WIDTH/2, CANVAS_HEIGHT/2);
    branch(100,p5);
  }

  function branch(len,p5){
    p5.push()
    if(len > 10){
    p5.strokeWeight(p5.map(len, 10, 100, 1, 15 ))
    p5.line(0, 0, 0, -len); // vertical line
    p5.translate(0, -len);
    p5.rotate(30);
    branch(len * 0.7,p5);
    p5.rotate(-60);
    branch(len * 0.7,p5);
    }
    p5.pop()

  }

  return <Sketch setup={setup} draw={draw} className="" />;
};
