function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
  background("#function082CF1");
  fill("red");
  circle(200, 200, 300); // rosto
  fill("#E4B36A(255,4,68)");
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
  line(150, 270, 250, 235); // boca
  fill("#1C1C1C");
  triangle(200, 180, 170, 220, 220, 220); // nariz
  line(123, 115, 178, 113); // sobrancelha esquerda
  line(225, 116, 279, 106); // sobrancelha direita
  // circle(150,150,10); // pupila esquerda
  //circle(250,150,10); // pupila direita

  olhoX = map(mouseX, 0, 400, 130, 170);
  olhoY = map(mouseY, 0, 400, 130, 170);

  circle(olhoX, olhoY, 36); // nova pupila esquerda
  circle(olhoX + 100, olhoY, 20); //nova pupila direita
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
  }
}
