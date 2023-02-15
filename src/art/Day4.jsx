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
                dx:r*p5.cos(a),
                dy:r*p5.sin(a) // speed of point using parametric equation
            }

        }

    }

    function draw(){
        for(let i = 0; i < 10; i+=1){
            let point = points[i];
            point.x = point.x + point.dx
            point.y = point.y + point.dy
            //prevent from going off screen
            if(point.x>canvasWidth || point.x <0){
                point.dx = point.dx * -1;
            }
            if(point.y>canvasHeight || point.y <0){
                point.dy = point.dxy * -1;
            }

        }
    }

    function draw(p5) {


    }


    return <Sketch setup={setup} draw={draw} className="" />;
}
