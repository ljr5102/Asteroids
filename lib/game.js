(function(root){

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Game = Asteroids.Game = function() {
    this.allObjects = [];
    this.gameView = new Asteroids.View(this);
    this.initializeObjects();
    this.gameView.draw(this.allObjects);
  };

  Game.prototype.initializeObjects = function() {
    var astArray = Asteroids.Asteroid.generateAsteroids();
    this.allObjects = this.allObjects.concat(astArray);
  };

  root.addEventListener("DOMContentLoaded", function() {
    var newGame = new Game();
  });

})(this);
