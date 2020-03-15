// Checkpoint 1 | Creating the queen object
var queen = {
  direction: "S",
  position: {
    xcoordinate: 4,
    ycoordinate: 5
  },
  whereAbouts: ["f4"]
};

// Checkpoint 2 | Turning the queen
function changeDirection(dir) {
  queen.direction = dir;
}

// Checkpoint 3 | Moving the queen
function jump(stepTo) {
  var dire = queen.direction;
  var step = Number(stepTo);
  xlocation = queen.position.xcoordinate;
  ylocation = queen.position.ycoordinate;
  if (dire == "S" && Notboundary(xlocation + step, ylocation)) {
    queen.position.xcoordinate += step;
  } else if (dire == "N" && Notboundary(xlocation - step, ylocation)) {
    queen.position.xcoordinate -= step;
  } else if (dire == "E" && Notboundary(xlocation, ylocation + step)) {
    queen.position.ycoordinate += step;
  } else if (dire == "W" && Notboundary(xlocation, ylocation - step)) {
    queen.position.ycoordinate -= step;
  } else if (dir == "NE" && Notboundary(xlocation - step, ylocation + step)) {
    queen.position.xcoordinate -= step;
    queen.position.ycoordinate += step;
  } else if (dire == "NW" && Notboundary(xlocation - step, ylocation - step)) {
    queen.position.xcoordinate -= step;
    queen.position.ycoordinate -= step;
  } else if (dire == "SE" && Notboundary(xlocation + step, ylocation + step)) {
    queen.position.xcoordinate += step;
    queen.position.ycoordinate += step;
  } else if (dire == "SW" && Notboundary(xlocation + step, ylocation - step)) {
    queen.position.xcoordinate += step;
    queen.position.ycoordinate -= step;
  } else {
    console.log("This move not allowed");
  }
}

function Notboundary(x, y) {
  if (x >= 0 && x < 8 && y >= 0 && y < 8) return true;
  else return false;
}

function updatePosition() {
  queen.whereAbouts.push(
    positionLog[queen.position.xcoordinate][queen.position.ycoordinate]
  );
}

function totalMovements() {
  console.log("Total moments of queen is \n");
  for (var index = 0; index < queen.whereAbouts.length; index++)
    console.log(queen.whereAbouts[index] + "\n");
}

function move() {
  for (var index = 0; index < steps.length; index++) {
    changeDirection(dir[index]);
    jump(steps[index]);
    updatePosition();
  }
  totalMovements();
}

function splitData(data) {
  var res = data.split(" ");
  for (var start = 0; start < res.length; start++) {
    temp = res[start];
    dir.push(temp.slice(0, temp.length - 1));
    steps.push(temp.length - 1);
  }
}

function startGame() {
  console.log("Welcome to the chess game \n");
  var input_string = prompt(
    "Enter direction and steps seperated by space like NE 4 W 2 etc..."
  );
  splitData(input_string.toString());
  move();
}

positionLog = [
  ["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],

  ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],

  ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],

  ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],

  ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],

  ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],

  ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],

  ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]
];
var steps = [],
  dir = [];
var xlocation, ylocation;
startGame();
