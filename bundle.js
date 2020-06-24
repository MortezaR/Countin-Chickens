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

var _require = __webpack_require__(/*! ./util */ "./components/util.js"),
    easy_deck = _require.easy_deck,
    hard_deck = _require.hard_deck,
    diff_deck = _require.diff_deck,
    harder_deck = _require.harder_deck,
    sum_deck = _require.sum_deck,
    sprites = _require.sprites;

var Board =
/*#__PURE__*/
function () {
  function Board(length, difficulty) {
    _classCallCheck(this, Board);

    this.grid = new Array(length);

    for (var i = 0; i < length; i++) {
      this.grid[i] = new Array(length);
    }

    for (var _i = 0; _i < length; _i++) {
      for (var j = 0; j < length; j++) {
        this.grid[_i][j] = new Tile(_i * 101.25 + window.innerWidth * 0.35, j * 157.5);
      }
    }

    this.promptCards = [];
    this.answers = [];
    this.calcThings = true;
    this.newBoard(difficulty);
  }

  _createClass(Board, [{
    key: "newBoard",
    value: function newBoard(difficulty) {
      var keys;
      var tDeckLen;
      var promptCardsDeck;

      if (difficulty === 1) {
        keys = Object.keys(easy_deck);
        tDeckLen = Object.keys(easy_deck).length;
        promptCardsDeck = sum_deck;
      } else if (difficulty === 2) {
        keys = Object.keys(hard_deck);
        tDeckLen = Object.keys(hard_deck).length;
        promptCardsDeck = diff_deck;
      } else {
        keys = Object.keys(harder_deck);
        tDeckLen = Object.keys(harder_deck).length;
        promptCardsDeck = diff_deck;
      }

      var gridSize = this.grid.length * this.grid[0].length;

      for (var i = 0; i < gridSize; i++) {
        var key = Math.floor(Math.random() * (tDeckLen - i));
        console.log(key);
        this.grid[i % this.grid.length][Math.floor(i / this.grid.length)].key = keys[key];
        var _ref = [keys[tDeckLen - i - 1], keys[key]];
        keys[key] = _ref[0];
        keys[tDeckLen - i - 1] = _ref[1];
      }

      while (this.promptCards.length < 3) {
        var val = Math.floor(Math.random() * Object.keys(promptCardsDeck).length);

        var _keys = Object.keys(promptCardsDeck);

        var answer = 0;

        if (!this.promptCards.includes(val)) {
          this.promptCards.push(_keys[val]);
          var pCard = promptCardsDeck[_keys[val]].values;

          for (var _i2 = 0; _i2 < pCard.length; _i2++) {
            console.log('prompt card length is', this.promptCards.length);

            if (_keys[val][0] !== 'd' || _i2 === 0) {
              answer += this.calculate(pCard[_i2].type, pCard[_i2].color);
              console.log('i is ', _i2, 'answer is ', answer, 'we added btw');
            } else {
              answer -= this.calculate(pCard[_i2].type, pCard[_i2].color);
              console.log('i is ', _i2, 'answer is ', answer, 'we subrtacted btw');
            }
          }

          this.answers.push(answer);
          console.log('answer -> ', answer);
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      for (var i = 0; i < this.grid.length; i++) {
        for (var j = 0; j < this.grid[i].length; j++) {
          this.grid[i][j].draw(ctx);
        }
      }

      sprites[this.promptCards[0]].drawRotated(ctx, 0, 0, 0.15, 0.15);
    }
  }, {
    key: "calculate",
    value: function calculate(type, color) {
      retVal = 0;

      if (this.calcThings === true) {
        for (var i = 0; i < this.grid.length; i++) {
          for (var j = 0; j < this.grid[i].length; j++) {
            var t = harder_deck[this.grid[i][j].key];

            if (t[1].value === 0) {
              switch (t[1].direction) {
                case 'horizontal':
                  for (var k = 0; k < this.grid[i].length; k++) {
                    this.grid[k][j].multiplier[t[1].color] *= t[1].amount;
                  }

                  break;

                case 'vertical':
                  for (var _k = 0; _k < this.grid.length; _k++) {
                    this.grid[i][_k].multiplier[t[1].color] *= t[1].amount;
                  }

                  break;

                case 'diagonal1':
                  for (var _k2 = 0; _k2 < this.grid.length - Math.abs(i - j); _k2++) {
                    if (i > j) {
                      this.grid[_k2 + (i - j)][_k2].multiplier[t[1].color] *= t[1].amount;
                    } else {
                      this.grid[_k2][_k2 + (j - i)].multiplier[t[1].color] *= t[1].amount;
                    }
                  }

                  break;

                case 'diagonal2':
                  var u = i + j;

                  for (var _k3 = 0; _k3 < u + 1; _k3++) {
                    if (typeof this.grid[u - _k3] === 'undefined' || typeof this.grid[u - _k3][_k3] === 'undefined') {} else {
                      this.grid[u - _k3][_k3].multiplier[t[1].color] *= t[1].amount;
                    }
                  }

                  break;

                default:
                  break;
              }
            }
          }
        }

        this.calcThings = false;
      }

      for (var _i3 = 0; _i3 < this.grid.length; _i3++) {
        for (var _j = 0; _j < this.grid[_i3].length; _j++) {
          var _t = harder_deck[this.grid[_i3][_j].key];
          var tileVal = 0;

          for (var _k4 = 1; _k4 <= Object.keys(_t).length; _k4++) {
            var singleTileVal = 0;

            if (_t[_k4].value === 0) {} else if (_t[_k4].value !== 0 && (_t[_k4].type === type || _t[_k4].type === 'wild' || type === 'wild') && (_t[_k4].color === color || _t[_k4].color === 'black' || color === 'black')) {
              singleTileVal += _t[_k4].value * this.grid[_i3][_j].multiplier[color];

              if (color !== 'black') {
                singleTileVal *= this.grid[_i3][_j].multiplier.black;
              }
            }

            tileVal += singleTileVal;
          }

          console.log('tile value ', tileVal, 'multiplier', this.grid[_i3][_j].multiplier, ' coordinates ', _i3, _j);
          retVal += tileVal;
        }
      }

      return retVal;
    }
  }]);

  return Board;
}();

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
  function Game(difficulty) {
    _classCallCheck(this, Game);

    this.board = new Board(4, difficulty);
    this.score = 0;
    this.difficulty = difficulty;
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
      if (num == this.board.answers[0]) {
        this.score += 2;
        this.board.answers.shift();
        this.board.promptCards.shift();

        if (this.board.promptCards < 1) {
          this.board.newBoard(this.difficulty);
        }
      } else {
        this.score -= 1;
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
  function Spirte(img, width, height) {
    var _this = this;

    _classCallCheck(this, Spirte);

    this.loaded = false;
    this.image = new Image();
    this.image.addEventListener('load', function () {
      _this.loaded = true;
    }, false);
    this.image.src = img;
    this.height = height;
    this.width = width;
    this.draw = this.draw.bind(this);
  }

  _createClass(Spirte, [{
    key: "draw",
    value: function draw(ctx, x, y) {
      var _this2 = this;

      var hMul = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var wMul = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

      if (this.loaded) {
        ctx.drawImage(this.image, 0, 0, this.width, this.height, x, y, this.width * hMul, this.height * wMul);
      } else {
        setTimeout(function () {
          return _this2.draw(ctx, x, y, hMul, wMul);
        }, 100);
      }
    }
  }, {
    key: "drawRotated",
    value: function drawRotated(ctx, x, y) {
      var _this3 = this;

      var hMul = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
      var wMul = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;

      if (this.loaded) {
        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate(Math.PI / 2);
        ctx.drawImage(this.image, 0, 0, this.width, this.height, x, y, this.width * hMul, this.height * wMul);
        ctx.restore();
      } else {
        setTimeout(function () {
          return _this3.drawRotated(ctx, x, y, hMul, wMul);
        }, 100);
      }
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

var _require = __webpack_require__(/*! ./util */ "./components/util.js"),
    sprites = _require.sprites;

var Tile =
/*#__PURE__*/
function () {
  function Tile(x, y) {
    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    _classCallCheck(this, Tile);

    this.x = x;
    this.y = y;
    this.key = key;
    this.multiplier = {
      black: 1,
      blue: 1,
      red: 1,
      yellow: 1
    };
  }

  _createClass(Tile, [{
    key: "draw",
    value: function draw(ctx) {
      sprites[this.key].draw(ctx, this.x, this.y, 0.15, 0.15);
    }
  }]);

  return Tile;
}();

module.exports = Tile;

/***/ }),

/***/ "./components/util.js":
/*!****************************!*\
  !*** ./components/util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sprite = __webpack_require__(/*! ./sprite */ "./components/sprite.js");

var easy_deck = {
  okc: {
    1: {
      value: 1,
      color: 'black',
      type: 'chicken'
    }
  },
  okp: {
    1: {
      value: 1,
      color: 'black',
      type: 'pig'
    }
  },
  oks: {
    1: {
      value: 1,
      color: 'black',
      type: 'sheep'
    }
  },
  obc: {
    1: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    }
  },
  obp: {
    1: {
      value: 1,
      color: 'blue',
      type: 'pig'
    }
  },
  obs: {
    1: {
      value: 1,
      color: 'blue',
      type: 'sheep'
    }
  },
  obw: {
    1: {
      value: 1,
      color: 'blue',
      type: 'wild'
    }
  },
  orc: {
    1: {
      value: 1,
      color: 'red',
      type: 'chicken'
    }
  },
  orp: {
    1: {
      value: 1,
      color: 'red',
      type: 'pig'
    }
  },
  ors: {
    1: {
      value: 1,
      color: 'red',
      type: 'sheep'
    }
  },
  orw: {
    1: {
      value: 1,
      color: 'red',
      type: 'wild'
    }
  },
  oyc: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'chicken'
    }
  },
  oyp: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'pig'
    }
  },
  oys: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'sheep'
    }
  },
  oyw: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'wild'
    }
  },
  tkc: {
    1: {
      value: 2,
      color: 'black',
      type: 'chicken'
    }
  },
  tkp: {
    1: {
      value: 2,
      color: 'black',
      type: 'pig'
    }
  },
  tks: {
    1: {
      value: 2,
      color: 'black',
      type: 'sheep'
    }
  },
  tbc: {
    1: {
      value: 2,
      color: 'blue',
      type: 'chicken'
    }
  },
  tbp: {
    1: {
      value: 2,
      color: 'blue',
      type: 'pig'
    }
  },
  tbs: {
    1: {
      value: 2,
      color: 'blue',
      type: 'sheep'
    }
  },
  tbw: {
    1: {
      value: 2,
      color: 'blue',
      type: 'wild'
    }
  },
  trc: {
    1: {
      value: 2,
      color: 'red',
      type: 'chicken'
    }
  },
  trp: {
    1: {
      value: 2,
      color: 'red',
      type: 'pig'
    }
  },
  trs: {
    1: {
      value: 2,
      color: 'red',
      type: 'sheep'
    }
  },
  trw: {
    1: {
      value: 2,
      color: 'red',
      type: 'wild'
    }
  },
  tyc: {
    1: {
      value: 2,
      color: 'yellow',
      type: 'chicken'
    }
  },
  typ: {
    1: {
      value: 2,
      color: 'yellow',
      type: 'pig'
    }
  },
  tys: {
    1: {
      value: 2,
      color: 'yellow',
      type: 'yellow'
    }
  },
  tyw: {
    1: {
      value: 2,
      color: 'yellow',
      type: 'wild'
    }
  },
  obcorp: {
    1: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'pig'
    }
  },
  obcoyp: {
    1: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'pig'
    }
  },
  obpors: {
    1: {
      value: 1,
      color: 'blue',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'sheep'
    }
  },
  obcoys: {
    1: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'sheep'
    }
  },
  obcorc: {
    1: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'chicken'
    }
  },
  obporp: {
    1: {
      value: 1,
      color: 'blue',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'pig'
    }
  },
  obsors: {
    1: {
      value: 1,
      color: 'blue',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'sheep'
    }
  },
  obsorc: {
    1: {
      value: 1,
      color: 'blue',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'chicken'
    }
  },
  obsoyc: {
    1: {
      value: 1,
      color: 'blue',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'chicken'
    }
  },
  obpobc: {
    1: {
      value: 1,
      color: 'blue',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    }
  },
  orporc: {
    1: {
      value: 1,
      color: 'red',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'chicken'
    }
  },
  oypoyc: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'chicken'
    }
  },
  obpobs: {
    1: {
      value: 1,
      color: 'blue',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'sheep'
    }
  },
  orpors: {
    1: {
      value: 1,
      color: 'red',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'sheep'
    }
  },
  oypoys: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'sheep'
    }
  },
  orcobp: {
    1: {
      value: 1,
      color: 'red',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'pig'
    }
  },
  orcoyp: {
    1: {
      value: 1,
      color: 'red',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'pig'
    }
  },
  orpobs: {
    1: {
      value: 1,
      color: 'red',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'sheep'
    }
  },
  orpoys: {
    1: {
      value: 1,
      color: 'red',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'sheep'
    }
  },
  orsobc: {
    1: {
      value: 1,
      color: 'red',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    }
  },
  orsoyc: {
    1: {
      value: 1,
      color: 'red',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'chicken'
    }
  },
  orcoyc: {
    1: {
      value: 1,
      color: 'red',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'chicken'
    }
  },
  orpoyp: {
    1: {
      value: 1,
      color: 'red',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'pig'
    }
  },
  orsoys: {
    1: {
      value: 1,
      color: 'red',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'sheep'
    }
  },
  obsobc: {
    1: {
      value: 1,
      color: 'blue',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    }
  },
  orsorc: {
    1: {
      value: 1,
      color: 'red',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'chicken'
    }
  },
  oysoyc: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'chicken'
    }
  },
  oycobc: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    }
  },
  oypobp: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'pig'
    }
  },
  oysobs: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'sheep'
    }
  },
  oycobp: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'pig'
    }
  },
  oycorp: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'pig'
    }
  },
  oypobs: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'sheep'
    }
  },
  oypors: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'sheep'
    }
  },
  oysobc: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    }
  },
  oysorc: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'chicken'
    }
  },
  nokc: {
    1: {
      value: -1,
      color: 'black',
      type: 'chicken'
    }
  },
  nokp: {
    1: {
      value: -1,
      color: 'black',
      type: 'pig'
    }
  },
  noks: {
    1: {
      value: -1,
      color: 'black',
      type: 'sheep'
    }
  },
  nobc: {
    1: {
      value: -1,
      color: 'blue',
      type: 'chicken'
    }
  },
  nobp: {
    1: {
      value: -1,
      color: 'blue',
      type: 'pig'
    }
  },
  nobs: {
    1: {
      value: -1,
      color: 'blue',
      type: 'sheep'
    }
  },
  norc: {
    1: {
      value: -1,
      color: 'red',
      type: 'chicken'
    }
  },
  norp: {
    1: {
      value: -1,
      color: 'red',
      type: 'pig'
    }
  },
  nors: {
    1: {
      value: -1,
      color: 'red',
      type: 'sheep'
    }
  },
  noyc: {
    1: {
      value: -1,
      color: 'yellow',
      type: 'chicken'
    }
  },
  noyp: {
    1: {
      value: -1,
      color: 'yellow',
      type: 'pig'
    }
  },
  noys: {
    1: {
      value: -1,
      color: 'yellow',
      type: 'sheep'
    }
  },
  ntkc: {
    1: {
      value: -2,
      color: 'black',
      type: 'chicken'
    }
  },
  ntkp: {
    1: {
      value: -2,
      color: 'black',
      type: 'pig'
    }
  },
  ntks: {
    1: {
      value: -2,
      color: 'black',
      type: 'sheep'
    }
  },
  ntbc: {
    1: {
      value: -2,
      color: 'blue',
      type: 'chicken'
    }
  },
  ntbp: {
    1: {
      value: -2,
      color: 'blue',
      type: 'pig'
    }
  },
  ntbs: {
    1: {
      value: -2,
      color: 'blue',
      type: 'sheep'
    }
  },
  ntrc: {
    1: {
      value: -2,
      color: 'red',
      type: 'chicken'
    }
  },
  ntrp: {
    1: {
      value: -2,
      color: 'red',
      type: 'pig'
    }
  },
  ntrs: {
    1: {
      value: -2,
      color: 'red',
      type: 'sheep'
    }
  },
  ntyc: {
    1: {
      value: -2,
      color: 'yellow',
      type: 'chicken'
    }
  },
  ntyp: {
    1: {
      value: -2,
      color: 'yellow',
      type: 'pig'
    }
  },
  ntys: {
    1: {
      value: -2,
      color: 'yellow',
      type: 'sheep'
    }
  },
  hyw: {
    1: {
      value: 3,
      color: 'yellow',
      type: 'wild'
    }
  },
  hrw: {
    1: {
      value: 3,
      color: 'red',
      type: 'wild'
    }
  },
  hbw: {
    1: {
      value: 3,
      color: 'blue',
      type: 'wild'
    }
  },
  hkc: {
    1: {
      value: 3,
      color: 'black',
      type: 'chicken'
    }
  },
  hks: {
    1: {
      value: 3,
      color: 'black',
      type: 'sheep'
    }
  },
  hkp: {
    1: {
      value: 3,
      color: 'black',
      type: 'pig'
    }
  },
  oycoysoyp: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'yellow',
      type: 'sheep'
    },
    3: {
      value: 1,
      color: 'yellow',
      type: 'pig'
    }
  },
  orcorsorp: {
    1: {
      value: 1,
      color: 'red',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'sheep'
    },
    3: {
      value: 1,
      color: 'red',
      type: 'pig'
    }
  },
  obcobsobp: {
    1: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'blue',
      type: 'sheep'
    },
    3: {
      value: 1,
      color: 'blue',
      type: 'pig'
    }
  },
  okcobsokp: {
    1: {
      value: 1,
      color: 'black',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'black',
      type: 'sheep'
    },
    3: {
      value: 1,
      color: 'black',
      type: 'pig'
    }
  },
  oycorcobc: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'chicken'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'chicken'
    },
    3: {
      value: 1,
      color: 'blue',
      type: 'chicken'
    }
  },
  oysorsobs: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'sheep'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'sheep'
    },
    3: {
      value: 1,
      color: 'blue',
      type: 'sheep'
    }
  },
  oyporpobp: {
    1: {
      value: 1,
      color: 'yellow',
      type: 'pig'
    },
    2: {
      value: 1,
      color: 'red',
      type: 'pig'
    },
    3: {
      value: 1,
      color: 'blue',
      type: 'pig'
    }
  }
}; // o is one
// t is two
// h is three
// k is black
// b is blue
// r is red
// y is yellow
// c is chicken
// p is pig
// s is sheep
// w is wild
// n is negative

var sum_deck = {
  ucrp: {
    values: [{
      color: 'blue',
      type: 'chicken'
    }, {
      color: 'red',
      type: 'pig'
    }]
  },
  ucyp: {
    values: [{
      color: 'blue',
      type: 'chicken'
    }, {
      color: 'yellow',
      type: 'pig'
    }]
  },
  uprs: {
    values: [{
      color: 'blue',
      type: 'pig'
    }, {
      color: 'red',
      type: 'sheep'
    }]
  },
  upys: {
    values: [{
      color: 'blue',
      type: 'pig'
    }, {
      color: 'yellow',
      type: 'sheep'
    }]
  },
  usrc: {
    values: [{
      color: 'blue',
      type: 'sheep'
    }, {
      color: 'red',
      type: 'chicken'
    }]
  },
  usyc: {
    values: [{
      color: 'blue',
      type: 'sheep'
    }, {
      color: 'yellow',
      type: 'chicken'
    }]
  },
  rcbp: {
    values: [{
      color: 'red',
      type: 'chicken'
    }, {
      color: 'blue',
      type: 'pig'
    }]
  },
  rcyp: {
    values: [{
      color: 'red',
      type: 'chicken'
    }, {
      color: 'yellow',
      type: 'pig'
    }]
  },
  rpbs: {
    values: [{
      color: 'red',
      type: 'pig'
    }, {
      color: 'blue',
      type: 'sheep'
    }]
  },
  rpys: {
    values: [{
      color: 'red',
      type: 'pig'
    }, {
      color: 'yellow',
      type: 'sheep'
    }]
  },
  rsbc: {
    values: [{
      color: 'red',
      type: 'sheep'
    }, {
      color: 'blue',
      type: 'chicken'
    }]
  },
  rsyc: {
    values: [{
      color: 'red',
      type: 'sheep'
    }, {
      color: 'yellow',
      type: 'chicken'
    }]
  },
  ycbp: {
    values: [{
      color: 'yellow',
      type: 'chicken'
    }, {
      color: 'blue',
      type: 'pig'
    }]
  },
  ycrp: {
    values: [{
      color: 'yellow',
      type: 'chicken'
    }, {
      color: 'red',
      type: 'pig'
    }]
  },
  ypbs: {
    values: [{
      color: 'yellow',
      type: 'pig'
    }, {
      color: 'blue',
      type: 'sheep'
    }]
  },
  yprs: {
    values: [{
      color: 'yellow',
      type: 'pig'
    }, {
      color: 'red',
      type: 'sheep'
    }]
  },
  ysbc: {
    values: [{
      color: 'yellow',
      type: 'sheep'
    }, {
      color: 'blue',
      type: 'chicken'
    }]
  },
  ysrc: {
    values: [{
      color: 'yellow',
      type: 'sheep'
    }, {
      color: 'red',
      type: 'chicken'
    }]
  },
  uw: {
    values: [{
      color: 'blue',
      type: 'wild'
    }]
  },
  rw: {
    values: [{
      color: 'red',
      type: 'wild'
    }]
  },
  yw: {
    values: [{
      color: 'yellow',
      type: 'wild'
    }]
  },
  bc: {
    values: [{
      color: 'black',
      type: 'chicken'
    }]
  },
  bp: {
    values: [{
      color: 'black',
      type: 'pig'
    }]
  },
  bs: {
    values: [{
      color: 'black',
      type: 'sheep'
    }]
  }
};
var sprites = {
  okc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1blackchicken.png', 675, 1050),
  okp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1blackpig.png', 675, 1050),
  oks: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1blacksheep.png', 675, 1050),
  obc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1bluechicken.png', 675, 1050),
  obp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1bluepig.png', 675, 1050),
  obs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1bluesheep.png', 675, 1050),
  obw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1bluestar.png', 675, 1050),
  orc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1redchicken.png', 675, 1050),
  orp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1redpig.png', 675, 1050),
  ors: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1redsheep.png', 675, 1050),
  orw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1redstar.png', 675, 1050),
  oyc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1yellowchicken.png', 675, 1050),
  oyp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1yellowpig.png', 675, 1050),
  oys: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1yellowsheep.png', 675, 1050),
  oyw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/1yellowstar.png', 675, 1050),
  tkc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2blackchicken.png', 675, 1050),
  tkp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2blackpig.png', 675, 1050),
  tks: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2blacksheep.png', 675, 1050),
  tbc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2bluechicken.png', 675, 1050),
  tbp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2bluepig.png', 675, 1050),
  tbs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2bluesheep.png', 675, 1050),
  tbw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2bluestar.png', 675, 1050),
  trc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redchicken.png', 675, 1050),
  trp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redpig.png', 675, 1050),
  trs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redsheep.png', 675, 1050),
  trw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redstar.png', 675, 1050),
  tyc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowchicken.png', 675, 1050),
  typ: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowpig.png', 675, 1050),
  tys: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowsheep.png', 675, 1050),
  tyw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowstar.png', 675, 1050),
  obcorp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2bluechickenredpig.png', 675, 1050),
  obcoyp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2bluechickenyellowpig.png', 675, 1050),
  obpors: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2bluepigredsheep.png', 675, 1050),
  obcoys: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2bluepigyellowsheep.png', 675, 1050),
  obcorc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2blueredchicken.png', 675, 1050),
  obporp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2blueredpig.png', 675, 1050),
  obsors: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2blueredsheep.png', 675, 1050),
  obsorc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2bluesheepredchicken.png', 675, 1050),
  obsoyc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2bluesheepyellowchicken.png', 675, 1050),
  obpobc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2pigchickenblue.png', 675, 1050),
  orporc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2pigchickenred.png', 675, 1050),
  oypoyc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2pigchickenyellow.png', 675, 1050),
  obpobs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2pigsheepblue.png', 675, 1050),
  orpors: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2pigsheepred.png', 675, 1050),
  oypoys: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2pigsheepyellow.png', 675, 1050),
  orcobp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redchickenbluepig.png', 675, 1050),
  orcoyp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redchickenyellowpig.png', 675, 1050),
  orpobs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redpigbluesheep.png', 675, 1050),
  orpoys: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redpigyellowsheep.png', 675, 1050),
  orsobc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redsheepbluechicken.png', 675, 1050),
  orsoyc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redsheepyellowchicken.png', 675, 1050),
  orcoyc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redyellowchicken.png', 675, 1050),
  orpoyp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redyellowpig.png', 675, 1050),
  orsoys: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2redyellowsheep.png', 675, 1050),
  obsobc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2sheepchickenblue.png', 675, 1050),
  orsorc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2sheepchickenred.png', 675, 1050),
  oysoyc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2sheepchickenyellow.png', 675, 1050),
  oycobc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowbluechicken.png', 675, 1050),
  oypobp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowbluepig.png', 675, 1050),
  oysobs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowbluesheep.png', 675, 1050),
  oycobp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowchickenbluepig.png', 675, 1050),
  oycorp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowchickenredpig.png', 675, 1050),
  oypobs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowpigbluesheep.png', 675, 1050),
  oypors: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowpigredsheep.png', 675, 1050),
  oysobc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowsheepbluechicken.png', 675, 1050),
  oysorc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/2yellowsheepredchicken.png', 675, 1050),
  nokc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1blackchicken.png', 675, 1050),
  nokp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1blackpig.png', 675, 1050),
  noks: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1blacksheep.png', 675, 1050),
  nobc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1bluechicken.png', 675, 1050),
  nobp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1bluepig.png', 675, 1050),
  nobs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1bluesheep.png', 675, 1050),
  norc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1redchicken.png', 675, 1050),
  norp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1redpig.png', 675, 1050),
  nors: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1redsheep.png', 675, 1050),
  noyc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1yellowchicken.png', 675, 1050),
  noyp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1yellowpig.png', 675, 1050),
  noys: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N1yellowsheep.png', 675, 1050),
  ntkc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2blackchicken.png', 675, 1050),
  ntkp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2blackpig.png', 675, 1050),
  ntks: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2blacksheep.png', 675, 1050),
  ntbc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2bluechicken.png', 675, 1050),
  ntbp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2bluepig.png', 675, 1050),
  ntbs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2bluesheep.png', 675, 1050),
  ntrc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2redchicken.png', 675, 1050),
  ntrp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2redpig.png', 675, 1050),
  ntrs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2redsheep.png', 675, 1050),
  ntyc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2yellowchicken.png', 675, 1050),
  ntyp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2yellowpig.png', 675, 1050),
  ntys: new Sprite('https://mortezar.github.io/Countin-Chickens/images/N2yellowsheep.png', 675, 1050),
  hyw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3yellowstar.png', 675, 1050),
  hrw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3redstar.png', 675, 1050),
  hbw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3bluestar.png', 675, 1050),
  hkc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3blackchicken.png', 675, 1050),
  hks: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3blacksheep.png', 675, 1050),
  hkp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3blackpig.png', 675, 1050),
  oycoysoyp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3wildyellow.png', 675, 1050),
  orcorsorp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3wildred.png', 675, 1050),
  obcobsobp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3wildblue.png', 675, 1050),
  okcobsokp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3wildblack.png', 675, 1050),
  oycorcobc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3wildchicken.png', 675, 1050),
  oysorsobs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3wildsheep.png', 675, 1050),
  oyporpobp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/3wildpig.png', 675, 1050),
  ucrp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumbluechickenredpig.png', 675, 1050),
  ucyp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumbluechickenyellowpig.png', 675, 1050),
  uprs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumbluepigredsheep.png', 675, 1050),
  upys: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumbluepigyellowsheep.png', 675, 1050),
  usrc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumbluesheepredchicken.png', 675, 1050),
  usyc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumbluesheepyellowchicken.png', 675, 1050),
  rcbp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumredchickenbluepig.png', 675, 1050),
  rcyp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumredchickenyellowpig.png', 675, 1050),
  rpbs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumredpigbluesheep.png', 675, 1050),
  rpys: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumredpigyellowsheep.png', 675, 1050),
  rsbc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumredsheepbluechicken.png', 675, 1050),
  rsyc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumredsheepyellowchicken.png', 675, 1050),
  ycbp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumyellowchickenbluepig.png', 675, 1050),
  ycrp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumyellowchickenredpig.png', 675, 1050),
  ypbs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumyellowpigbluesheep.png', 675, 1050),
  yprs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumyellowpigredsheep.png', 675, 1050),
  ysbc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumyellowsheepbluechicken.png', 675, 1050),
  ysrc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Sumyellowsheepredchicken.png', 675, 1050),
  uw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/TotalBlue.png', 675, 1050),
  rw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/TotalRed.png', 675, 1050),
  yw: new Sprite('https://mortezar.github.io/Countin-Chickens/images/TotalYellow.png', 675, 1050),
  bc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Totalchicken.png', 675, 1050),
  bp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Totalpig.png', 675, 1050),
  bs: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Totalsheep.png', 675, 1050),
  dbr: new Sprite('https://mortezar.github.io/Countin-Chickens/images/DifferenceBlueRed.png', 675, 1050),
  dcp: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Differencechickenpig.png', 675, 1050),
  dps: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Differencepigsheep.png', 675, 1050),
  dry: new Sprite('https://mortezar.github.io/Countin-Chickens/images/DifferenceRedYellow.png', 675, 1050),
  dsc: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Differencesheepchicken.png', 675, 1050),
  dyb: new Sprite('https://mortezar.github.io/Countin-Chickens/images/DifferenceYellowBlue.png', 675, 1050),
  dh: new Sprite('https://mortezar.github.io/Countin-Chickens/images/DoubleHorizontal.png', 675, 1050),
  dv: new Sprite('https://mortezar.github.io/Countin-Chickens/images/DoubleVertical.png', 675, 1050),
  oh: new Sprite('https://mortezar.github.io/Countin-Chickens/images/OppositeHorizontal.png', 675, 1050),
  ov: new Sprite('https://mortezar.github.io/Countin-Chickens/images/OppositeVertical.png', 675, 1050),
  hvb: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Tripleverticalblue.png', 675, 1050),
  hvr: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Tripleverticalred.png', 675, 1050),
  hvy: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Tripleverticalyellow.png', 675, 1050),
  hdo: new Sprite('https://mortezar.github.io/Countin-Chickens/images/x3Diagonal1.png', 675, 1050),
  hdt: new Sprite('https://mortezar.github.io/Countin-Chickens/images/x3Diagonal2.png', 675, 1050),
  dbr2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/DifferenceBlueRed.png', 675, 1050),
  dcp2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Differencechickenpig.png', 675, 1050),
  dps2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Differencepigsheep.png', 675, 1050),
  dry2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/DifferenceRedYellow.png', 675, 1050),
  dsc2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Differencesheepchicken.png', 675, 1050),
  dyb2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/DifferenceYellowBlue.png', 675, 1050),
  dh2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/DoubleHorizontal.png', 675, 1050),
  dv2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/DoubleVertical.png', 675, 1050),
  oh2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/OppositeHorizontal.png', 675, 1050),
  ov2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/OppositeVertical.png', 675, 1050),
  hvb2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Tripleverticalblue.png', 675, 1050),
  hvr2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Tripleverticalred.png', 675, 1050),
  hvy2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/Tripleverticalyellow.png', 675, 1050),
  hdo2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/x3Diagonal1.png', 675, 1050),
  hdt2: new Sprite('https://mortezar.github.io/Countin-Chickens/images/x3Diagonal2.png', 675, 1050)
}; // let hard_deck = easy_deck;
// let diff_deck = sum_deck;

var diff_cards = {
  dbr: {
    values: [{
      color: 'blue',
      type: 'wild'
    }, {
      color: 'red',
      type: 'wild'
    }]
  },
  dcp: {
    values: [{
      color: 'black',
      type: 'chicken'
    }, {
      color: 'black',
      type: 'pig'
    }]
  },
  dps: {
    values: [{
      color: 'black',
      type: 'pig'
    }, {
      color: 'black',
      type: 'sheep'
    }]
  },
  dry: {
    values: [{
      color: 'red',
      type: 'wild'
    }, {
      color: 'yellow',
      type: 'wild'
    }]
  },
  dsc: {
    values: [{
      color: 'black',
      type: 'sheep'
    }, {
      color: 'black',
      type: 'chicken'
    }]
  },
  dyb: {
    values: [{
      color: 'yellow',
      type: 'wild'
    }, {
      color: 'blue',
      type: 'wild'
    }]
  }
};
var hard_cards = {
  dh: {
    1: {
      value: 0,
      direction: 'horizontal',
      color: 'black',
      amount: 2
    }
  },
  dv: {
    1: {
      value: 0,
      direction: 'vertical',
      color: 'black',
      amount: 2
    }
  },
  oh: {
    1: {
      value: 0,
      direction: 'horizontal',
      color: 'black',
      amount: -1
    }
  },
  ov: {
    1: {
      value: 0,
      direction: 'vertical',
      color: 'black',
      amount: -1
    }
  },
  hvb: {
    1: {
      value: 0,
      direction: 'vertical',
      color: 'blue',
      amount: 3
    }
  },
  hvr: {
    1: {
      value: 0,
      direction: 'vertical',
      color: 'red',
      amount: 3
    }
  },
  hvy: {
    1: {
      value: 0,
      direction: 'vertical',
      color: 'yellow',
      amount: 3
    }
  },
  hdo: {
    1: {
      value: 0,
      direction: 'diagonal1',
      color: 'black',
      amount: 3
    }
  },
  hdt: {
    1: {
      value: 0,
      direction: 'diagonal2',
      color: 'black',
      amount: 3
    }
  }
};
var hard_cards2 = {
  dh2: {
    1: {
      value: 0,
      direction: 'horizontal',
      color: 'black',
      amount: 2
    }
  },
  dv2: {
    1: {
      value: 0,
      direction: 'vertical',
      color: 'black',
      amount: 2
    }
  },
  oh2: {
    1: {
      value: 0,
      direction: 'horizontal',
      color: 'black',
      amount: -1
    }
  },
  ov2: {
    1: {
      value: 0,
      direction: 'vertical',
      color: 'black',
      amount: -1
    }
  },
  hvb2: {
    1: {
      value: 0,
      direction: 'vertical',
      color: 'blue',
      amount: 3
    }
  },
  hvr2: {
    1: {
      value: 0,
      direction: 'vertical',
      color: 'red',
      amount: 3
    }
  },
  hvy2: {
    1: {
      value: 0,
      direction: 'vertical',
      color: 'yellow',
      amount: 3
    }
  },
  hdo2: {
    1: {
      value: 0,
      direction: 'diagonal1',
      color: 'black',
      amount: 3
    }
  },
  hdt2: {
    1: {
      value: 0,
      direction: 'diagonal2',
      color: 'black',
      amount: 3
    }
  }
};

var hard_deck = _objectSpread({}, easy_deck, {}, hard_cards);

var diff_deck = _objectSpread({}, sum_deck, {}, diff_cards);

var harder_deck = _objectSpread({}, easy_deck, {}, hard_cards, {}, hard_cards2);

module.exports = {
  sum_deck: sum_deck,
  diff_deck: diff_deck,
  easy_deck: easy_deck,
  hard_deck: hard_deck,
  harder_deck: harder_deck,
  sprites: sprites
};

/***/ }),

/***/ "./sum_fun.jsx":
/*!*********************!*\
  !*** ./sum_fun.jsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Game = __webpack_require__(/*! ./components/game */ "./components/game.js");

var start_menu_buttons;
var instructions;
document.addEventListener('DOMContentLoaded', function () {
  console.log(window.innerWidth, window.outerWidth);
  var root = document.getElementById('root');
  var high_scores_list = document.getElementById('high_scores_list');
  start_menu_buttons = document.createElement('div');
  instructions = document.createElement('div');
  var start_button = document.createElement('BUTTON');
  var easy_button = document.createElement('BUTTON');
  var medium_button = document.createElement('BUTTON');
  var hard_button = document.createElement('BUTTON');
  var difficulty = 1;
  var high_scores = JSON.parse(localStorage.getItem('high_scores')) || [];
  var high_scores_text = "<ul> ";

  for (var i = 0; i < high_scores.length; i++) {
    high_scores_text += '<li> <span class="span1">' + (i + 1) + ':' + '</span> <span class="span2">' + high_scores[i] + '</span></li>';
  }

  high_scores_text += '</ul>';
  high_scores_list.innerHTML = high_scores_text;
  start_menu_buttons.id = 'start_menu_buttons';
  instructions.id = 'instructions';
  start_button.innerHTML = "Play Game";
  start_button.id = 'start_button';
  start_button.className += 'menu_button';
  root.appendChild(start_menu_buttons);
  root.appendChild(instructions);
  start_menu_buttons.appendChild(start_button);
  easy_button.innerHTML = "Easy";
  easy_button.id = 'easy_button';
  start_menu_buttons.appendChild(easy_button);
  easy_button.addEventListener('click', function () {
    difficulty = 1;
    easy_button.className = 'selected';
    medium_button.className = 'unselected';
    hard_button.className = 'unselected';
    instructions.removeChild(inst3);
  });
  medium_button.innerHTML = "Hard";
  medium_button.id = 'medium_button';
  start_menu_buttons.appendChild(medium_button);
  medium_button.addEventListener('click', function () {
    difficulty = 2;
    easy_button.className = 'unselected';
    medium_button.className = 'selected';
    hard_button.className = 'unselected';
    instructions.appendChild(inst3);
  });
  hard_button.innerHTML = "Very Hard";
  hard_button.id = 'hard_button';
  start_menu_buttons.appendChild(hard_button);
  hard_button.addEventListener('click', function () {
    difficulty = 3;
    easy_button.className = 'unselected';
    medium_button.className = 'unselected';
    hard_button.className = 'selected';
    instructions.appendChild(inst3);
  });
  start_button.addEventListener('click', function () {
    // console.log(difficulty, '<- difficulty')
    easy_button.className = 'unselected';
    medium_button.className = 'unselected';
    hard_button.className = 'unselected';
    runGame(difficulty);
  });
  var inst1 = document.createElement("img");
  inst1.src = "https://mortezar.github.io/Countin-Chickens/images/Page_1.png";
  var inst2 = document.createElement("img");
  inst2.src = "https://mortezar.github.io/Countin-Chickens/images/Page_2.png";
  var inst3 = document.createElement("img");
  inst3.src = "https://mortezar.github.io/Countin-Chickens/images/Page_3.png";
  inst1.className = 'instructions_image';
  inst2.className = 'instructions_image';
  inst3.className = 'instructions_image';
  instructions.appendChild(inst1);
  instructions.appendChild(inst2); // instructions.appendChild(inst3);
});

var runGame = function runGame(difficulty) {
  start_menu_buttons.outerHTML = '';
  instructions.outerHTML = '';
  var game_canvas = document.getElementById('game-canvas');
  var inGameMenu = document.createElement('div');
  inGameMenu.id = 'inGameMenu';
  var context = game_canvas.getContext('2d');
  game_canvas.height = 675;
  game_canvas.width = 1100;
  var game = new Game(difficulty);
  game.draw(game_canvas);
  var score = document.createElement('div');
  score.innerHTML = 'Score: ' + game.score;
  score.id = 'score';
  score.className = "menu_text";
  inGameMenu.appendChild(score);
  var time = 100;
  var timer = document.createElement('div');
  timer.innerHTML = ' Time: ' + time;
  timer.id = 'timer';
  timer.className = "menu_text";
  inGameMenu.appendChild(timer);

  var runTime = function runTime() {
    time -= 1;
    timer.innerHTML = ' Time: ' + time;

    if (time < 1) {
      clearInterval(timeInterval);
      gameOver(game.score * game.difficulty);
    }
  };

  var timeInterval = setInterval(runTime, 1000);
  var inputField = document.createElement("div");
  inputField.id = 'inputField'; // inputField.setAttribute("type", "text");

  root.appendChild(inGameMenu);
  inGameMenu.appendChild(inputField); // inputField.focus();

  var sumbitButton = document.createElement("BUTTON");
  sumbitButton.innerHTML = 'Submit';

  var handleSubmit = function handleSubmit() {
    if (inputField.innerHTML === '') return false;
    game.guess(inputField.innerHTML);
    context.clearRect(0, 0, game_canvas.width, game_canvas.height);
    game.draw(game_canvas);
    score.innerHTML = 'Score: ' + game.score;
    inputField.innerHTML = '';
  };

  window.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      handleSubmit();
    }

    if (e.keyCode < 48 || e.keyCode > 57) {
      if (e.keyCode === 189) {
        if (inputField.innerHTML[0] === '-') {
          inputField.innerHTML = inputField.innerHTML.slice(1, inputField.innerHTML.length);
        } else {
          inputField.innerHTML = '-' + inputField.innerHTML;
        }
      }

      if (e.keyCode === 8 && inputField.innerHTML.length > 0) {
        inputField.innerHTML = inputField.innerHTML.slice(0, inputField.innerHTML.length - 1);
      }

      return false;
    } else {
      inputField.innerHTML += e.key;
    }
  });
  sumbitButton.addEventListener('click', handleSubmit);
  inGameMenu.appendChild(sumbitButton);
};

var gameOver = function gameOver(score) {
  root.innerHTML = '<div class="menu_text" id="game_over">GAME OVER</div>';
  var canvas = document.getElementById('game-canvas');
  var high_scores_list = document.getElementById('high_scores_list');
  var high_scores = JSON.parse(localStorage.getItem('high_scores')) || [];
  high_scores.push(score);
  high_scores.sort(function (a, b) {
    return a - b;
  });
  high_scores.reverse();
  high_scores = high_scores.slice(0, 10);
  localStorage.setItem('high_scores', JSON.stringify(high_scores));
  var high_scores_text = "<ul> ";

  for (var i = 0; i < high_scores.length; i++) {
    high_scores_text += '<li> <span class="span1">' + (i + 1) + ':' + '</span> <span class="span2">' + high_scores[i] + '</span></li>';
  }

  high_scores_text += '</ul>';
  high_scores_list.innerHTML = high_scores_text;
  var restart_button = document.createElement('BUTTON');
  restart_button.id = 'restart_button';
  restart_button.innerHTML = 'Play Again';
  restart_button.addEventListener('click', function () {
    root.innerHTML = '';
    root.appendChild(start_menu_buttons);
    root.appendChild(instructions);
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
  root.appendChild(restart_button);
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map