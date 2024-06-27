// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start 

const width = 100;
const height = 100;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// create a polyline
let pos = width / 2;
let p = [
  [pos, pos]
];

let a = 1;
let b = 0.02;

for (let i = 0; i < 220; i++){
  let valueX = a * 2.718 ** (b*i) * Math.cos(i) + (pos);
  let valueY = a * 2.718 ** (b*i) * Math.sin(i) + (pos);
  p.push([valueX, valueY]);
}

let p1 = [
  [pos, pos]
];

for (let i = 0; i < 220; i++){
  let valueX = -a * 2.718 ** (b*i) * Math.cos(i) + (pos);
  let valueY = -a * 2.718 ** (b*i) * Math.sin(i) + (pos);
  p1.push([valueX, valueY]);
}

let p2 = [
  [pos, pos]
];

for (let i = 0; i < 220; i++){
  let valueX = 1.01*a * 2.718 ** (b*i) * Math.cos(i) + (pos);
  let valueY = 1.01*a * 2.718 ** (b*i) * Math.sin(i) + (pos);
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

// add the polyline to the final lines
finalLines.push(p, p1, p2, p3, p4, p5, p6);

// draw it
drawLines(finalLines);
