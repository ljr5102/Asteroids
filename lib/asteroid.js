(function(root){

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Asteroid = Asteroids.Asteroid = function() {
    var x = Math.random() * (800);
    var y = Math.random() * (600);
    var potentialRadius = [25, 35, 45];
    var randIdx = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    var rad = potentialRadius[randIdx];
    Asteroids.MovingObject.call(this, x, y, rad, 0);
    this.speed = 5;
  };

  Asteroid.generateAsteroids = function() {
    result = [];
    for (var i = 0; i < 10; i++) {
      result.push(new Asteroid());
    }
    return result;
  };

  Asteroid.prototype = Object.create(Asteroids.MovingObject.prototype);

  Asteroid.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(this.posX, this.posY, this.radius, 0, 2*Math.PI);
    ctx.fill();
  };

})(this);
