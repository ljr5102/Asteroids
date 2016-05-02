(function(root) {

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Ship = Asteroids.Ship = function() {
    Asteroids.MovingObject.call(this, 400, 300, 20, 0, 0);
    this.wrappable = true;
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
    switch (e.keyCode) {
      case 39:
        this.velX = 50;
        break;
      case 37:
        this.velX = -50;
        break;
      case 38:
        this.velY = -50;
        break;
      case 40:
        this.velY = 50;
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


})(this);
