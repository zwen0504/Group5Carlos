let img;
let numSegments = 20;
let segments = [];
let drawSegments = true;


function preload() {
  img = loadImage('Assets/Anwar Jalal Shemza Apple Tree.jpeg');
}

function setup() {
  createCanvas(img.width, img.height);
  let segmentWidth = img.width / numSegments;
  let segmentHeight = img.height / numSegments;


  for (let segYPos=0; segYPos<img.height; segYPos+=segmentHeight) {
    for (let segXPos=0; segXPos<img.width; segXPos+=segmentWidth) {
      let segmentColour = img.get(segXPos + segmentWidth / 2, segYPos + segmentHeight / 2);
       let segment = new ImageSegment(segXPos,segYPos,segmentWidth,segmentHeight,segmentColour);
       segments.push(segment);
    }
  }
}

function draw() {
  background(0);
  if (drawSegments) {
    //lets draw the segments to the canvas
    for (const segment of segments) {
      segment.draw();
    }
  } else {
    //lets draw the image to the canvas
    image(img, 0, 0);
  }
    //lets draw the base and trunk to the canvas
  drawBase();
  drawTrunk();
}

class ImageSegment {

  constructor(srcImgSegXPosInPrm,srcImgSegYPosInPrm,srcImgSegWidthInPrm,srcImgSegHeightInPrm,srcImgSegColourInPrm) {
    this.srcImgSegXPos = srcImgSegXPosInPrm;
    this.srcImgSegYPos = srcImgSegYPosInPrm;
    this.srcImgSegWidth = srcImgSegWidthInPrm;
    this.srcImgSegHeight = srcImgSegHeightInPrm;
    this.srcImgSegColour = srcImgSegColourInPrm;
  }

  draw() {
    stroke(0,0);
    fill(this.srcImgSegColour);
    rect(this.srcImgSegXPos, this.srcImgSegYPos, this.srcImgSegWidth, this.srcImgSegHeight);
  }
}