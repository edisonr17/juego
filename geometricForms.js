var geometricForms = function () {
    var canvas = document.getElementById("gameCanvas");
    var context = canvas.getContext("2d");
    const BACKGROUND_COLOR = "black";
    const SHAPE_COLOR = "WHITE";
    inicializingVariables();
  
    function inicializingVariables() {
      var framesPerSecond = 30;
     
      var interval = setInterval(runApplication, 1000 / framesPerSecond);
      //capturarClick();
    }
  
    function runApplication() {
        clearContext()
        drawCube()
    }
  
    function clearContext()
    {
        context.fillStyle = BACKGROUND_COLOR;
        context.fillRect(0, 0, canvas.width, canvas.height, BACKGROUND_COLOR);
    }
 
    function drawCube()
    {   
        drawLine(canvas.width/2, canvas.height/2, (canvas.width/4*2.33), canvas.height/4*2.33, dame_color_aleatorio());
        drawLine(canvas.width/4, canvas.height/4, canvas.width/3, canvas.height/3, dame_color_aleatorio() );
        drawLine((canvas.width/4) * 2, canvas.height/4, (canvas.height/3)*2.34, (canvas.height/3)*1 , dame_color_aleatorio());
        drawLine(canvas.width/4, canvas.height/2, (canvas.width/3), canvas.height/4*2.33, dame_color_aleatorio());
        drawSquare(canvas.width/4, canvas.height/4 , canvas.width/4, canvas.height/4, dame_color_aleatorio());
        drawSquare(canvas.width/3, canvas.height/3 , canvas.width/4, canvas.height/4, dame_color_aleatorio());
      
        
       
    }
    
    function drawSquare(initialX, initialY, width, height, color){
        context.beginPath();
        context.lineWidth = "6";
        context.strokeStyle  = color;
        context.rect(initialX, initialY, width, height, SHAPE_COLOR);
        context.stroke();
    }
    

    function drawLine(xInitial, yInitial, xFinal, yFinal, color)
    {
        context.beginPath();
        context.strokeStyle  = color;
        context.moveTo(xInitial, yInitial);
        context.lineTo(xFinal, yFinal);
        context.stroke();


    }



    function dame_color_aleatorio() {
      var hexadecimal = new Array(
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
      );
      color_aleatorio = "#";
      for (i = 0; i < 6; i++) {
        posarray = aleatorio(0, hexadecimal.length);
        color_aleatorio += hexadecimal[posarray];
      }
      return color_aleatorio;
    }
  
    function aleatorio(inferior, superior) {
      numPosibilidades = superior - inferior;
      aleat = Math.random() * numPosibilidades;
      aleat = Math.floor(aleat);
      return parseInt(inferior) + aleat;
    }
  };
  
 
  