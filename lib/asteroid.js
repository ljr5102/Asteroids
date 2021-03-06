(function(root){

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Asteroid = Asteroids.Asteroid = function() {
    var x = Math.random() * (800);
    var y = Math.random() * (600);
    var potentialRadius = [20, 25, 30];
    var randIdx = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    var rad = potentialRadius[randIdx];
    var potentialSpeed = [105, 115, 125, -105, -115, -125];
    var randoIdx = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    var randoIdx2 = Math.floor(Math.random() * (5 - 0 + 1)) + 0;
    var spd = potentialSpeed[randoIdx];
    var spd2 = potentialSpeed[randoIdx2];
    Asteroids.MovingObject.call(this, x, y, rad, spd, spd2);
    this.wrappable = true;
  };

  Asteroid.generateAsteroids = function(ship) {
    result = [];
    while (result.length < 10) {
      var ast = new Asteroid();
      if (!Asteroids.Util.isCollidedWith(ship, ast)) {
        result.push(ast);
      }
    }
    return result;
  };

  Asteroid.prototype = Object.create(Asteroids.MovingObject.prototype);

  Asteroid.prototype.draw = function(ctx) {
    // var img = new Image();
    // img.src = "http://www.asteroidmission.org/wp-content/themes/osiris/public_assets/images/bennu-rendered.png";
    // ctx.drawImage(img, this.posX - this.radius, this.posY - this.radius, 2 * this.radius, 2 * this.radius);
    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(this.posX, this.posY, this.radius, 0, 2*Math.PI);
    ctx.fill();
  };

})(this);
