import React from "react";
import Sketch from "react-p5";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from "/src/data/const";

export default (props) => {
    const setup = (p5, canvasParentRef) => {
      // use parent to render the canvas in this ref
      // (without that p5 will render the canvas outside of your component)
  
      p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT, p5.WEBGL).parent(
        canvasParentRef
      );
    };
  
    function draw(p5) {

    }
  
    return <Sketch setup={setup} draw={draw} className="" />;
  };