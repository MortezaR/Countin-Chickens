/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sum_fun.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/board.js":
/*!*****************************!*\
  !*** ./components/board.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tile = __webpack_require__(/*! ./tile */ "./components/tile.js");

var SHAPES = ['circle', 'square', 'triangle', 'wild'];
var COLORS = ['red', 'blue', 'green', 'wild'];

var Board =
/*#__PURE__*/
function () {
  function Board(width, height) {
    _classCallCheck(this, Board);

    this.grid = new Array(width);
    this.multiTiles = [];

    for (var i = 0; i < width; i++) {
      this.grid[i] = new Array(height);
    }

    for (var _i = 0; _i < width; _i++) {
      for (var j = 0; j < height; j++) {
        this.grid[_i][j] = new Tile(_i * 100 + 300, j * 100 + 300);
      }
    }

    this.currentCard = null;
    this.currentCardNum = 0;
    this.answer = null;
    this.newBoard(2);
  }

  _createClass(Board, [{
    key: "newBoard",
    value: function newBoard(numMultiTiles) {
      for (var i = 0; i < this.grid.length; i++) {
        for (var j = 0; j < this.grid[i].length; j++) {
          var t = this.grid[i][j];
          t.randomizeTile();
        }
      }

      for (var _i2 = 0; _i2 < numMultiTiles; _i2++) {
        var x = Math.floor(Math.random() * this.grid.length);
        var y = Math.floor(Math.random() * this.grid[x].length);
        var dir = Math.ceil(Math.random() * 2);
        var amount = Math.floor(Math.random() * 3);
        var color = COLORS[Math.floor(Math.random() * COLORS.length)];

        switch (amount) {
          case 0:
            amount = -1;
            break;

          case 1:
            amount = 2;
            break;

          case 2:
            amount = 3;
            break;

          default:
            break;
        }

        this.addMultiTile(x, y, amount, dir === 1 ? 'vertical' : 'horizontal', color);
      }

      this.generateCard();
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.fillStyle = "#000000";
      ctx.font = "50px Arial";
      ctx.fillText(this.currentCard.equation === 'sum' ? 'sum' : 'diff', this.currentCard.first.x, this.currentCard.first.y - 30);
      this.currentCard.first.draw(ctx);
      this.currentCard.second.draw(ctx);

      for (var i = 0; i < this.grid.length; i++) {
        for (var j = 0; j < this.grid[i].length; j++) {
          this.grid[i][j].draw(ctx);
        }
      }
    }
  }, {
    key: "calculate",
    value: function calculate(shape, color) {
      retVal = 0;

      for (var i = 0; i < this.grid.length; i++) {
        for (var j = 0; j < this.grid[i].length; j++) {
          var t = this.grid[i][j];

          if ((t.shape === shape || t.shape === 'wild' || shape === 'wild') && (t.color === color || t.color === 'wild' || color === 'wild')) {
            retVal += t.value * t.multi;
          }
        }
      }

      return retVal;
    }
  }, {
    key: "addMultiTile",
    value: function addMultiTile(x, y, amount, dir, color) {
      this.grid[x][y].makeMultiTile(amount, dir, color);

      if (dir === 'vertical') {
        for (var j = 0; j < this.grid[0].length; j++) {
          if (this.grid[x][j].color === color || color === 'wild') {
            this.grid[x][j].multi *= amount;
          }
        }
      } else if (dir === 'horizontal') {
        for (var i = 0; i < this.grid[0].length; i++) {
          if (this.grid[i][y].color === color || color === 'wild') {
            this.grid[i][y].multi *= amount;
          }
        }
      }
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      var equ = Math.ceil(Math.random() * 2);
      var shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      var color = COLORS[Math.floor(Math.random() * COLORS.length)];
      var shape2 = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      var color2 = COLORS[Math.floor(Math.random() * COLORS.length)];

      if (equ === 1) {
        this.answer = Math.abs(this.calculate(shape, color) - this.calculate(shape2, color2));
      } else if (equ === 2) {
        this.answer = Math.abs(this.calculate(shape, color) + this.calculate(shape2, color2));
      }

      console.log('this is the actual answer -=> ', this.answer);
      this.currentCard = {
        equation: equ === 1 ? 'difference' : 'sum',
        first: new Tile(350, 100, {
          shape: shape,
          color: color
        }),
        second: new Tile(450, 100, {
          shape: shape2,
          color: color2
        })
      };
    }
  }]);

  return Board;
}(); // dir vertical -> all similar j values
// dir horizontal -> all similar i values


module.exports = Board;

/***/ }),

/***/ "./components/game.js":
/*!****************************!*\
  !*** ./components/game.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const Circle = require("./circle.js");
var Board = __webpack_require__(/*! ./board */ "./components/board.js"); // const circles = [];


var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.board = new Board(4, 4);
    this.score = 0;
  }

  _createClass(Game, [{
    key: "draw",
    value: function draw(canvasEl) {
      var ctx = canvasEl.getContext("2d");
      this.board.draw(ctx);
    }
  }, {
    key: "guess",
    value: function guess(num) {
      if (num == this.board.answer) {
        this.score += 1;
        this.board.currentCardNum += 1;

        if (this.board.currentCardNum < 3) {
          this.board.generateCard();
        } else {
          this.board.newBoard(2);
          this.board.currentCardNum = 0;
        }
      }
    }
  }]);

  return Game;
}();

module.exports = Game;

/***/ }),

/***/ "./components/sprite.js":
/*!******************************!*\
  !*** ./components/sprite.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Spirte =
/*#__PURE__*/
function () {
  function Spirte(img, height, width, loopLeng) {
    _classCallCheck(this, Spirte);

    this.image = new Image();
    this.image.src = img;
    this.loopLeng = loopLeng;
    this.loopC = 0;
    this.frameCount = 0;
    this.height = height;
    this.width = width;
    this.step = this.step.bind(this);
    this.drawFrame = this.drawFrame.bind(this);
  }

  _createClass(Spirte, [{
    key: "step",
    value: function step(ctx, oCtx, xView, yView) {
      var hMul = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var wMul = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      this.frameCount++;
      this.drawFrame(ctx, oCtx, xView, yView, hMul, wMul);

      if (this.frameCount < 15) {
        return;
      }

      this.frameCount = 0;
      this.loopC++;

      if (this.loopC >= this.loopLeng) {
        this.loopC = 0;
      }
    }
  }, {
    key: "drawFrame",
    value: function drawFrame(ctx, oCtx, xView, yView) {
      var hMul = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var wMul = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      ctx.drawImage(this.image, this.loopC * this.width, 0, this.width, this.height, oCtx.x - oCtx.width / 2 - xView, oCtx.y - oCtx.height / 2 - yView, this.height * hMul, this.width * wMul);
    }
  }, {
    key: "drawFFrame",
    value: function drawFFrame(ctx, oCtx, xView, yView) {
      var hMul = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
      var wMul = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
      ctx.drawImage(this.image, 0, 0, this.width, this.height, oCtx.x - oCtx.width / 2 - xView, oCtx.y - oCtx.height / 2 - yView, this.height * hMul, this.width * wMul);
    }
  }]);

  return Spirte;
}();

module.exports = Spirte;

/***/ }),

/***/ "./components/tile.js":
/*!****************************!*\
  !*** ./components/tile.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sprite = __webpack_require__(/*! ./sprite */ "./components/sprite.js");

var SHAPES = ['circle', 'square', 'triangle', 'wild'];
var COLORS = ['red', 'blue', 'green', 'wild'];
var MAXVALUE = 3;

var Tile =
/*#__PURE__*/
function () {
  function Tile(x, y) {
    var values = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      shape: 'wild',
      color: 'wild',
      value: 1,
      multi: 1,
      multiplier: {
        amount: null,
        dir: null,
        color: null
      }
    };

    _classCallCheck(this, Tile);

    this.sprites = {
      circle: new Sprite('https://i.imgur.com/ZHrywdO.png', 256, 256, 1),
      square: new Sprite('https://i.imgur.com/mW3JUfc.gif', 256, 256, 1),
      triangle: new Sprite('https://i.imgur.com/JZlvzMc.png', 1000, 1000, 1),
      wild: new Sprite('https://i.imgur.com/f0z68qE.png', 35, 35, 1)
    };
    this.height = 75;
    this.width = 75;
    this.x = x;
    this.y = y;
    this.shape = values.shape;
    this.color = values.color;
    this.value = values.value;
    this.multiplier = values.multiplier;
    this.multi = values.multi;
  }

  _createClass(Tile, [{
    key: "draw",
    value: function draw(ctx) {
      // ctx = ctx.getContext('2d');
      switch (this.color || this.multiplier.color) {
        case 'red':
          ctx.fillStyle = "#FF0000";
          break;

        case 'blue':
          ctx.fillStyle = "#0000FF";
          break;

        case 'green':
          ctx.fillStyle = "#00FF00";
          break;

        case 'wild':
          ctx.fillStyle = "#000000";
          break;

        default:
          ctx.fillStyle = "#000000";
          break;
      }

      switch (this.shape) {
        case 'circle':
          // this.sprites.circle.drawFFrame(ctx, this, 0, 0, .3, .3);
          ctx.beginPath();
          ctx.arc(this.x + this.height / 2, this.y + this.height / 2, this.height / 2, 0, 2 * Math.PI);
          ctx.fill(); // ctx.fillRect(this.x, this.y, this.width, this.height);

          break;

        case 'square':
          // this.sprites.square.drawFFrame(ctx, this, 0, 0, .3, .3);
          ctx.fillRect(this.x, this.y, this.width, this.height);
          break;

        case 'triangle':
          // this.sprites.triangle.drawFFrame(ctx, this, 0, 0, .1, .1);
          // ctx.fillRect(this.x, this.y, this.width, this.height);
          ctx.beginPath();
          ctx.moveTo(this.x + this.width / 2, this.y);
          ctx.lineTo(this.x, this.y + this.height);
          ctx.lineTo(this.x + this.width, this.y + this.height);
          ctx.closePath();
          ctx.fill();
          break;

        case 'wild':
          // this.sprites.wild.drawFFrame(ctx, this, 0, 0, 3, 3);
          ctx.beginPath();
          ctx.moveTo(this.x + this.width / 2, this.y);
          ctx.lineTo(this.x, this.y + this.height * 3 / 4);
          ctx.lineTo(this.x + this.width, this.y + this.height * 3 / 4);
          ctx.closePath();
          ctx.fill();
          ctx.beginPath();
          ctx.moveTo(this.x + this.width / 2, this.y + this.height);
          ctx.lineTo(this.x, this.y + this.height / 4);
          ctx.lineTo(this.x + this.width, this.y + this.height / 4);
          ctx.closePath();
          ctx.fill();
          break;

        case null:
          // this.sprites.wild.drawFFrame(ctx, this, 0, 0, 3, 3);
          // ctx.fillRect(this.x, this.y, this.width, this.height);
          if (this.multiplier.dir === 'vertical') {
            ctx.beginPath();
            ctx.moveTo(this.x + this.width / 2, this.y);
            ctx.lineTo(this.x, this.y + this.height / 4);
            ctx.lineTo(this.x + this.width, this.y + this.height / 4);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(this.x + this.width / 2, this.y + this.height);
            ctx.lineTo(this.x, this.y + this.height * 3 / 4);
            ctx.lineTo(this.x + this.width, this.y + this.height * 3 / 4);
            ctx.closePath();
            ctx.fill();
          } else {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + this.height / 2);
            ctx.lineTo(this.x + this.width / 4, this.y);
            ctx.lineTo(this.x + this.width / 4, this.y + this.height);
            ctx.closePath();
            ctx.fill();
            ctx.beginPath();
            ctx.moveTo(this.x + this.width, this.y + this.height / 2);
            ctx.lineTo(this.x + this.width * 3 / 4, this.y);
            ctx.lineTo(this.x + this.width * 3 / 4, this.y + this.height);
            ctx.closePath();
            ctx.fill();
          }

        default:
          break;
      }

      if (this.value) {
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "30px Arial";
        ctx.fillText(this.value, this.x + this.width / 2 - 7.5, this.y + this.height / 2 + 9);
      } else if (this.multiplier) {
        ctx.fillStyle = "#000000";
        ctx.font = "30px Arial";
        ctx.fillText(this.multiplier.amount, this.x + this.width / 2 - 7.5, this.y + this.height / 2 + 9);
      }
    }
  }, {
    key: "makeMultiTile",
    value: function makeMultiTile(amount, dir, color) {
      this.shape = null;
      this.value = null;
      this.color = null;
      this.multi = null;
      this.multiplier.amount = amount;
      this.multiplier.dir = dir;
      this.multiplier.color = color;
    }
  }, {
    key: "randomizeTile",
    value: function randomizeTile() {
      this.shape = SHAPES[Math.floor(Math.random() * SHAPES.length)];
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.value = Math.ceil(Math.random() * MAXVALUE); // console.log(this.shape, this.color, this.value);
    }
  }]);

  return Tile;
}();

module.exports = Tile;

/***/ }),

/***/ "./sum_fun.jsx":
/*!*********************!*\
  !*** ./sum_fun.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Game = __webpack_require__(/*! ./components/game */ "./components/game.js");

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById('root');
  runGame();
});

function runGame() {
  var game_canvas = document.getElementById('game-canvas');
  var context = game_canvas.getContext('2d');
  game_canvas.height = window.innerHeight;
  game_canvas.width = window.innerWidth;
  var game = new Game();
  game.draw(game_canvas);
  var score = document.createElement('div');
  score.innerHTML = 'Score: ' + game.score;
  root.appendChild(score);
  var inputField = document.createElement("INPUT");
  inputField.setAttribute("type", "text");
  root.appendChild(inputField);
  var sumbitButton = document.createElement("BUTTON");

  var handleSubmit = function handleSubmit() {
    game.guess(inputField.value);
    context.clearRect(0, 0, game_canvas.width, game_canvas.height);
    game.draw(game_canvas);
    score.innerHTML = 'Score: ' + game.score;
    inputField.value = '';
  };

  sumbitButton.addEventListener('click', handleSubmit);
  root.appendChild(sumbitButton);
}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map