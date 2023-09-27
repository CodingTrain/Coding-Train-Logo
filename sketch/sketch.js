function setup() {
  createCanvas(400, 400);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  noFill();
}

function draw() {
  background(255);

  strokeWeight(11.6);
  stroke("#70327E");
  line(103, 178, 103, 137);
  line(103, 137, 90, 137);
  line(90, 137, 90, 112);
  line(90, 112, 198, 112);
  line(198, 112, 198, 158);

  stroke("#30C5F3");
  line(228, 158, 221, 112);
  line(221, 112, 272, 112);
  line(272, 112, 265, 158);

  stroke("#EF63A4");
  line(313, 266, 289, 237);
  line(289, 237, 305, 195);
  line(305, 195, 289, 158);

  stroke("#70327E");
  circle(140, 235, 53 * 2);

  strokeWeight(11.2);
  stroke("#30C5F3");
  circle(221, 270, 18 * 2);
  circle(272, 270, 18 * 2);

  stroke("#F89E4F");
  strokeWeight(11.6);
  line(267, 178, 267, 213);
  line(247, 178, 247, 213);
  line(227, 178, 227, 213);

  line(272, 236, 221, 236);

  // Remove to allow Animation
  noLoop();
}
