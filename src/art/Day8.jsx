import React from "react";
import Sketch from "react-p5";

const canvasWidth = 500;
const canvasHeight = 500;

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)

    p5.createCanvas(canvasWidth, canvasHeight, p5.WEBGL).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);

  };

  function draw(p5) {

    p5.background(30);
    p5.rotateX(60);
    p5.noFill();
    p5.stroke(255);

    for(let i = 0; i < 10; i++){
        p5.beginShape();

        for(let j = 0; j < 360; j+= 10){
            let rad = i * 8;
            let x = rad * p5.cos(j);
            let y = rad * p5.sin(j);

            p5.vertex(x, y,);
        }

        p5.endShape(p5.CLOSE);
    }


  }

  return <Sketch setup={setup} draw={draw} className="" />;
};