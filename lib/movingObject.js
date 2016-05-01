(function(root){

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function(posX, posY, radius, speed) {
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
    this.speed = speed;
  };

  MovingObject.prototype.move = function(elapsed) {
    this.posX = this.posX + this.speed * (elapsed / 1000);
    this.posY = this.posY + this.speed * (elapsed / 1000);
  };

})(this);
