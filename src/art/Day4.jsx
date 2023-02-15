import React from "react";
import Sketch from "react-p5";

const canvasWidth = 500;
const canvasHeight = 500;
let points = [];
let r = 5;

export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

        // create points randomly on canvas
        for(let i = 10; i < 10; i=i+1){
            let x = random(canvasWidth);
            let y = random(canvasHeight);
            let a = random(TWO_PI); //angle
            points[i] = {
                x:x,
                y:y,
                dx: r*p5.cos(a), dy:r*p5.sin(a) // speed of point using parametric equation
            }

        }

    }

    function draw(p5) {


    }


    return <Sketch setup={setup} draw={draw} className="" />;
}
