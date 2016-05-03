(function(root) {

  var Asteroids = root.Asteroids = root.Asteroids || {};

  var Util = Asteroids.Util = {
    outOfBoundsX: function(obj) {
      if((obj.posX - obj.radius) > 800 || (obj.posX + obj.radius) < 0) {
        return true;
      } else {
        return false;
      }
    },

    outOfBoundsY: function(obj) {
      if((obj.posY - obj.radius) > 600 || (obj.posY + obj.radius) < 0) {
        return true;
      } else {
        return false;
      }
    },

    isCollidedWith: function(obj1, obj2) {
      var dist = Math.sqrt(Math.pow(obj1.posX - obj2.posX, 2) + Math.pow(obj1.posY - obj2.posY, 2));
      return dist < obj1.radius + obj2.radius;
    }
  };

})(this);
