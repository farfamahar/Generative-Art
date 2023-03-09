import React from "react";
import Sketch from "react-p5";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "/src/data/const";
let start = 0;
let random1;
let random2;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(
      canvasParentRef
    );

    p5.angleMode(p5.DEGREES);
    p5.noiseDetail(2, 1);
    random1 = p5.random(1,5)
    random2 = p5.random(0.1,0.5)

  };

  function draw(p5) {
    p5.background(30);
    p5.noStroke();
    p5.translate(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

    let space = random2; // lower = less space between lines

    for (let i = 0; i < 360; i += space) {
      // perlin noise to control the height
      let xoff = p5.map(p5.cos(i*random1), -1, random1, 0, random1);
      let yoff = p5.map(p5.sin(i*random1), -1, random1, 0, random1);

      let noise = p5.noise(xoff + start, yoff + start);
      let height = p5.map(noise, 0, 1, -150, 150);

      //colors
      let r = p5.map(p5.sin(i), -1, 1, 100, 200);
      let g = p5.map(height, -150, 150, 0, 150);
      let b = p5.map(noise, 0, 1, 150, 255);

      p5.rotate(space);
      p5.fill(r, g, b);
      p5.rect(200, 0, height, 1);
    }
    start +=0.01;
  }

  return <Sketch setup={setup} draw={draw} className="" />;
};
