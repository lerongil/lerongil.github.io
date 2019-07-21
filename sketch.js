let x, y;

let d;

let xspeed, yspeed;

let r, g, b;

let w = dvd.width; 

let h = dvd.height;

let W = windowWidth;

let H = windowHeight;



function preload () {
  dvd = loadImage('dvd-cases-4.gif')
}

function windowResized () {
  resizeCanvas(windowWidth, windowHeight)
}

function setup () {
  createCanvas(windowWidth, windowHeight)
  x = random(width)
  y = random(height)
  xspeed = 10
  yspeed = 10
  r = random(256)
  g = random(256)
  b = random(256)
  pickColor()
}

function pickColor () {
  r = random(100, 256)
  g = random(100, 256)
  b = random(100, 256)
}

function draw () {
  background(0)
  // Draw the DVD logo
  tint(r, g, b)
  image(dvd, x, y)

  x = x + xspeed
  y = y + yspeed

  if (x + dvd.width >= width) {
    xspeed = -xspeed
    x = width - dvd.width
    pickColor()
  } else if (x <= 0) {
    xspeed = -xspeed
    x = 0
    pickColor()
  }

  if (y + dvd.height >= height) {
    yspeed = -yspeed
    y = height - dvd.height
    pickColor()
  } else if (y <= 0) {
    yspeed = -yspeed
    y = 0
    pickColor()
  }
<<<<<<< HEAD
}
=======
  }
>>>>>>> f4b793a437e8e092706be2151a972185140f6d55

