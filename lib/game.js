(function(root){

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Game = Asteroids.Game = function() {
    this.allObjects = [];
    this.gameView = new Asteroids.View(this);
    this.initializeObjects();
    this.gameView.draw(this.allObjects);
    this.start = null;
    this.clock = 0;
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
    this.clock += 1;
    this.checkForBullets();
    this.removeOutOfBounds();
    this.checkShipCollisions();
    this.checkBulletCollisions();
    this.checkForRemovals();
    this.move(elapsed);
    if (!this.gameOver) {
      this.gameView.draw(this.allObjects);
      this.start = time;
      root.requestAnimationFrame(this.step.bind(this));
    }
  };

  Game.prototype.checkForRemovals = function() {
    for (var i = 0; i < this.allObjects.length; i++) {
      if (this.allObjects[i].remove) {
        this.allObjects.splice(i, 1);
        i -= 1;
      }
    }
  };

  Game.prototype.checkBulletCollisions = function() {
    for (var j = 0; j < this.allObjects.length; j++) {
      if (this.allObjects[j] instanceof Asteroids.Bullet) {
        var bull = this.allObjects[j];
        for (var k = 0; k < this.allObjects.length; k++) {
          var obj = this.allObjects[k];
          if (obj instanceof Asteroids.Asteroid) {
            if (Asteroids.Util.isCollidedWith(bull, obj)) {
              bull.remove = true;
              obj.remove = true;
            }
          }
        }
      }
    }
  };

  Game.prototype.checkShipCollisions = function() {
    for (var i = 0; i < this.allObjects.length; i++) {
      var currObj = this.allObjects[i];
      if (currObj instanceof Asteroids.Asteroid) {
        if (Asteroids.Util.isCollidedWith(this.ship, currObj)) {
          this.gameOver = true;
        }
      }
    }
  };

  Game.prototype.removeOutOfBounds = function() {
    for (var i = 0; i < this.allObjects.length; i++) {
      var currObj = this.allObjects[i];
      if (!currObj.wrappable) {
        if (Asteroids.Util.outOfBoundsY(currObj) || Asteroids.Util.outOfBoundsX(currObj)) {
          this.allObjects.splice(i, 1);
          i -= 1;
        }
      }
    }
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
