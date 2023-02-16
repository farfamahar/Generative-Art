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
        // p5.background(30);

        p5.background('black'); // set the background color to light gray
        p5.fill(0); // set the fill color to black
        p5.stroke(255); // set the stroke (outline) color to white
        p5.strokeWeight(1); // set the stroke weight to 4 pixels
        p5.ellipse(canvasWidth/2, canvasHeight/2, 100); // draw a circle at the center of the canvas with a diameter of 100 pixels


    }

 

    return <Sketch setup={setup} draw={draw} className="" />;
}