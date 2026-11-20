/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(windowWidth, windowHeight);

  // ...except to adjust the dancer's name on the next line:
  dancer = new MyungmyungDancer(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class MyungmyungDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.speed = 2;
  }
  bounce() {
    this.y += this.speed;

    if (this.y > height / 2 + 50 || this.y < height / 2 - 50) {
      this.speed = -this.speed;
    }
  }
  update() {
    this.bounce();
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    this.drawMyungmyungDancer()
    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  drawMyungmyungDancer() {
    this.drawBody();
    this.drawEars();
    fill(255);
    noStroke();
    // face
    ellipse(0, -10, 150, 100);
    // blush
    fill(255, 182, 193);
    noStroke();
    ellipse(-35, 5, 13, 9);
    ellipse(35, 5, 13, 9);

    this.drawEyes();

    // mouth
    noFill();
    stroke(0);
    strokeWeight(1);
    beginShape();
    splineVertex(6, 9);
    splineVertex(8, 10);
    splineVertex(5, 11);
    splineVertex(0, 10);
    splineVertex(-5, 11);
    splineVertex(-8, 10);
    splineVertex(-6, 9);
    endShape();



  }

  drawEars() {
    fill(255);
    stroke(255);
    strokeWeight(0.5);
    let earAngle = map(sin(frameCount * 0.1), -1, 1, -0.15, 0.15);

    // Left ear
    push();
    translate(-65, -57);
    rotate(PI / 5 + earAngle);

    beginShape();
    splineVertex(-27, -13);
    splineVertex(-18, -23);
    splineVertex(15, -10);
    splineVertex(25, -10);
    splineVertex(30, 9);
    splineVertex(18, 17);
    splineVertex(-15, 17);
    splineVertex(-25, 7);
    endShape(CLOSE);

    pop();

    // Right ear
    push();
    translate(65, -57);
    rotate(-PI / 5 + earAngle);

    beginShape();
    splineVertex(27, -13);
    splineVertex(18, -23);
    splineVertex(-15, -10);
    splineVertex(-25, -10);
    splineVertex(-30, 9);
    splineVertex(-18, 17);
    splineVertex(15, 17);
    splineVertex(25, 7);
    endShape(CLOSE);

    pop();
  }
  drawEyes() {
    noStroke();
    let shining = noise(frameCount / 20) * 5;

    // Left eye
    push();
    translate(-50, -15);
    rotate(0.4);

    fill(0);
    ellipse(0, 0, 45, 55);

    fill(255);
    ellipse(3, -13, 25 + shining, 19 + shining);
    ellipse(-3, 14, 22 + shining, 15 + shining);

    pop();

    // Right eye
    push();
    translate(50, -15);
    rotate(-0.4);

    fill(0);
    ellipse(0, 0, 45, 55);

    fill(255);
    ellipse(-3, -13, 25 + shining, 19 + shining);
    ellipse(3, 14, 22 + shining, 15 + shining);

    pop();
  }

  drawBody() {
    fill(255);
    stroke(255);
    strokeWeight(0.5);

    beginShape();
    splineVertex(-12, 27);
    splineVertex(-21, 40);
    splineVertex(-25, 49);
    splineVertex(-17, 48);
    splineVertex(-17, 62);
    splineVertex(-9, 67);
    splineVertex(0, 61);
    splineVertex(9, 67);
    splineVertex(17, 62);
    splineVertex(17, 48);
    splineVertex(25, 49);
    splineVertex(21, 40);
    splineVertex(12, 27);
    endShape(CLOSE);
  }

  // drawReferenceShapes() {
  //   noFill();
  //   stroke(255, 0, 0);
  //   line(-5, 0, 5, 0);
  //   line(0, -5, 0, 5);
  //   stroke(255);
  //   rect(-100, -100, 200, 200);
  //   fill(255);
  //   stroke(0);
  // }
}






/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels.*/
