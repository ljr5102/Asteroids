(function(root){

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function(posX, posY, radius, velX, velY) {
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
    this.velX = velX;
    this.velY = velY;
    this.remove = false;
  };

  MovingObject.prototype.move = function(elapsed) {
    if (this.accX) {
      this.velX = this.velX + this.accX * (elapsed / 1000);
    }
    if (this.accY) {
      this.velY = this.velY + this.accY * (elapsed / 1000);
    }
    this.posX = this.posX + this.velX * (elapsed / 1000);
    this.posY = this.posY + this.velY * (elapsed / 1000);
  };

  MovingObject.prototype.wrap = function() {
    if (this.wrappable) {
      if (Asteroids.Util.outOfBoundsX(this)) {
        this.posX = this.posX > 0 ? (-this.radius) : (800 + this.radius);
      }
      if (Asteroids.Util.outOfBoundsY(this)) {
        this.posY = this.posY > 0 ? (-this.radius) : (600 + this.radius);
      }
    }
  };

})(this);
