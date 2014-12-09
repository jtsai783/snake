(function () {
  var Snakes = window.Snakes = window.Snakes || {};
  
  var Snake = Snakes.Snake = function () {
    this.body = [[10, 10], [10, 11], [10, 12]];
    this.direction = 'up';
  }
  
  Snake.prototype.move = function () {
    this.addBody(this.newPos());
    this.body.pop();
  }
  
  Snake.prototype.newPos = function() {
    var oldPos = this.body[0];
    var direction = this.direction
    
    if (direction === 'up') {
      return [oldPos[0], oldPos[1] - 1]
    } else if (direction === 'down') {
      return [oldPos[0], oldPos[1] + 1]
    } else if (direction === 'left') {
      return [oldPos[0] - 1, oldPos[1]]
    } else if (direction === 'right') {
      return [oldPos[0] + 1, oldPos[1]]
    }
  }
  
  Snake.prototype.addBody = function (newPos) {
    this.body.unshift(newPos);
  }
  
  Snake.prototype.bloodSplatter = function() {
    var bloodArray = [];
    var head = this.body[1];
    bloodArray.push([head[0], head[1] - 1]);
    bloodArray.push([head[0], head[1] + 1]);
    bloodArray.push([head[0] - 1, head[1]]);
    bloodArray.push([head[0] + 1, head[1]]);
    return bloodArray;
  }
  
})();