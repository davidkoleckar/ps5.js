let nums = [ 0x7E, 0x30, 0x6D, 0x79, 0x33, 0x5B, 0x5F, 
  0x70, 0x7F, 0x7B, 0x77, 0x00, 0x4E, 0x00, 0x4F, 0x47, 
  0x5E ];

let index = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(220);
  segment(nums[index%17]);
  index++;
}

function getColor(value, shift) {
  let r = 255
  let g = 0;
  let b = 0;
  let a = 255 * (value >> shift) & 1;
  return color(r,g,b,a);
}

function segment(value) {
  push();
  stroke(0);
  colorMode(RGB,1);
  noFill();
  //A
  fill(getColor(value, 6));
  rect(60,20,78,18);
  //B
  fill(getColor(value, 5));
  rect(140,40,18,98);
  //C
  fill(getColor(value, 4));
  rect(140,160,18,98);
  //D
  fill(getColor(value, 3));
  rect(60,260,78,18);
  //E
  fill(getColor(value, 2));
  rect(40,160,18,98);
  //F
  fill(getColor(value, 1));
  rect(40,40,18,98);
  //G
  fill(getColor(value, 0));
  rect(60,140,78,18);

  pop();
}