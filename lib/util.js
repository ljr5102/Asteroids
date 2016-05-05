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
    },

    moveRandom: function(obj, ship) {
      obj.posX = Math.random() * (800);
      obj.posY = Math.random() * (600);
      while(Util.isCollidedWith(obj, ship)) {
        obj.posX = Math.random() * (800);
        obj.posY = Math.random() * (600);
      }
    },

    getBulletSpeed: function(velX, velY) {
      var xOp, yOp, xPer, yPer, bulletXVel, bulletYVel;
      if (velX && velY) {
        xOp = velX / Math.abs(velX);
        yOp = velY / Math.abs(velY);
        xPer = Math.abs(velX) / (Math.abs(velX) + Math.abs(velY));
        yPer = Math.abs(velY) / (Math.abs(velX) + Math.abs(velY));
        bulletXVel = velX + (xPer * xOp * 1000);
        bulletYVel = velY + (yPer * yOp * 1000);
        return [bulletXVel, bulletYVel];
      } else if (velX) {
        xOp = velX / Math.abs(velX);
        bulletXVel = velX + (xOp * 1000);
        return [bulletXVel, 0];
      } else if (velY) {
        yOp = velY / Math.abs(velY);
        bulletYVel = velY + (yOp * 1000);
        return [0, bulletYVel];
      }
    }
  };

})(this);
