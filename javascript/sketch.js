function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(230, 215, 200);

  //lines spreading from the centre
  for (x = 0; x <= width; x += 15) {
    for (y = 0; y <= height; y += 15) {
      stroke(90, 60, 30);
      strokeWeight(0.35);
      line(x, y, width * 0.5, height * 0.5);
    }
  }

  //concentric circles (as wide/high as canvas)
  for (i = 0; i <= width; i += 30) {
    fill(0, i / 45);
    strokeWeight(0.01);
    ellipse(width * 0.5, height * 0.5, i, i);
  }

  //concentric circles (3/4 of canvas width/height)
  for (i = 0; i <= width * 0.75; i += 30) {
    fill(i * 0.35, i / 15);
    strokeWeight(0.1);
    ellipse(width * 0.5, height * 0.5, i, i);
  }

  // hazy waves (NW & SE)
  for (i = 0; i < width * 0.75; i += 30) {
    noFill();
    stroke(230, 215, 200, i * 0.06);
    strokeWeight(0.075 * i);
    arc(width * 0.5, height * 0.5, i, i, 0, 90);
    arc(width * 0.5, height * 0.5, i, i, 180, 270);
  }

  //dark arcs (NE & SW)
  for (i = 0; i < width * 0.9; i += 15) {
    noFill();
    strokeWeight(3);
    stroke(30, 15, 0, i * 0.1);
    arc(width * 0.5, height * 0.5, i, i, 155, 180);
    arc(width * 0.5, height * 0.5, i, i, 270, 295);
  }

  //fog spreading from centre to NE
  for (i = 0; i <= width; i += 15) {
    noFill();
    strokeWeight(i * 0.35);
    stroke(230, 215, 200, i * 0.07);
    ellipse(width * 0.5 + i, height * 0.5 - i, i, i);
  }
}
