var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Headline = function (_React$Component) {
  _inherits(Headline, _React$Component);

  function Headline() {
    _classCallCheck(this, Headline);

    return _possibleConstructorReturn(this, (Headline.__proto__ || Object.getPrototypeOf(Headline)).apply(this, arguments));
  }

  _createClass(Headline, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: 'text-center display-3', id: 'headline-box' },
          'Tic Tac Toe'
        )
      );
    }
  }]);

  return Headline;
}(React.Component);

var ButtonsXO = function (_React$Component2) {
  _inherits(ButtonsXO, _React$Component2);

  function ButtonsXO() {
    _classCallCheck(this, ButtonsXO);

    return _possibleConstructorReturn(this, (ButtonsXO.__proto__ || Object.getPrototypeOf(ButtonsXO)).apply(this, arguments));
  }

  _createClass(ButtonsXO, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'text-center', id: 'choice-box' },
        React.createElement(
          'button',
          { className: 'btn btn-lg btn-outline-info', id: 'buttonX' },
          'X'
        ),
        React.createElement(
          'button',
          { className: 'btn btn-lg btn-outline-info', id: 'buttonO' },
          'O'
        )
      );
    }
  }]);

  return ButtonsXO;
}(React.Component);

var Row1 = function (_React$Component3) {
  _inherits(Row1, _React$Component3);

  function Row1() {
    _classCallCheck(this, Row1);

    return _possibleConstructorReturn(this, (Row1.__proto__ || Object.getPrototypeOf(Row1)).apply(this, arguments));
  }

  _createClass(Row1, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row text-center' },
        React.createElement(
          'div',
          { className: 'col' },
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-outline-primary buttonXO', id: 'one' },
            React.createElement('p', null)
          ),
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-outline-primary buttonXO', id: 'two' },
            React.createElement('p', null)
          ),
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-outline-primary buttonXO', id: 'three' },
            React.createElement('p', null)
          )
        )
      );
    }
  }]);

  return Row1;
}(React.Component);

var Row2 = function (_React$Component4) {
  _inherits(Row2, _React$Component4);

  function Row2() {
    _classCallCheck(this, Row2);

    return _possibleConstructorReturn(this, (Row2.__proto__ || Object.getPrototypeOf(Row2)).apply(this, arguments));
  }

  _createClass(Row2, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row text-center' },
        React.createElement(
          'div',
          { className: 'col' },
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-outline-primary buttonXO', id: 'four' },
            React.createElement('p', null)
          ),
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-outline-primary buttonXO', id: 'five' },
            React.createElement('p', null)
          ),
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-outline-primary buttonXO', id: 'six' },
            React.createElement('p', null)
          )
        )
      );
    }
  }]);

  return Row2;
}(React.Component);

var Row3 = function (_React$Component5) {
  _inherits(Row3, _React$Component5);

  function Row3() {
    _classCallCheck(this, Row3);

    return _possibleConstructorReturn(this, (Row3.__proto__ || Object.getPrototypeOf(Row3)).apply(this, arguments));
  }

  _createClass(Row3, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row text-center', id: 'row-3-box' },
        React.createElement(
          'div',
          { className: 'col' },
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-outline-primary buttonXO', id: 'seven' },
            React.createElement('p', null)
          ),
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-outline-primary buttonXO', id: 'eight' },
            React.createElement('p', null)
          ),
          React.createElement(
            'button',
            { className: 'btn btn-lg btn-outline-primary buttonXO', id: 'nine' },
            React.createElement('p', null)
          )
        )
      );
    }
  }]);

  return Row3;
}(React.Component);

var App = function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'container jumbotron' },
        React.createElement(Headline, null),
        React.createElement(ButtonsXO, null),
        React.createElement(Row1, null),
        React.createElement(Row2, null),
        React.createElement(Row3, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));

$(document).ready(function () {
  var playerChoice;
  var robotChoice;
  var chosen = false;

  // Each represents a block where x or o is placed
  var one = {
    id: "#one",
    robotCount: 0,
    playerCount: 0,
    player: false,
    robot: false
  };

  var two = {
    id: "#two",
    robotCount: 0,
    playerCount: 0,
    player: false,
    robot: false
  };

  var three = {
    id: "#three",
    robotCount: 0,
    playerCount: 0,
    player: false,
    robot: false
  };

  var four = {
    id: "#four",
    robotCount: 0,
    playerCount: 0,
    player: false,
    robot: false
  };

  var five = {
    id: "#five",
    robotCount: 0,
    playerCount: 0,
    player: false,
    robot: false
  };

  var six = {
    id: "#six",
    robotCount: 0,
    playerCount: 0,
    player: false,
    robot: false
  };

  var seven = {
    id: "#seven",
    robotCount: 0,
    playerCount: 0,
    player: false,
    robot: false
  };

  var eight = {
    id: "#eight",
    robotCount: 0,
    playerCount: 0,
    player: false,
    robot: false
  };

  var nine = {
    id: "nine",
    robotCount: 0,
    playerCount: 0,
    player: false,
    robot: false
  };

  // Array to hold each box for looking through
  var boxes = [one, two, three, four, five, six, seven, eight, nine];

  // AI
  function robotPlayer() {
    var robotChosen = boxes.find(function (x) {
      if (x.robot == false && x.player == false) {
        x.robot = true;
        x.robotCount = 1;
        return x;
      }
    });

    $(robotChosen.id).text(robotChoice);
  }

  // Resets the game
  function resetGame() {
    boxes.forEach(function (x) {
      x.playerCount = 0;
      x.robotCount = 0;
      x.player = false;
      x.robot = false;
    });
  }

  // Choose X or O
  $("#buttonX").click(function () {
    playerChoice = "X";
    robotChoice = "O";
    chosen = true;
    $("#buttonO").hide();
    $("#buttonX").hide();
  });

  $("#buttonO").click(function () {
    playerChoice = "O";
    robotChoice = "X";
    chosen = true;
    $("#buttonX").hide();
    $("#buttonO").hide();
  });

  /* First Row */

  // When you click #One
  $("#one").click(function () {
    // Checks if a box is x or o already before placing either one there
    if (one.player == false && one.robot == false && chosen == true) {
      one.playerCount = 1;
      one.player = true;
      $(this).text(playerChoice);

      robotPlayer();
    }

    // Checks if player or ai connected 3 x's or o's together, then resets game
    if (one.playerCount + two.playerCount + three.playerCount === 3 || one.robotCount + two.robotCount + three.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
      $("#buttonX").show();
      $("#buttonO").show();
    }
    if (one.playerCount + four.playerCount + seven.playerCount === 3 || one.robotCount + four.robotCount + seven.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
      $("#buttonX").show();
      $("#buttonO").show();
    }
    if (one.playerCount + five.playerCount + nine.playerCount === 3 || one.robotCount + five.robotCount + nine.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      boxes.forEach(function (x) {
        x.playerCount = 0;
        x.player = false;
        x.robot = false;
      });
      $("#buttonX").show();
      $("#buttonO").show();
    }
  });

  // When you click #Two
  $("#two").click(function () {
    if (two.player == false && two.robot == false && chosen == true) {
      two.playerCount = 1;
      two.player = true;
      $(this).text(playerChoice);

      robotPlayer();
    }

    if (one.playerCount + two.playerCount + three.playerCount === 3 || one.robotCount + two.robotCount + three.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
      $("#buttonX").show();
      $("#buttonO").show();
    }
    if (two.playerCount + five.playerCount + eight.playerCount === 3 || two.robotCount + five.robotCount + eight.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
      $("#buttonX").show();
      $("#buttonO").show();
    }
  });

  // When you click #Three
  $("#three").click(function () {
    if (three.player == false && three.robot == false && chosen == true) {
      three.playerCount = 1;
      three.player = true;
      $(this).text(playerChoice);

      robotPlayer();
    }

    if (one.playerCount + two.playerCount + three.playerCount === 3 || one.robotCount + two.robotCount + three.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
      $("#buttonX").show();
      $("#buttonO").show();
    }
    if (nine.playerCount + six.playerCount + three.playerCount === 3 || nine.robotCount + six.robotCount + three.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
      $("#buttonX").show();
      $("#buttonO").show();
    }
    if (seven.playerCount + five.playerCount + three.playerCount === 3 || seven.robotCount + five.robotCount + three.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
      $("#buttonX").show();
      $("#buttonO").show();
    }
  });

  // Second Row

  // When you click #Four
  $("#four").click(function () {
    if (four.player == false && four.robot == false && chosen == true) {
      four.playerCount = 1;
      four.player = true;
      $(this).text(playerChoice);

      robotPlayer();
    }

    if (one.playerCount + four.playerCount + seven.playerCount === 3 || one.robotCount + four.robotCount + seven.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
    if (four.playerCount + five.playerCount + six.playerCount === 3 || four.robotCount + five.robotCount + six.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
  });

  // When you click #Five
  $("#five").click(function () {
    if (five.player == false && five.robot == false && chosen == true) {
      five.playerCount = 1;
      five.player = true;
      $(this).text(playerChoice);

      robotPlayer();
    }

    if (two.playerCount + five.playerCount + eight.playerCount === 3 || two.robotCount + five.robotCount + eight.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
    if (four.playerCount + five.playerCount + six.playerCount === 3 || four.robotCount + five.robotCount + six.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
    if (one.playerCount + five.playerCount + nine.playerCount === 3 || one.robotCount + five.robotCount + nine.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
    if (three.playerCount + five.playerCount + seven.playerCount === 3 || three.robotCount + five.robotCount + seven.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
  });

  // When you click #Six
  $("#six").click(function () {
    if (six.player == false && six.robot == false && chosen == true) {
      six.playerCount = 1;
      six.player = true;
      $(this).text(playerChoice);

      robotPlayer();
    }

    if (four.playerCount + five.playerCount + six.playerCount === 3 || four.robotCount + five.robotCount + six.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
    if (nine.playerCount + six.playerCount + three.playerCount === 3 || nine.robotCount + six.robotCount + three.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
  });

  // Third Row

  // When you click #Seven
  $("#seven").click(function () {
    if (seven.player == false && seven.robot == false && chosen == true) {
      seven.playerCount = 1;
      seven.player = true;
      $(this).text(playerChoice);

      robotPlayer();
    }

    if (one.playerCount + four.playerCount + seven.playerCount === 3 || one.robotCount + four.robotCount + seven.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
    if (seven.playerCount + five.playerCount + three.playerCount === 3 || seven.robotCount + five.robotCount + three.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
    if (seven.playerCount + eight.playerCount + nine.playerCount === 3 || seven.robotCount + eight.robotCount + nine.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
  });

  // When you click #Eight
  $("#eight").click(function () {
    if (eight.player == false && eight.robot == false && chosen == true) {
      eight.playerCount = 1;
      eight.player = true;
      $(this).text(playerChoice);

      robotPlayer();
    }

    if (two.playerCount + five.playerCount + eight.playerCount === 3 || two.robotCount + five.robotCount + eight.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
    if (seven.playerCount + eight.playerCount + nine.playerCount === 3 || seven.robotCount + eight.robotCount + nine.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
  });

  // When you click #Nine
  $("#nine").click(function () {
    if (nine.player == false && nine.robot == false && chosen == true) {
      nine.playerCount = 1;
      nine.player = true;
      $(this).text(playerChoice);

      robotPlayer();
    }

    if (one.playerCount + five.playerCount + nine.playerCount === 3 || one.robotCount + five.robotCount + nine.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
    if (seven.playerCount + eight.playerCount + nine.playerCount === 3 || seven.robotCount + eight.robotCount + nine.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
    if (nine.playerCount + six.playerCount + three.playerCount === 3 || nine.robotCount + six.robotCount + three.robotCount === 3) {
      $("#one, #two, #three, #four, #five, #six, #seven, #eight, #nine").text("");
      $("#buttonX").show();
      $("#buttonO").show();
      playerChoice = "";
      robotChoice = "";
      chosen = false;
      resetGame();
    }
  });
}); // End