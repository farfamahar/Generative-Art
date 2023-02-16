import React from "react";
import Sketch from "react-p5";

const canvasWidth = 500;
const canvasHeight = 500;
let blades = [];

export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
        p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);


    


    }

    function draw(p5){
        p5.background('black');
        p5.noFill(); // set the fill color to transparent
        p5.stroke(255); // set the stroke color to white
        p5.strokeWeight(1.5); // set the stroke weight to 4 pixels 
        // draw a series of concentric circles
        for (let i = 0; i < canvasWidth*2; i += 20) {
          p5.ellipse(canvasHeight/2, canvasHeight/2, i+=2);
        }   
        // draw a black circle at the center of the canvas
        p5.fill(0); // set the fill color to black
        p5.noStroke(); // set the stroke color to transparent
        p5.ellipse(canvasWidth/2, canvasHeight/2, 100); // draw a circle at the center of the canvas with a diameter of 100 pixels


    }

 

    return <Sketch setup={setup} draw={draw} className="" />;
}