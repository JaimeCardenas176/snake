function Snake() {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  
    this.onEat = function(pos) {
      let d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        this.total++;
        return true;
      } else {
        return false;
      }
    };
  
    this.setDirection = function(x, y) {
      this.xspeed = x;
      this.yspeed = y;
    };
  
    this.onDeath = function() {
      for (let i = 0; i < this.tail.length; i++) {
        let pos = this.tail[i];
        let d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
          this.total = 0;
          this.tail = [];
        }
      }
    };
  
    this.updatePos = function() {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
      if (this.total >= 1) {
        this.tail[this.total - 1] = createVector(this.x, this.y);
      }
  
      this.x = this.x + this.xspeed * SCREEN_SCALE;
      this.y = this.y + this.yspeed * SCREEN_SCALE;
      this.checkBounds();
      
    }
  
    this.print = function() {
      fill(255);
      for (let i = 0; i < this.tail.length; i++) {
        rect(this.tail[i].x, this.tail[i].y, SCREEN_SCALE, SCREEN_SCALE);
      }
      rect(this.x, this.y, SCREEN_SCALE, SCREEN_SCALE);
    }

    this.checkBounds = function(){
      
      if(this.x > SCREEN_SIZE) this.x=0;

      if(this.x < 0) this.x=SCREEN_SIZE;

      if(this.y > SCREEN_SIZE) this.y=0;

      if(this.y < 0) this.y=SCREEN_SIZE;
    }

  }

