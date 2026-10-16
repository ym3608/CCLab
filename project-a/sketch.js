function setup() {
    createCanvas(800, 500);
    angleMode("DEGREES")

}

function draw() {
    let gridSizeX = 800
    let gridSizeY = 25

    for (let x = 0; x < width; x += gridSizeX) {
        for (let y = 0; y < height; y += gridSizeY) {
            noStroke()

            let r = map(y, 0, height, 190, 100);
            let g = map(y, 0, height, 235, 160);
            let b = map(y, 0, height, 245, 90);

            fill(r, g, b);
            rect(x, y, gridSizeX, gridSizeY)
        }
    }

    drawCreature(width / 2, height / 2);
}

function drawCreature(x, y) {
    push();

    if (mouseIsPressed) {
        translate(mouseX, mouseY);
    } else {
        translate(x, y);
    }
    // user-defined function

    drawBody(0, 0, 100)
    drawEye(-40, -10, 10)
    drawTail(65, -6, 1)
    drawFin(-10, -49, 30)
    // four parts, all using transformation function
    pop();
}
function drawBody(x, y, size) {
    push();
    translate(x, y);

    noStroke();
    fill(255, 255, 0);
    ellipse(0, 0, size * 1.5, size)

    pop();
}

function drawEye(x, y, size) {
    push();
    translate(x, y);

    noStroke();

    fill(255)
    let off = noise(frameCount / 20) * 5;
    // referred to graphbook "4.2 Oscillation (2): Noise"

    ellipse(0, 0, size * 2.5, size * 2.5)
    fill(0);
    ellipse(-4, 0, size * 1.2 + off, size * 1.2 + off)

    pop();
}

function drawTail(x, y, size) {
    push();
    translate(x, y);
    let angle = map(sin(frameCount * 0.1), -1, 1, -0.5, 0.5);
    // referred to graphbook "3.2 Types of Motion (2): Oscillation, Angular Movement"

    rotate(angle);

    strokeWeight(10);
    stroke(255, 255, 0);
    fill(255, 255, 0);



    beginShape();
    splineVertex(0, 0);
    splineVertex(15, -15);
    splineVertex(30, -25);
    splineVertex(45, -32);
    splineVertex(70, -35);
    splineVertex(85, -32);
    splineVertex(100, -25);
    splineVertex(90, -18);
    splineVertex(100, -11);
    splineVertex(90, -4);
    splineVertex(100, 3);
    splineVertex(90, 10);
    splineVertex(100, 17);
    splineVertex(90, 24);
    splineVertex(100, 31);
    splineVertex(90, 38);
    endShape(CLOSE);


    pop();
}

function drawFin(x, y, size) {
    push();
    translate(x, y);
    let angle = map(sin(frameCount * 0.1), -1, 1, -0.03, 0.2);
    // referred to graphbook "3.2 Types of Motion (2): Oscillation, Angular Movement"

    rotate(angle);

    strokeWeight(10);
    stroke(255, 255, 0);
    fill(255, 255, 0);

    beginShape();
    splineVertex(0, 0);
    splineVertex(27, -20);
    splineVertex(35, 0);
    endShape(CLOSE);

    pop();
}
