<<<<<<< Updated upstream
=======
// consulted chatGPT for help on the right definition format of variables such as "universeAppeared", "HitCount", "brokenLayers", "drawOneSmallFish" etc. 

>>>>>>> Stashed changes
let scene = 1;
// fish tank
let x, y;
let xSpeed, ySpeed;
let hitCount = 0;
let touchingWall = false;
let brokenLayers = 0;

// pond

// goldfish
let goldfishX = 320;
let goldfishY = 250;
let goldfishSize = 1;
let draggingGoldfish = false;

let goldfishR = 255;
let goldfishG = 255;
let goldfishB = 0;
let goldfishFinR = 255;
let goldfishFinG = 140;
let goldfishFinB = 20;


// small fish
let fishSize = 1;

let fish1X = 160;
let fish1Y = 160;
let fish1SpeedX = 2;
let fish1SpeedY = 1;

let fish2X = 250;
let fish2Y = 340;
let fish2SpeedX = -2;
let fish2SpeedY = 1;

let fish3X = 400;
let fish3Y = 170;
let fish3SpeedX = 1;
let fish3SpeedY = -2;

let fish4X = 200;
let fish4Y = 100;
let fish4SpeedX = -1;
let fish4SpeedY = 2;

let fish5X = 450;
let fish5Y = 350;
let fish5SpeedX = 2;
let fish5SpeedY = -1;

// Scene 3: Ocean
let oceanFishX = 200;
let oceanFishY = 350;
let oceanFishSpeed = 4;

// Fishing hook
let hookX = 200;
let hookY = 35;
let hookSpeed = 3;

// Collision
let fishHit = false;
let fishHitTime = 0;

// timer
let fishHitFrame = 0;
let scene3StartFrame = 0;
let scene3Started = false;

// Universe
let universeAppeared = false;
let universeX = 700;
let universeY = 250;

// scene universe
let shootingstarx, shootingstary;
let shootingstarxSpeed, shootingstarySpeed;

function setup() {
    createCanvas(800, 500);
    angleMode(DEGREES);
    x = width / 2;
    y = height / 2;
    xSpeed = random(-5, 5);
    ySpeed = random(-5, 5);
    shootingstarX = 50;
    shootingstarY = 200;
    shootingstarxSpeed = random(-5, 5);
    shootingstarySpeed = random(-5, 5);

}

function draw() {

    if (scene == 4) {
        goldfishFinR = map(sin(frameCount), -1, 1, 0, 255);
        goldfishFinG = map(sin(frameCount), -1, 1, 255, 0);
        goldfishFinB = map(sin(frameCount * 0.3), -1, 1, 0, 255);
    }

    //

    // fish tank
    if (scene == 1) {
        if (brokenLayers < 3) {
            // fish tank background
<<<<<<< Updated upstream
=======
            // Inspired by the examples from CCLab slides
>>>>>>> Stashed changes
            let gridSizeX = 800;
            let gridSizeY = 25;

            for (let bgX = 0; bgX < width; bgX += gridSizeX) {
                for (let bgY = 0; bgY < height; bgY += gridSizeY) {
                    noStroke();

                    let r = map(bgY, 0, height, 190, 100);
                    let g = map(bgY, 0, height, 235, 160);
                    let b = map(bgY, 0, height, 245, 90);

                    fill(r, g, b);

                    rect(bgX, bgY, gridSizeX, gridSizeY);
                }
            }

            // Three-layer fish tank

            noFill();
            stroke(255);
            strokeWeight(6);

            // Outer layer
            if (brokenLayers < 1) {
                beginShape();
                vertex(20, 20);
                vertex(780, 20);
                vertex(730, 480);
                vertex(70, 480);
                endShape(CLOSE);

                // Top
                line(20, 20, 780, 20);
            }

            // Middle layer
            if (brokenLayers < 2) {
                beginShape();
                vertex(30, 30);
                vertex(770, 30);
                vertex(720, 470);
                vertex(80, 470);
                endShape(CLOSE);

                // Top
                line(30, 30, 770, 30);
            }

            // Inner layer
            if (brokenLayers < 3) {
                beginShape();
                vertex(40, 40);
                vertex(760, 40);
                vertex(710, 460);
                vertex(90, 460);
                endShape(CLOSE);

                // Top
                line(40, 40, 760, 40);
            }

            x = x + xSpeed;
            y = y + ySpeed;

            // Turn around at the left wall
            if (x < 100 && xSpeed < 0) {
                xSpeed = xSpeed * -1;
            }

            // Turn around at the right wall
            if (x > 700 && xSpeed > 0) {
                xSpeed = xSpeed * -1;
            }

            // Bounce off the top wall
            if (y < 80 && ySpeed < 0) {
                ySpeed = ySpeed * -1;
            }

            // Bounce off the bottom wall
            if (y > 430 && ySpeed > 0) {
                ySpeed = ySpeed * -1;
            }

            drawCreature(x, y, 1);
            fill(255);
            noStroke();
            textSize(18);
            text("Try dragging the fish to break the tank!", 60, 120);
            fill(255);
            noStroke();
            textSize(18);
            text("Hits: " + hitCount, 60, 150);

            if (brokenLayers >= 3) {
                scene = 2;
            }
        }
    }

    // pond
    else if (scene == 2) {
        drawBackground2();
    } else if (scene == 3) {
        drawBackground3();
    } else if (scene == 4) {
        // Background 4
        drawBackground4();
    }
}

function drawCreature(x, y, size) {
    push();

    if (scene == 1 && mouseIsPressed) {
        translate(mouseX, mouseY);
    } else {
        translate(x, y);
    }
    // user-defined function
    scale(size);

    if (xSpeed > 0) {
        scale(-1, 1);
    }

    // Detect wall collisions while dragging
    if (scene == 1) {
        if (mouseIsPressed && brokenLayers < 3) {
            if (mouseX < 100 || mouseX > 700 || mouseY < 80 || mouseY > 430) {
<<<<<<< Updated upstream
=======
                // consulted chatGPT for the syntax of the true/false definition of the variable "touchingWall"
>>>>>>> Stashed changes
                if (touchingWall == false) {
                    hitCount = hitCount + 1;
                    touchingWall = true;

                    // Every two hits break one layer
<<<<<<< Updated upstream
=======
                    // Got the inspiration from TA Li
>>>>>>> Stashed changes
                    if (hitCount % 2 == 0) {
                        brokenLayers = brokenLayers + 1;
                    }
                }
            } else {
                touchingWall = false;
            }
        }
    }


    drawTail(65, -6, 1);
    drawFin(-10, -49, 30);
    drawBody(0, 0, 100);
    drawEye(-40, -10, 10);


    // four parts, all using transformation function
    pop();
}
function drawBody(x, y, size) {
    push();
    translate(x, y);

<<<<<<< Updated upstream
=======
    // Got the instruction of Professor Moon to set different colors of fishy in scene 2, 3 and 4

>>>>>>> Stashed changes
    fill(goldfishR, goldfishG, goldfishB);
    if (scene == 1) {
        noStroke();
        fill(goldfishR, goldfishG, goldfishB);
    }


    if (scene == 3 || scene == 4) {
        noStroke();
        fill(goldfishFinR, goldfishFinG, goldfishFinB);
    }
    ellipse(0, 0, size * 1.5, size);

    pop();
}

function drawEye(x, y, size) {
    push();
    translate(x, y);

    noStroke();
    fill(255);

    let off = noise(frameCount / 20) * 5;
    // referred to graphbook "4.2 Oscillation (2): Noise"

    ellipse(0, 0, size * 2.5, size * 2.5);
    fill(0);
    ellipse(-4, 0, size * 1.2 + off, size * 1.2 + off);

    pop();
}

function drawTail(x, y, size) {
    push();
    translate(x, y);
    let angle = map(sin(frameCount * 3), -1, 1, -10, 10);
    // referred to graphbook "3.2 Types of Motion (2): Oscillation, Angular Movement"

    rotate(angle);

    if (scene == 1) {
        strokeWeight(10);
        stroke(goldfishR, goldfishG, goldfishB);
        fill(goldfishR, goldfishG, goldfishB);
    }


    if (scene == 2 || scene == 3 || scene == 4) {
        strokeWeight(10);
        stroke(goldfishFinR, goldfishFinG, goldfishFinB);
        fill(goldfishFinR, goldfishFinG, goldfishFinB);
    }

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
    let angle = map(sin(frameCount * 4), -1, 1, -4, 10);
    // referred to graphbook "3.2 Types of Motion (2): Oscillation, Angular Movement"

    rotate(angle);

    if (scene == 1) {
        strokeWeight(10);
        stroke(goldfishR, goldfishG, goldfishB);
        fill(goldfishR, goldfishG, goldfishB);
    }


    if (scene == 2 || scene == 3 || scene == 4) {
        strokeWeight(10);
        stroke(goldfishFinR, goldfishFinG, goldfishFinB);
        fill(goldfishFinR, goldfishFinG, goldfishFinB);
    }
    beginShape();
    splineVertex(0, 0);
    splineVertex(27, -20);
    splineVertex(35, 0);
    endShape(CLOSE);

    pop();
}

function drawBackground2() {
    // Background
    background(120, 190, 175);

    // Ocean on the right
    noStroke();
    fill(20, 100, 150);
    rect(620, 0, 180, height);

    // Pond water
    fill(110, 205, 185);
    noStroke();
    ellipse(320, 250, 560, 400);

    // White oval border with a smaller gap
    noFill();
    stroke(255);
    strokeWeight(7);
    arc(320, 250, 560, 400, 5, 355);

    // Label near the gap
    noStroke();
    fill(255);
    textSize(18);
    text("To the ocean", 555, 245);

    fill(255);
    noStroke();
    textSize(12);
    textAlign(CENTER);
<<<<<<< Updated upstream
=======
    // text align is consulted from chatGPT
>>>>>>> Stashed changes
    text("You did it! Now you enter the pond.", 640, 35);
    text("There are a lot of fish friends, but they seem trapped...", 640, 60);
    text("How can you pass the gap and reach the ocean?", 640, 85);

    // Draw and move the small fish
    drawSmallFish();

    // Draw the main goldfish
    drawPondGoldfish();
}
function drawSmallFish() {
    // Move fish 1
    fish1X = fish1X + fish1SpeedX;
    fish1Y = fish1Y + fish1SpeedY;

    if (fish1X < 120 || fish1X > 500) {
        fish1SpeedX = -fish1SpeedX;
    }
    if (fish1Y < 100 || fish1Y > 380) {
        fish1SpeedY = -fish1SpeedY;
    }

    // Move fish 2
    fish2X = fish2X + fish2SpeedX;
    fish2Y = fish2Y + fish2SpeedY;

    if (fish2X < 120 || fish2X > 500) {
        fish2SpeedX = -fish2SpeedX;
    }
    if (fish2Y < 100 || fish2Y > 380) {
        fish2SpeedY = -fish2SpeedY;
    }

    // Move fish 3
    fish3X = fish3X + fish3SpeedX;
    fish3Y = fish3Y + fish3SpeedY;

    if (fish3X < 120 || fish3X > 500) {
        fish3SpeedX = -fish3SpeedX;
    }
    if (fish3Y < 100 || fish3Y > 380) {
        fish3SpeedY = -fish3SpeedY;
    }

    // Move fish 4
    fish4X = fish4X + fish4SpeedX;
    fish4Y = fish4Y + fish4SpeedY;

    if (fish4X < 120 || fish4X > 500) {
        fish4SpeedX = -fish4SpeedX;
    }
    if (fish4Y < 100 || fish4Y > 380) {
        fish4SpeedY = -fish4SpeedY;
    }

    // Move fish 5
    fish5X = fish5X + fish5SpeedX;
    fish5Y = fish5Y + fish5SpeedY;

    if (fish5X < 120 || fish5X > 500) {
        fish5SpeedX = -fish5SpeedX;
    }
    if (fish5Y < 100 || fish5Y > 380) {
        fish5SpeedY = -fish5SpeedY;
    }

    drawOneSmallFish(fish1X, fish1Y, 34);
    drawOneSmallFish(fish2X, fish2Y, 32);
    drawOneSmallFish(fish3X, fish3Y, 36);
    drawOneSmallFish(fish4X, fish4Y, 31);
    drawOneSmallFish(fish5X, fish5Y, 33);
}

function drawOneSmallFish(x, y, fishSize) {
    push();
    translate(x, y);
    noStroke();

    // Body
    fill(255, 165, 70);
    ellipse(0, 0, fishSize * 1.5, fishSize);

    // Tail
    fill(255, 190, 90);
    triangle(
        fishSize * 0.5,
        0,
        fishSize * 1.3,
        -fishSize * 0.6,
        fishSize * 1.3,
        fishSize * 0.6
    );

    // Eye
    fill(255);
    circle(-fishSize * 0.35, -fishSize * 0.15, fishSize * 0.3);

    fill(0);
    circle(-fishSize * 0.4, -fishSize * 0.15, fishSize * 0.15);

    pop();
}

function drawPondGoldfish() {
    push();

    translate(goldfishX, goldfishY);
    scale(goldfishSize);
    scale(-1, 1);

    drawFin(-10, -49, 30);
    drawTail(65, -6, 1);
    drawBody(0, 0, 100);
    drawEye(-40, -10, 10);



    pop();
}

function mousePressed() {
    if (scene == 2 && goldfishSize > 0.25) {
<<<<<<< Updated upstream
=======
        // distance function syntax consulted from chatGPT
>>>>>>> Stashed changes
        if (dist(mouseX, mouseY, goldfishX, goldfishY) < 100 * goldfishSize) {
            goldfishSize = goldfishSize * 0.5;
        }
    }
}

function mouseDragged() {
    if (scene == 2 && goldfishSize <= 0.25) {
        goldfishX = mouseX;
        goldfishY = mouseY;

        if (goldfishX > 620 && goldfishY > 230 && goldfishY < 270) {
            scene = 3;
            draggingGoldfish = false;
        }
    }
}

function mouseReleased() {
    draggingGoldfish = false;
}
function drawBackground3() {
    background(20, 100, 150);
    fill(255);
    noStroke();
    textSize(16);
    text(
        "Amazing! Now you're in an endless ocean with juicy food.",
        width / 2,
        40
    );
    text(
        "Shall we try it? Use the arrow keys on your keyboard to move around!",
        width / 2,
        65
    );

    // Start timer
<<<<<<< Updated upstream
=======
    // consulted chatGPT for the true/false syntax of the timer
>>>>>>> Stashed changes
    if (scene3Started == false) {
        scene3StartFrame = frameCount;
        scene3Started = true;
    }

    // Move hook at a constant speed
    hookX = hookX + hookSpeed;

    if (hookX >= 760) {
        hookX = 760;
        hookSpeed = hookSpeed * -1;
    }

    if (hookX <= 40) {
        hookX = 40;
        hookSpeed = hookSpeed * -1;
    }

    // Draw fishing line
    stroke(30);
    strokeWeight(2);
    line(hookX, 0, hookX, hookY + 80);

    // Draw hook
    noFill();
    stroke(30);
    strokeWeight(4);
    arc(hookX + 5, hookY + 95, 28, 34, 0, 270);

    // Draw bait
    noStroke();
    fill(230, 160, 90);
    ellipse(hookX + 17, hookY + 95, 15, 15);

    // Check collision with the actual bait position
<<<<<<< Updated upstream
=======
    // consulted chatGPT for the true/false syntax of the variable "fishHit"
>>>>>>> Stashed changes
    if (fishHit == false) {
        if (dist(oceanFishX, oceanFishY, hookX + 17, hookY + 95) < 40) {
            fishHit = true;
            fishHitFrame = frameCount * 1.1;
        }
    }

    // Control fish only when not hit
    if (fishHit == false) {
<<<<<<< Updated upstream
=======
        // consulted chatGPT for the definition format of arrow keys
>>>>>>> Stashed changes
        if (keyIsDown(LEFT_ARROW)) {
            oceanFishX = oceanFishX - oceanFishSpeed;
        }

        if (keyIsDown(RIGHT_ARROW)) {
            oceanFishX = oceanFishX + oceanFishSpeed;
        }

        if (keyIsDown(UP_ARROW)) {
            oceanFishY = oceanFishY - oceanFishSpeed;
        }

        if (keyIsDown(DOWN_ARROW)) {
            oceanFishY = oceanFishY + oceanFishSpeed;
        }
    }

    // Keep fish inside canvas
    if (oceanFishX < 50) {
        oceanFishX = 50;
    }
    if (oceanFishX > 750) {
        oceanFishX = 750;
    }
    if (oceanFishY < 150) {
        oceanFishY = 150;
    }
    if (oceanFishY > 450) {
        oceanFishY = 450;
    }

    // Draw fish
    drawOceanFish();

    // Freeze for five seconds, then recover
    if (fishHit == true) {
        if (fishHit == true) {
            fill(255);
            noStroke();
            textSize(16);
            text("No! We should say no to seemingly", width / 2, 250);
            text('"shortcut" temptations on our way to growth.', width / 2, 275);
            text("Hide from the hook!", width / 2, 300);
        }
        if (frameCount - fishHitFrame >= 300) {
            fishHit = false;
        }
    }

    // Show universe after fifteen seconds
<<<<<<< Updated upstream
=======
    // consulted cahtGPT for the alighned interval of 15 seconds in frameCount
>>>>>>> Stashed changes
    if (frameCount - scene3StartFrame >= 600) {
        universeAppeared = true;
    }

    if (universeAppeared == true) {
        noStroke();
        fill(0);
        ellipse(universeX, universeY, 100, 100);

        fill(255);
        textSize(18);
        text("To the universe", universeX - 65, universeY - 65);

        if (dist(oceanFishX, oceanFishY, universeX, universeY) < 65) {
            scene = 4;
        }
    }
}
function drawOceanFish() {
    push();

    translate(oceanFishX, oceanFishY);
    scale(-1, 1);

    // Fish body always stays visible
    drawBody(0, 0, 100);

    if (fishHit == false) {
        drawEye(-40, -10, 10);
        drawTail(65, -6, 1);
        drawFin(-10, -49, 30);
    } else {
        // X-shaped eyes
        stroke(0);
        strokeWeight(3);

        line(-47, -17, -37, -7);
        line(-37, -17, -47, -7);

        line(-30, -17, -20, -7);
        line(-20, -17, -30, -7);

        drawTail(65, -6, 1);
        drawFin(-10, -49, 30);
    }

    pop();
}
function drawBackground4() {
    background(0, 30);
    fill(255);
    noStroke();
    textSize(15);

    text("Congratulations, fishy! Now you are BEYOND THE BOWL.", width / 2, 40);
    text(
        "Well done on your adaptation, discovery of individuality,",
        width / 2,
        65
    );
    text("and breakthroughs beyond the boundaries!", width / 2, 90);
    text("Hope you also learn to be adaptive and brave enough", width / 2, 115);
    text("to break real-life obstacles!", width / 2, 140);
    text("Feeling happy? There's a little surprise waiting for you!", 400, 460);

<<<<<<< Updated upstream
=======
    // shootingstar scene is inspired by graphbook 3.1 Types of Motion (1), Math Functions
>>>>>>> Stashed changes
    shootingstarX = shootingstarX + xSpeed;
    shootingstarY = shootingstarY + ySpeed;

    if (shootingstarX < 0) {
        shootingstarX = width;
    } else if (shootingstarX > width) {
        shootingstarX = 0;
    }
    if (shootingstarY < 0) {
        shootingstarY = height;
    } else if (shootingstarY > height) {
        shootingstarY = 0;
    }

    noStroke();
    fill(255);
    circle(shootingstarX, shootingstarY, 10);

    // Earth
    let earthX = width / 2;
    let earthY = height / 2;
    let earthSize = 180;

    // Blue ocean
    noStroke();
    fill(30, 130, 200);
    circle(earthX, earthY, earthSize);

    // Land 1: upper left
    fill(80, 170, 90);
    beginShape();
    vertex(335, 190);
    vertex(355, 175);
    vertex(380, 185);
    vertex(390, 205);
    vertex(370, 220);
    vertex(350, 215);
    vertex(340, 230);
    vertex(325, 210);
    endShape(CLOSE);

    // Land 2: upper right
    fill(100, 185, 95);
    beginShape();
    vertex(410, 185);
    vertex(435, 195);
    vertex(445, 215);
    vertex(430, 230);
    vertex(415, 220);
    vertex(400, 205);
    endShape(CLOSE);

    // Land 3: lower left
    fill(75, 160, 80);
    beginShape();
    vertex(350, 245);
    vertex(370, 235);
    vertex(390, 250);
    vertex(385, 275);
    vertex(365, 290);
    vertex(350, 270);
    endShape(CLOSE);

    // Land 4: lower right
    fill(100, 180, 90);
    beginShape();
    vertex(405, 250);
    vertex(430, 240);
    vertex(445, 255);
    vertex(435, 275);
    vertex(415, 285);
    vertex(400, 270);
    endShape(CLOSE);

    // Small fish in the universe
    push();
    translate(580, 380);
    scale(1);
    drawBody(0, 0, 100);
    drawTail(65, -6, 1);
    drawFin(-10, -49, 30);

    // Fish eyes
    if (key == "h") {
        // Closed, smiling eyes when H is pressed
        stroke(0);
        strokeWeight(4);
        noFill();

        arc(-40, -10, 12, 8, 180, 360);
        arc(-20, -10, 12, 8, 180, 360);
    } else {
        // Normal eyes
        drawEye(-40, -10, 10);
    }
    pop();
}
