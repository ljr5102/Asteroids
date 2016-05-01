(function(root){

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var View = Asteroids.View = function(game) {
    this.game = game;
    var c = document.getElementById("canvas");
    this.ctx = c.getContext("2d");
  };

  View.prototype.drawSomething = function() {
    this.ctx.fillStyle = "#FF0000";
    this.ctx.fillRect(0, 0, 150, 75);
  };

  View.prototype.draw = function(objects) {
    this.ctx.clearRect(0, 0, 800, 600);
    for (var i = 0; i < objects.length; i++) {
      objects[i].draw(this.ctx);
    }
  };

})(this);
