let bubbles = [];
let messages = [
  "How to tell others that I'm hungry?",
  "Why cannot my parents accompany me more?",
  "Why I cannot afford an international school?",
];

let nextMessageIndex = 0;
let trash;
let selectedBubble = false;

function setup() {
  createCanvas(1000, 600);

  trash = new TrashCan(500, 420, 65, 65);

  for (let i = 0; i < 3; i++) {
    createBubble();
  }
}

function draw() {
  background(230, 220, 245);

  for (let i = 0; i < bubbles.length; i++) {
    let b = bubbles[i];

    b.drag();
    b.display();
  }

  trash.display();
}

// Create a new bubble
function createBubble() {
  let b = new Bubble(random(50, 400), random(80, 500), random(15, 25));
  bubbles.push(b);
}

class Bubble {
  constructor(x, y, rad) {
    this.x = x;
    this.y = y;
    this.originalX = x;
    this.originalY = y;
    this.rad = rad;
    this.color = color(255, 0, 0);
    this.dragging = false;
    this.message = "";
    this.isPopped = false;
  }

  display() {
    push();
    noStroke();
    fill(this.color);

    let size = this.rad;

    if (this.isPopped) {
      size = this.rad * 1.5;
    }

    circle(this.x, this.y, size * 2);

    pop();

    this.displayText();
  }

  checkMouse() {
    let dst = dist(this.x, this.y, mouseX, mouseY);

    if (dst < this.rad) {
      return true;
    } else {
      return false;
    }
  }

  dragStart() {
    this.dragging = true;
  }

  drag() {
    if (this.dragging) {
      this.x = mouseX;
      this.y = mouseY;
    }
  }

  release(trash) {
    this.dragging = false;

    let dst = dist(this.x, this.y, trash.x, trash.y);

    if (dst < trash.w / 2) {
      return true;
    } else {
      // Return to original position
      this.x = this.originalX;
      this.y = this.originalY;

      return false;
    }
  }

  // Show  text
  popUp(message) {
    this.isPopped = true;
    this.message = message;
  }

  // Display text on bubble
  displayText() {
    if (this.isPopped) {
      push();
      translate(this.x, this.y);
      textAlign(CENTER, CENTER);
      textSize(12);

      noStroke();
      fill(0);

      text(this.message, 0, 0, 100, 60);

      pop();
    }
  }
}

class TrashCan {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    push();

    rectMode(CENTER);
    fill(100);
    noStroke();

    // Trash can body
    rect(this.x, this.y, this.w, this.h, 8);

    pop();
  }
}

// Click and select a bubble
function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (bubbles[i].checkMouse()) {
      selectedBubble = bubbles[i];

      selectedBubble.dragStart();

      if (selectedBubble.isPopped == false) {
        selectedBubble.popUp(messages[nextMessageIndex]);

        nextMessageIndex++;

        if (nextMessageIndex >= messages.length) {
          nextMessageIndex = 0;
        }
      }
    }
  }
}

// Release bubble
function mouseReleased() {
  if (selectedBubble) {
    let isInTrash = selectedBubble.release(trash);

    if (isInTrash) {
      // Remove the old bubble
      let index = bubbles.indexOf(selectedBubble);
      bubbles.splice(index, 1);

      // Create a new bubble
      createBubble();
    }

    selectedBubble = false;
  }
}
