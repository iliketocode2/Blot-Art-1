// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start 

const width = 100;
const height = 100;
const degrees = 5;
const radians = degrees * Math.PI / 180;
const iterations = 10; // 220
let pos = width / 2;
const { Turtle, trim, merge, cut, cover, rotate, scale, translate, originate, iteratePoints, pointInside, resample, join, copy, union, difference, intersection, xor, getAngle, getPoint, getNormal, bounds, nurbs, catmullRom, rand, setRandSeed, randInRange, randIntInRange, noise } = blotToolkit;

//const canvas = document.getElementsByClassName("Preview_canvas main-canvas");
//const ctx = canvas.getContext('2d');

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// create initial drawing
let p = [
  [pos, pos]
];

let a = 1;
let b = 0.02;

for (let i = 0; i < iterations; i++) {
  let valueX = a * 2.718 ** (b * i) * Math.cos(i) + (pos);
  let valueY = a * 2.718 ** (b * i) * Math.sin(i) + (pos);
  p.push([valueX, valueY]);
}

let p1 = [
  [pos, pos]
];

for (let i = 0; i < iterations; i++) {
  let valueX = -a * 2.718 ** (b * i) * Math.cos(i) + (pos);
  let valueY = -a * 2.718 ** (b * i) * Math.sin(i) + (pos);
  p1.push([valueX, valueY]);
}

let p2 = [
  [pos, pos]
];

for (let i = 0; i < iterations; i++) {
  let valueX = 1.01 * a * 2.718 ** (b * i) * Math.cos(i) + (pos);
  let valueY = 1.01 * a * 2.718 ** (b * i) * Math.sin(i) + (pos);
  p2.push([valueX, valueY]);
}

let p3 = [
  [0, 0],
  [(width / 2) - 0.7, (height / 2) - 0.7]
];

let p4 = [
  [width, 0],
  [(width / 2) + 0.7, (height / 2) - 0.7]
];

let p5 = [
  [width, height],
  [(width / 2) + 0.7, (height / 2) + 0.7]
];

let p6 = [
  [0, height],
  [(width / 2) - 0.7, (height / 2) + 0.7]
];

let p7 = [
  [width, height / 2],
  [(width / 2) + 0.9, (height / 2)]
];

let p8 = [
  [width / 2, height],
  [(width / 2), (height / 2) + 1]
];

let p9 = [
  [width / 2, 0],
  [(width / 2), (height / 2) - 0.9]
];

let p10 = [
  [0, height / 2],
  [(width / 2) - 0.9, (height / 2)]
];

let pTotal = [p, p1, p2];
finalLines.push(p, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10);


function clearDoc() {
  // clear array
  finalLines.splice(0, finalLines.length);
  //render();
  //init();
}

// define what I want to happen each frame
function draw() {



  // const modifiedPolylines = bt.iteratePoints(pTotal, (pt, t) => {
  //   const [x, y] = pt;
  //   // rotate each point by 5 degrees counter-clockwise in a circle
  //   return [x * Math.cos(radians) - y * Math.sin(radians), x * Math.sin(radians) + y * Math.cos(radians)];
  // });

  // rotate each point by 5 degrees counter-clockwise in a circle, update polylines
  const modifiedPolylines = pTotal.map(polyline =>
    polyline.map(([x, y]) => [
      (x - pos) * Math.cos(radians) - (y - pos) * Math.sin(radians) + pos,
      (x - pos) * Math.sin(radians) + (y - pos) * Math.cos(radians) + pos
    ])
  );

  // add the polyline to the final lines
  // finalLines.push(modifiedPolylines);

  // clear finalLines and add the modified polylines
  finalLines.length = 0;
  finalLines.push(...modifiedPolylines, p3, p4, p5, p6, p7, p8, p9, p10);

  clearDoc();
  // draw it
  drawLines(finalLines);

  clearDoc();

  drawLines(finalLines);

  // Request the next frame
  // requestAnimationFrame(draw);
}

// run the animation
draw();
