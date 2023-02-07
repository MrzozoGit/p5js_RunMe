// Variables
// À modifier pour alterer la demo
let canvasWidth = 800; // width of the p5 canvas
let canvasHeight = 500; // height of the p5 canvas
let backgroundColor = '#FFFFEE'; // background color of the canvas
let framerate = 100; // framerate 
let speed = 0.01; // speed of the elements
let pinkTexture;
let toastTexture;

// Preload items
function preload() {
  // Load texture image
  pinkTexture = loadImage('img/pni50026.jpg'); // load image into the variable
  toastTexture = loadImage('img/cc440038.jpg');
}

// Setup the canvas
function setup() {
  // Create canvas
  createCanvas(canvasWidth, canvasHeight, WEBGL);

  // Setup canvas framerate
  frameRate(framerate);

  // Sets the current material as a normal material for 3D objects
  normalMaterial(); 
}

// Do something every frame
function draw() {
  background(backgroundColor); // render the background
  translate(-240, -100, 0); // move the whole content of the canvas to center the shapes

  let locX = mouseX - height / 2; // move light source around the mouse
  let locY = mouseY - width / 2;

  ambientLight(backgroundColor); // create an ambient light (that doesn't come from a specific direction) with given color
  directionalLight(255, 255, 255, 0.25, 0.25, 0); // create a directional light with given color and direction
  pointLight(255, 255, 255, locX, locY, 250); // create a point of light with given color and position
  // note: light doesn't apply to normal material

  // Do something if mouse is pressed
  if(mouseIsPressed) {
    texture(toastTexture); // pass image as texture 
  } else {
    texture(pinkTexture);
  }

  push(); // saves the current drawing style settings and transformations
  rotateZ(frameCount * speed); // rotate plane on z axis
  rotateX(frameCount * speed); // rotate plane on x axis
  rotateY(frameCount * speed); // rotate plane on y axis
  plane(70); // create a 3D flat plane
  pop(); // restores the settings

  translate(240, 0, 0);
  push();
  rotateZ(-frameCount * speed);
  rotateX(-frameCount * speed);
  rotateY(-frameCount * speed);
  box(70, 70, 70); // create a 3D box
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * speed);
  rotateX(frameCount * speed);
  rotateY(frameCount * speed);
  cylinder(70, 70); // create a 3D cylinder
  pop();

  translate(-240 * 2, 200, 0);
  push();
  rotateZ(-frameCount * speed);
  rotateX(-frameCount * speed);
  rotateY(-frameCount * speed);
  cone(70, 70); // create a 3D cone
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * speed);
  rotateX(frameCount * speed);
  rotateY(frameCount * speed);
  torus(70, 20); // create a 3D torus
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(-frameCount * speed);
  rotateX(-frameCount * speed);
  rotateY(-frameCount * speed);
  sphere(70); // creata a 3D sphere
  pop();
}

// Do something on click
function mouseClicked() {
  if (speed === 0.01) {
    // backgroundColor = '#F47F7F'
    speed = 0.05;
  } else {
    // backgroundColor = '#FFFFEE';
    speed = 0.01;
  }
}