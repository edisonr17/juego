var experimentPart1 = function () {
  var canvas = document.getElementById("gameCanvas");
  var context = canvas.getContext("2d");
  var colors = [
    "blue",
    "gray",
    "yellow",
    "orange",
    "red",
    "green",
    "lile",
    "brown",
  ];
  inicializingVariables();

  function inicializingVariables() {
    var framesPerSecond = 30;
    var interval = setInterval(runApplication, 1000 / framesPerSecond);
    capturarClick();
  }

  function runApplication() {}

  function capturarClick() {
    canvas.addEventListener("click", function (event) {
      console.log(event);
      var canvas = document.getElementById("gameCanvas");
      var ctx = canvas.getContext("2d");
      var bounds = event.target.getBoundingClientRect();

      ctx.beginPath();
      ctx.fillStyle = dame_color_aleatorio();
      ctx.arc(
        event.clientX - bounds.left,
        event.clientY - bounds.top,
        5,
        0,
        2 * Math.PI
      );
      ctx.fill();
    });
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

var stopApplication = function (interval) {
  return clearInterval(interval);
};
