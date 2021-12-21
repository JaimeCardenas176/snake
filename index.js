const SCREEN_SCALE = 20;
const SCREEN_SIZE = 600;
let snake;
let food;

function setup() {
  createCanvas(SCREEN_SIZE, SCREEN_SIZE);
  snake = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / SCREEN_SCALE);
  let rows = floor(height / SCREEN_SCALE);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(SCREEN_SCALE);
}

function mousePressed() {
  snake.total++;
}

function draw() {
  background(51);
  if (snake.onEat(food)) {
    pickLocation();
  }
  snake.onDeath();
  snake.updatePos();
  snake.print();
  fill(255, 0, 100);
  rect(food.x, food.y, SCREEN_SCALE, SCREEN_SCALE);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.setDirection(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDirection(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDirection(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.setDirection(-1, 0);
  }
}