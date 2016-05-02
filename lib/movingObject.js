(function(root){

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function(posX, posY, radius, velX, velY) {
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
    this.velX = velX;
    this.velY = velY;
  };

  MovingObject.prototype.move = function(elapsed) {
    this.posX = this.posX + this.velX * (elapsed / 1000);
    this.posY = this.posY + this.velY * (elapsed / 1000);
  };

  var outOfBoundsX = function(obj) {
    if((obj.posX - obj.radius) > 800 || (obj.posX + obj.radius) < 0) {
      return true;
    } else {
      return false;
    }
  };

  var outOfBoundsY = function(obj) {
    if((obj.posY - obj.radius) > 600 || (obj.posY + obj.radius) < 0) {
      return true;
    } else {
      return false;
    }
  };

  MovingObject.prototype.wrap = function() {
    if (this.wrappable) {
      if (outOfBoundsX(this)) {
        this.posX = this.posX > 0 ? (-this.radius) : (800 + this.radius);
      }
      if (outOfBoundsY(this)) {
        this.posY = this.posY > 0 ? (-this.radius) : (600 + this.radius);
      }
    }
  };

})(this);
