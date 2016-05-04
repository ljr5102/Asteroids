(function(root) {

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Ship = Asteroids.Ship = function() {
    Asteroids.MovingObject.call(this, 400, 300, 20, 0, 0);
    this.wrappable = true;
    this.bullets = [];
    window.addEventListener("keydown", this.handleKeyDown.bind(this));
    window.addEventListener("keyup", this.handleKeyUp.bind(this));
  };

  var keyBindings = {
    39: "right",
    37: "left",
    38: "up",
    40: "down"
  };

  Ship.prototype = Object.create(Asteroids.MovingObject.prototype);

  Ship.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  };

  Ship.prototype.handleKeyDown = function(e) {
    e.preventDefault();
    if (e.keyCode === 32 && !this.firing) {
      this.fireBullet();
      this.firing = true;
      return;
    }
    switch (e.keyCode) {
      case 39:
        this.velX = 200;
        break;
      case 37:
        this.velX = -200;
        break;
      case 38:
        this.velY = -200;
        break;
      case 40:
        this.velY = 200;
        break;
    }
  };

  Ship.prototype.handleKeyUp = function(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 39:
        this.velX = 0;
        break;
      case 37:
        this.velX = 0;
        break;
      case 38:
        this.velY = 0;
        break;
      case 40:
        this.velY = 0;
        break;
    }
  };

  Ship.prototype.fireBullet = function() {
    var xOp, yOp, bulletX, bulletY;
    if (this.velX && this.velY) {
      xOp = this.velX / Math.abs(this.velX);
      yOp = this.velY / Math.abs(this.velY);
      bulletX = this.posX + this.radius * xOp;
      bulletY = this.posY + this.radius * yOp;
      this.bullets.push(new Asteroids.Bullet(bulletX, bulletY, this.velX * 5, this.velY * 5));
    } else if (this.velX) {
      xOp = this.velX / Math.abs(this.velX);
      bulletX = this.posX + ((10 + this.radius) * xOp) ;
      this.bullets.push(new Asteroids.Bullet(bulletX, this.posY, this.velX * 5, 0));
    } else if (this.velY) {
      yOp = this.velY / Math.abs(this.velY);
      bulletY = this.posY + ((10 + this.radius) * yOp) ;
      this.bullets.push(new Asteroids.Bullet(this.posX, bulletY, 0, this.velY * 5));
    } else {
      this.bullets.push(new Asteroids.Bullet(this.posX, this.posY - this.radius - 10, 0, -1000));
    }
    var that = this;
    window.setTimeout(function(){
      this.firing = false;
    }.bind(this), 500);
  };


})(this);
