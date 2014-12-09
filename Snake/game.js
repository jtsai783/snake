(function () {
  var Snakes = window.Snakes = window.Snakes || {};
  
  var Game = Snakes.Game = function () {
    this.snake = new Snakes.Snake();
    this.board = new Snakes.Board(); 
  }
  
  Game.prototype.play = function (){
    //check apple
    if (this.snake.newPos().join("-") === this.board.apple.join("-")) {
      this.snake.addBody(this.board.apple);
      this.board.makeNewApple();
    }
    this.snake.move.bind(this.snake)();
  }
  
  Game.prototype.isOver = function () {
    var snakePos = this.snake.body[0];
    
    if (outOfBound(snakePos)) {
      return true;
    }
  }
  
  function outOfBound(pos) {
    return (pos[0] < 0 || pos[0] >= 20 ||
     pos[1] < 0 || pos[1] >= 20);
  }
})();