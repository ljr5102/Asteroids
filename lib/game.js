(function(root){

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Game = Asteroids.Game = function() {
    this.allObjects = [];
    this.gameView = new Asteroids.View(this);
    this.initializeObjects();
    this.gameView.draw(this.allObjects);
    this.start = null;
    root.requestAnimationFrame(this.step.bind(this));
  };

  Game.prototype.initializeObjects = function() {
    var astArray = Asteroids.Asteroid.generateAsteroids();
    this.ship = new Asteroids.Ship();
    this.allObjects.push(this.ship);
    this.allObjects = this.allObjects.concat(astArray);
  };

  Game.prototype.step = function(time) {
    if (!this.start) {
      this.start = time;
    }
    var elapsed = time - this.start;
    // debugger
    this.checkForBullets();
    this.move(elapsed);
    this.gameView.draw(this.allObjects);
    this.start = time;
    root.requestAnimationFrame(this.step.bind(this));
  };

  Game.prototype.checkForBullets = function() {
    while (this.ship.bullets.length > 0) {
      this.allObjects.push(this.ship.bullets.shift());
    }
  };

  Game.prototype.move = function(elapsed) {
    for (var i = 0; i < this.allObjects.length; i++) {
      this.allObjects[i].move(elapsed);
      this.allObjects[i].wrap();
    }
  };

  root.addEventListener("DOMContentLoaded", function() {
    var newGame = new Game();
  });

})(this);
