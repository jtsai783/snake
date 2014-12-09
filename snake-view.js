(function () {
  var Snakes = this.Snakes = this.Snakes || {};
  
  var View = Snakes.View = function (game, $el) {
    this.game = game;
    this.$board = $el;
    this.setupBoard();
    this.bindEvent();
    this.tick();
  }
  
  View.prototype.tick = function () {
    var view = this;
    var step = setInterval(function(){
      view.game.play();
      view.render();
      if (view.game.isOver()) {
        clearInterval(step);
        $(".over").css("top", "100px")
      }
    }, 400)
  }
  
  View.prototype.bindEvent =  function () {
    $('body').on("keydown", this.changeDirection.bind(this));
  }
  
  View.prototype.changeDirection = function (event) {
    var dir = this.game.snake.direction;
    
      if (event.which === 39 && dir !== 'left') {
          this.game.snake.direction = 'right';
      } else if (event.which === 37 && dir !== 'right') {
          this.game.snake.direction = 'left';
      } else if (event.which === 38 && dir !== 'down') {
          this.game.snake.direction = 'up';
      } else if (event.which === 40 && dir !== 'up') {
          this.game.snake.direction = 'down';
      }
  }
  
  
  View.prototype.setupBoard = function () {
    var towerString = "<div class='tower'></div>"
    var largePileString = '';
    for (var j = 0; j < 20; j++) {
      for (var i = 0; i < 20; i++) {
        largePileString += "<div class='cell' id='"+ i + '-' + j + "'></div>";
      }
    }
    this.$board.html(largePileString);
    this.render();
  }
  
  function clearBoard () {
    for (var i = 0; i < 20; i ++) {
      for (var j = 0; j < 20; j++){
        var pos = '#' + i  + '-' + j;
        var $cell = this.$board.find(pos);
        $cell.css("background", "white");
      }
    }
  }
  
  function pos (coord) {
    var pos = pos = '#' + coord[0]  + '-' + coord[1];
    var $cell = this.$board.find(pos);
    return $cell
  }
  
  View.prototype.render = function () {
    clearBoard.call(this);
    if (this.game.isOver()) {
      var blood = this.game.snake.bloodSplatter();
      blood.forEach(function(el){
         pos.call(this,el).css("background", "red");
      }.bind(this));
    }
    this.game.snake.body.forEach(function(el){
      pos.call(this,el).css("background", "green");
    }.bind(this));
    
    var $apple = pos.call(this, this.game.board.apple);
    $apple.css("background", "red");
  }
  
})();