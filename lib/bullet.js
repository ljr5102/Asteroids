(function(root) {

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Bullet = Asteroids.Bullet = function(posX, posY, velX, velY) {
    Asteroids.MovingObject.call(this, posX, posY, 10, velX, velY);
    this.wrappable = false;
  };

  Bullet.prototype = Object.create(Asteroids.MovingObject.prototype);

  Bullet.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  };

})(this);
