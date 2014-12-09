(function () {
  var Snakes = window.Snakes = window.Snakes || {};
  
  var Board = Snakes.Board = function (){
    this.apple = null;
    this.makeNewApple();
  }
  
  Board.prototype.makeNewApple = function () {
    this.apple = [Math.floor(Math.random() * 20), 
                  Math.floor(Math.random() * 20)]
  }
})();