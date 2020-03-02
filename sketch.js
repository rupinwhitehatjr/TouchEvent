function setup() {
  createCanvas(400, 400);
  box1=rect(30, 20, 55, 55);
}

var newX=0;
function draw() {
  background(220);
 rect(newX, 20, 55, 55);
}

function touchMoved(event)
{
  newX=mouseX;
}