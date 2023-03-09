import React from "react";
import Sketch from "react-p5";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '/src/data/const' 
let angle = 0;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
  };

  function draw(p5) {
    p5.background(30);
    p5.noStroke();

    //translate to center of canvas
    p5.translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    p5.rotate(angle);
    let c1 = p5.color("#53FF45");
    let c2 = p5.color("#F4FF52");
    let c3 = p5.color("#1E2EDE");
    let c4 = p5.color("#F5B841");
    let c5 = p5.color("F4FF52");

    for (let i = 0; i < 360; i += 20) {
      p5.rotate(angle);
      p5.rect(125, 0, 10);
      p5.fill(c1);
      p5.rect(175, 0, 10);
      p5.fill(c2);
      p5.rect(150, 0, 10);
      p5.fill(c3);
      p5.rect(125, 0, 10);
      p5.fill(c4);
      p5.rect(100, 0, 10);
      p5.fill(c5);
      angle += 0.01;
      if (i > 180) angle -= 0.0005;
    }

    // }
    p5.rectMode(p5.CENTER);
  }

  return <Sketch setup={setup} draw={draw} className="" />;
};
