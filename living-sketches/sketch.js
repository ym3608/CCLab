// original images
let scannedImages = [];

// cropped parts of images
let ddm;
let tkm;
let symbol;

// define mouse function of images
let ddmX = 0;
let ddmY = 0;

let tkmX = 0;
let tkmY = 0;

let draggingDdm = false;
let draggingTkm = false;

// current indices for animation
let currentDdmIndex = 0;
let currentTkmIndex = 0;
let currentSymbolIndex = 0;

async function setup() {
  createCanvas(1600, 1000);

  // load all images first
  const imagePromises = [];
  for (let i = 0; i < 3; i++) {
    imagePromises.push(loadImage("assets/image" + i + ".jpg"));
  }
  scannedImages = await Promise.all(imagePromises);

  // erase background and crop images
  // how to use: eraseBackground(imageArray, threshold);
  // eraseBackground(scannedImages, 10);

  // crop parts of images
  // how to use: crop(imageArray, x, y, width, height);
  ddm = crop(scannedImages, 0, 0, 800, 800);
  tkm = crop(scannedImages, 1200, 0, 1200, 550);
  symbol = crop(scannedImages, 1300, 1000, 1200, 800);
}

function draw() {
  background(255);

  // update ddm index
  currentDdmIndex = floor((frameCount / 30) % ddm.length);
  // display ddm
  image(
    ddm[currentDdmIndex],
    ddmX + width * 0.05,
    ddmY + height * 0.08,
    ddm[0].width * 0.55,
    ddm[0].height * 0.55
  );

  // update tkm index
  currentTkmIndex = floor((frameCount / 30) % tkm.length);
  // display tkm

  image(
    tkm[currentTkmIndex],
    tkmX + width * 0.58,
    tkmY + height * 0.08,
    tkm[0].width * 0.55,
    tkm[0].height * 0.55
  );

  // update Symbol index
  currentSymbolIndex = floor((frameCount / 30) % symbol.length);

  let angle = map(sin(frameCount * 0.03), -1, 1, -PI / 6, PI / 6);

  push();

  translate(width * 0.72, height * 0.58);
  rotate(angle);
  // display symbol
  image(
    symbol[currentSymbolIndex],
    0,
    0,
    symbol[0].width * 0.3,
    symbol[0].height * 0.3
  );

  pop();
}

function mousePressed() {
  if (
    mouseX > ddmX + width * 0.05 &&
    mouseX < ddmX + width * 0.05 + ddm[0].width * 0.55 &&
    mouseY > ddmY + height * 0.08 &&
    mouseY < ddmY + height * 0.08 + ddm[0].height * 0.55
  ) {
    draggingDdm = true;
  }

  // check if mouse is on TKM
  else if (
    mouseX > tkmX + width * 0.58 &&
    mouseX < tkmX + width * 0.58 + tkm[0].width * 0.55 &&
    mouseY > tkmY + height * 0.08 &&
    mouseY < tkmY + height * 0.08 + tkm[0].height * 0.55
  ) {
    draggingTkm = true;
  }
}

function mouseDragged() {
  if (draggingDdm == true) {
    ddmX += movedX;
    ddmY += movedY;
  }

  if (draggingTkm == true) {
    tkmX += movedX;
    tkmY += movedY;
  }
}

function mouseReleased() {
  draggingDdm = false;
  draggingTkm = false;
}

// IMAGE PROCESSING FUNCTIONS
// You shouldn't need to modify these helper functions:
function crop(images, x, y, width, height) {
  const croppedImages = [];

  for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {
    croppedImages.push(images[imageIndex].get(x, y, width, height));
  }

  return croppedImages;
}

function eraseBackground(images, threshold = 10) {
  for (let imageIndex = 0; imageIndex < images.length; imageIndex++) {
    const currentImage = images[imageIndex];
    currentImage.loadPixels();

    for (
      let pixelIndex = 0;
      pixelIndex < currentImage.pixels.length;
      pixelIndex += 4
    ) {
      let distanceFromWhite = 255 - currentImage.pixels[pixelIndex];
      distanceFromWhite += 255 - currentImage.pixels[pixelIndex + 1];
      distanceFromWhite += 255 - currentImage.pixels[pixelIndex + 2];

      if (distanceFromWhite < threshold) {
        currentImage.pixels[pixelIndex + 3] = 0;
      }
    }

    currentImage.updatePixels();
  }
}
