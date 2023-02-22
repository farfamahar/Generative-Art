import React from "react";
import Sketch from "react-p5";

const canvasWidth = 500;
const canvasHeight = 500;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.angleMode(p5.DEGREES);
    p5.rectMode(p5.CENTER);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

  };

  function draw(p5) {
    p5.background(0);
    p5.noFill();
    p5.stroke(255);

    p5.translate(canvasWidth / 2, canvasHeight / 2);

    //draw squares with increasing width and height (controlled with i)
    for(let i = 0; i < 200; i++){
        p5.push();
        
        //rotation
        let offset = 10; //experiment with this number
        p5.rotate(p5.sin(p5.frameCount + i * offset) * 100);
        p5.rect(0, 0, 600 - i * 3, 600 - i * 3 , 200 - i);
        p5.pop();

    }


  }

  return <Sketch setup={setup} draw={draw} className="" />;
};