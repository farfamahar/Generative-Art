import React from "react";
import Sketch from "react-p5";
import SimplexNoise from "simplex-noise";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '/src/data/const' 

let minFrequency = 0.5;
let maxFrequency = 2;
let minAmplitude = 0.05;
let maxAmplitude = 0.5;


// Included in index.html
// This is an alternative to p5.js builtin 'noise' function,
// It provides 4D noise and returns a value between -1 and 1
const simplex = new SimplexNoise();

export default (props) => {
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(canvasParentRef);

    p5.mouseX = CANVAS_WIDTH / 2;
    p5.mouseY = CANVAS_HEIGHT / 2;
  };

  const draw = (p5) => {
    p5.background(0);
    let c = p5.color("#0f5=9");

    const frequency = p5.lerp(
      minFrequency,
      maxFrequency,
      p5.mouseX / CANVAS_WIDTH
    );
    const amplitude = p5.lerp(
      minAmplitude,
      maxAmplitude,
      p5.mouseY / CANVAS_HEIGHT
    );

    const dim = Math.min(CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw the background
    p5.noFill();
    p5.stroke(255);
    p5.strokeWeight(dim * 0.0075);
    p5.fill(c);

    const time = p5.millis() / 1000;
    const rows = 10;

    // Draw each line
    for (let y = 0; y < rows; y++) {
      // Determine the Y position of the line
      const v = rows <= 1 ? 0.5 : y / (rows - 1);
      const py = v * CANVAS_HEIGHT;
      drawNoiseLine({
        v,
        start: [0, py],
        end: [CANVAS_WIDTH, py],
        amplitude: amplitude * CANVAS_HEIGHT,
        frequency,
        time: time * 0.5,
        steps: 150,
        p5,
      });
    }
  };

  const drawNoiseLine = (opt = {}) => {
    const {
      v,
      start,
      end,
      steps = 10,
      frequency = 1,
      time = 0,
      amplitude = 1,
      p5,
    } = opt;

    const [xStart, yStart] = start;
    const [xEnd, yEnd] = end;

    // Create a line by walking N steps and interpolating
    // from start to end point at each interval
    p5.beginShape();
    for (let i = 0; i < steps; i++) {
      // Get interpolation factor between 0..1
      const t = steps <= 1 ? 0.5 : i / (steps - 1);

      // Interpolate X position
      const x = p5.lerp(xStart, xEnd, t);
      p5.stroke("#fae");

      // Interpolate Y position
      let y = p5.lerp(yStart, yEnd, t);

      // Offset Y position by noise
      y +=
        simplex.noise3D(t * frequency + time, v * frequency, time) * amplitude;

      // Place vertex
      p5.vertex(x, y);
    }
    p5.endShape();
  };

  return <Sketch setup={setup} draw={draw} className="" />;
};
