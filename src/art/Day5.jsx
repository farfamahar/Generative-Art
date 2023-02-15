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
        for (let i = 0; i < 500; i++) {
            let x = p5.random(-500,500);
            let y = 50;
            let angle = p5.random(10,20);
            let amplitude = 0.1;
            let period = p5.random(0, 500);
            blades.push({x, y, angle, amplitude, period})
          }
    


    }

    function draw(p5){
        // p5.background(30);

        p5.background(30);
        for (let blade of blades) {
          blade.angle += 0.02;
          p5.push();
          p5.translate(blade.x, blade.y);
          p5.rotate(p5.sin(blade.angle) * blade.amplitude);
          p5.stroke('white');
          p5.strokeWeight(1);
          p5.line(1000, 1000, 0, -50);
          p5.pop();
        }


    }

 

    return <Sketch setup={setup} draw={draw} className="" />;
}