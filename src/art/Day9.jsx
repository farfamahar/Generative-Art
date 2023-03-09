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
  };

  function draw(p5) {
    p5.background(30);
    p5.noStroke();
    p5.translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

    let space = 10; // control how much i is increased each loop

    for (let i = 0; i < 360; i += space) {
      // perlin noise to control the height
      let xoff = p5.map(p5.cos(i), -1, 1, 0, 3);
      let yoff = p5.map(p5.sin(i), -1, 1, 0, 3);

      let noise = p5.noise(xoff, yoff);
      let height = p5.map(noise, 0, 1, -150, 150);

      p5.rotate(space);
      p5.rect(200, 0, height, 1);
    }
  }

  return <Sketch setup={setup} draw={draw} className="" />;
};
