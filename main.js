function main() {
  var canvas, canvasContext;

  var ballX = 75;
  var ballY = 75;
  var ballSpeedY = 10;
  var ballSpeedX = 5;
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");
  var stopBallAnimation = 0;
  var framesPerSecond = 30;

  const PADDLE_WIDTH = 100;
  const PADDLE_THICKNESS = 10;
  const PADDLE_DIST_FROM_EDGE = 60;
  var paddleX = 400;

  function updateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    paddleX = mouseX;
  }

  setInterval(updateAll, 1000 / framesPerSecond);
  canvas.addEventListener("mousemove", updateMousePos);
  const colors = [
    "green",
    "violet",
    "orange",
    "blue",
    "yellow",
    "pink",
    "red",
    "gray",
    "purple",
  ];
  function updateAll() {
    moveAll();
    drawAll();
  }

  function ballReset() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
  }

  function moveAll() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
    stopBallAnimation++;

    if (ballY > canvas.height) {
      ballReset();
      //  ballSpeedY *= -1;
    }
    if (ballY < 0) {
      ballSpeedY = +5;
    }

    if (ballX > canvas.width) {
      ballSpeedX *= -1;
    }
    if (ballX < 0) {
      ballSpeedX = +5;
    }

    var paddleTopEdgeY = canvas.height - PADDLE_DIST_FROM_EDGE;
    var paddleBottomEdgeY = paddleTopEdgeY - PADDLE_THICKNESS;
    var paddleLeftEdgeX = paddleX;
    var paddleRightEdgeX = paddleLeftEdgeX + PADDLE_WIDTH;

  
    if (
  
      ballX > paddleLeftEdgeX &&
      ballX < paddleRightEdgeX &&
      ballY < paddleTopEdgeY &&
      ballY > paddleBottomEdgeY 
    ) {
      console.log("Entro aquí");
      ballSpeedY *= -1;
    }
  }

  function drawAll() {
    colorRect(0, 0, canvas.width, canvas.height, "white");
    colorRect(
      paddleX,
      canvas.height - PADDLE_DIST_FROM_EDGE,
      PADDLE_WIDTH,
      PADDLE_THICKNESS,
      "red"
    );
    colorCircle(ballX, ballY, 10, 0, Math.PI * 2, true);
  }

  function colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
    canvasContext.fillStyle = fillColor;
    canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
  }

  function colorCircle(centerX, centerY, radius, fillColor) {
    canvasContext.fillStyle = colors[1];
    canvasContext.beginPath();
    canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
    canvasContext.fill();
  }
}
