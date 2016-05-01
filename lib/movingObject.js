(function(root){

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var MovingObject = Asteroids.MovingObject = function(posX, posY, radius, speed) {
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
    this.speed = speed;
  };

})(this);
