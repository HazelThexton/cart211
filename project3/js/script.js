/******************************************************

Project 3

Hazel Thexton, Janet Sun, Joseph Power & Amanda Clement


******************************************************/
// Tracks the advancement of time
let time = 0;

let lag = 2.5;

// Player position, size, velocity, and direction
let player = {
  x : 0,
  y : 0,
  size : 20,
  speed : 8,
  // Player image
  image : 0,
  // Player rotation
  rotate : 0
}

let country = [6];
// country position, size, and image lets
country[0] = {
  x : 0.656,
  y : 0.39,
  width: 0.247,
  height: 0.517,
  distance: 0,
  visible: false,
  lag: 10,
  // country image
  image : 0
}

country[1] = {
  x : 0.42,
  y : 0.5,
  width: 0.19,
  height: 0.38,
  distance: 0,
  visible: false,
  lag: 9.4,
  // country image
  image : 0
}

country[2] = {
  x : 0,
  y : 0,
  width: 0.415,
  height: 0.99,
  distance: 0,
  visible: false,
  lag: 7,
  // country image
  image : 0
}

country[3] = {
  x : 0.402,
  y : 0.195,
  width: 0.15,
  height: 0.303,
  distance: 0,
  visible: false,
  lag: 3.8,
  // country image
  image : 0
}

country[4] = {
  x : 0.532,
  y : 0.07,
  width: 0.469,
  height: 0.45,
  distance: 0,
  visible: false,
  lag: 10.6,
  // country image
  image : 0
}

country[5] = {
  x : 0.442,
  y : 0.49,
  width: 0.225,
  height: 0.138,
  distance: 0,
  visible: false,
  lag: 12.4,
  // country image
  image : 0
}

// preload()
//
// Preloads our sound and images
function preload() {
  backgroundImage = loadImage("assets/images/background.png");
  player.image = loadImage("assets/images/player.png");
  for (let i = 0; i < 6; i++) {
    country[i].image = loadImage("assets/images/country" + [i] + ".png");
  }
}

// setup()
//
// Sets up the basic elements of the game
function setup() {
  createCanvas(windowWidth,windowHeight);

  setupPlayer();
}

// setupPlayer()
//
// Initialises player position
function setupPlayer() {
  player.x = mouseX;
  player.y = mouseY;
}

// draw()
//
// While the game is active, checks input
// updates positions of country and player,
// displays the two agents.
function draw() {

  background(backgroundImage);

  playerRotation();

  movePlayer();

  checkOverlap();

  for (let i = 0; i < 6; i++) {
    if (country[i].visible){
      drawcountry(i);
    }
  }

  drawPlayer();

  //  gameText();
}

// textFormat()
//
// Text size, color, etc.
function textFormat() {
  textSize(40);
  fill(255);
  stroke(50,100,255);
  strokeWeight(4);
}

// playerRotation()
//
// Rotate the airplane to the mouse position
function playerRotation() {
  player.rotate = atan2(mouseY - player.y, mouseX - player.x) + 90;
}

// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {

  // Calculate the distance in X and in Y
  let xDistance = mouseX - player.x;
  let yDistance = mouseY - player.y;
  // Add 1/50th of the x and y distance to the peanut image's current (x,y) location
  player.x = player.x + xDistance/lag;
  player.y = player.y + yDistance/lag;

  console.log(lag);
}

// checkOverlap()
//
// Check if the player overlaps the country and updates health of both
function checkOverlap() {
  let ctx = canvas.getContext('2d');
  let imgData = ctx.getImageData(player.x, player.y,1,1);

  // background RGBA is 0, 44, 25, 255, so if the data matches this, the player is not overlapping a country.
  // but which one?
  if (imgData.data[0] === 10) {
    for (let i = 0; i < 6; i++) {
      country[i].visible = false;
    }
    country[0].visible = true;
    lag = country[0].lag;
  }

  else if (imgData.data[0] === 11){
    for (let i = 0; i < 6; i++) {
      country[i].visible = false;
    }
    country[1].visible = true;
    lag = country[1].lag;
  }

  else if (imgData.data[0] === 12){
    for (let i = 0; i < 6; i++) {
      country[i].visible = false;
    }
    country[2].visible = true;
    lag = country[2].lag;
  }

  else if (imgData.data[0] === 13){
    for (let i = 0; i < 6; i++) {
      country[i].visible = false;
    }
    country[3].visible = true;
    lag = country[3].lag;
  }

  else if (imgData.data[0] === 14){
    for (let i = 0; i < 6; i++) {
      country[i].visible = false;
    }
    country[4].visible = true;
    lag = country[4].lag;
  }

  else if (imgData.data[0] === 15){
    for (let i = 0; i < 6; i++) {
      country[i].visible = false;
    }
    country[5].visible = true;
    lag = country[5].lag;
  }

  else {
    for (let i = 0; i < 6; i++) {
      country[i].visible = false;
    }
    lag = 2.5;
  }

}

// drawcountry()
//
// Draw the country
function drawcountry(i) {

  image(country[i].image,width*country[i].x,height*country[i].y, width*country[i].width, height*country[i].height);
}

// drawPlayer()
//
// Draw the player with alpha based on health
function drawPlayer() {
  push();
  // Moves the origin to the target image location
  translate(player.x, player.y);
  // Rotates the image around the new origin (so, it rotates on itself)
  rotate(player.rotate);
  imageMode(CORNER);
  image(player.image,0,0,player.size,player.size * 1.5);
  pop();
}
