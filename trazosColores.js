function trazosColores()
{
    var canvas, canvasContext;

    
        var ballX =75;
        var ballY =75;
        var ballSpeedY = 5;
        var ballSpeedX = 5;
      canvas = document.getElementById("gameCanvas");
      canvasContext = canvas.getContext("2d");

      var framesPerSecond = 100;
      setInterval(updateAll, 1000 / framesPerSecond);
      const colors = ["green", "orange", "blue", "yellow", "pink", "red", "#00334"];
      function updateAll() {
      ballX += ballSpeedX;
      ballY += ballSpeedY;
      
      var index = Math.floor((Math.random()*colors.length))


      if(ballY >canvas.height)
      {
          ballSpeedY *=-1;
      }
      if(ballY < 0)
      {
          ballSpeedY =+5;
      }

      if(ballX >canvas.width)
      {
          ballSpeedX *=-1;
      }
      if(ballX < 0)
      {
          ballSpeedX =+5;
      }
      //  canvasContext.fillStyle = "white";
      //canvasContext.fillRect(0, 0, canvas.width, canvas.height);
        canvasContext.fillStyle = colors[index];
        canvasContext.beginPath();
        canvasContext.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
        canvasContext.fill();
      }
    
}