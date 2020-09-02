function trazosColores()
{
    var canvas, canvasContext;

    
        var ballX =75;
        var ballY =75;
        var ballSpeedY = 2;
        var ballSpeedX = 2;
      canvas = document.getElementById("gameCanvas");
      canvasContext = canvas.getContext("2d");
      var stopBallAnimation= 0; 
      var framesPerSecond = 100;
      setInterval(updateAll, 1000 / framesPerSecond);
      const colors = ["green","violet","orange", "blue", "yellow", "pink", "red", "gray", "purple"];
      function updateAll() {
      ballX += ballSpeedX;
      ballY += ballSpeedY;
      stopBallAnimation++;
     


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

      if(stopBallAnimation == 20)
      { 
        var index = Math.floor((Math.random()*colors.length))
            canvasContext.fillStyle = "white";
            canvasContext.fillRect(0, 0, canvas.width, canvas.height);
            stopBallAnimation = 0;
      }


        canvasContext.fillStyle = colors[index];
        canvasContext.beginPath();
        canvasContext.arc(ballX, ballY, 10, 0, Math.PI * 2, true);
        canvasContext.fill();
      }
    
}