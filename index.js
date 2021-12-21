let snake;
let food;
const SCREEN_SCALE = 20;
const SCREEN_SIZE = 600;

function setup(){
    createCanvas(SCREEN_SIZE,SCREEN_SIZE);
    snake = new Snake();
}

function draw(){
    background(51);
    snake.setValues();
    snake.print();
}

function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;

    this.setDirection = function(x, y){
        this.xspeed=x;
        this.yspeed=y;
    }

    this.setValues = function(x,y){
        this.x <= + SCREEN_SIZE ? this.x += this.xspeed : this.x=0;
        this.y <= + SCREEN_SIZE ? this.y += this.yspeed : this.y=0;
    }

    this.print = function() {
        fill(255);
        rect(this.x, this.y, 10, 10);
    }


}

function keyPressed(){
    switch(keyCode){
        case UP_ARROW:
            snake.setDirection(0, -1);
            break;
        case DOWN_ARROW:
            snake.setDirection(0, 1);
            break;
        case RIGHT_ARROW:
            snake.setDirection(1, 0);
            break;
        case LEFT_ARROW:
            snake.setDirection(-1, 0);
            break;
    }
}