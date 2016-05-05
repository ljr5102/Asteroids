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
      return;
    }
    switch (e.keyCode) {
      case 39:
        this.accX = 200;
        break;
      case 37:
        this.accX = -200;
        break;
      case 38:
        this.accY = -200;
        break;
      case 40:
        this.accY = 200;
        break;
    }
  };

  Ship.prototype.handleKeyUp = function(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 39:
        this.accX = 0;
        break;
      case 37:
        this.accX = 0;
        break;
      case 38:
        this.accY = 0;
        break;
      case 40:
        this.accY = 0;
        break;
    }
  };

  Ship.prototype.fireBullet = function() {
    if (this.velX === 0 && this.velY === 0) {
      return;
    }
    var bullet = Asteroids.Util.getBulletSpeed(this.velX, this.velY);
    this.bullets.push(new Asteroids.Bullet(this.posX, this.posY, bullet[0], bullet[1]));
    var that = this;
    this.firing = true;
    window.setTimeout(function(){
      this.firing = false;
    }.bind(this), 500);
  };


})(this);
