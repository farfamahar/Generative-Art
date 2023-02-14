import React from "react";
import Sketch from "react-p5";

const canvasWidth = 500;
const canvasHeight = 500;
let points = [];

export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
		p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);

		// p5.mouseX = canvasWidth / 2;
		// p5.mouseY = canvasHeight / 2;
        p5.background(30);
        let density = 50;
        let space = canvasWidth / density;

        for(let x = 0; x < canvasWidth; x+=space){
            for(let y = 0; y < canvasHeight; y+=space){
                let p = p5.createVector(x,y);
                points.push(p);
            }
        }
    }

    function draw(p5){
        p5.noStroke()
        p5.fill(255)
    

    for(let i = 0; i < points.length; i++){


        p5.ellipse(points[i].x, points[i].y, 5)
    }
}


    return <Sketch setup={setup} draw={draw} className="" />;
}
