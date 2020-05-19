var c = document.getElementById("c");
var ctx = c.getContext("2d");

/* CHAR OPTIONS
var matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
var matrix = "@ESTEBMAISTER ";
And converting the string into an array of single characters */
var matrix = "0101 0101";
matrix = matrix.split("");
var font_size = 10;

//an array of drops -one per column
var drops = [];

//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;
//number of columns for the rain
var columns = c.width / font_size;
{
  //x below is the x coordinate
  //1 = y co-ordinate of the drop(same for every drop initially)
  for (var x = 0; x < columns; x++) {
    drops[x] = 1;
    //drawing the characters
    function draw() {
      window.onresize = function () {
        onResize();
      };
      function onResize() {
        var x = 0;
        c.height = window.innerHeight;
        c.width = window.innerWidth;
        var columns = c.width / font_size;
      }
      //Black BG for the canvas
      //translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, c.width, c.height);
      //ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      //reemplazo
      var colorstext = [
        "rgba(255,255,255,0.5)",
        "rgba(255,255,255,0.5)",
        "rgba(255,255,255,0.5)",
        "rgba(255,255,255,0.5)",
        "rgba(255,255,255,0.5)",
        "rgba(255,255,255,0.5)",
        "rgba(255,255,255,0.5)",
        "rgba(255,255,255,0.5)",
        "#fff",
        "#f00",
      ];
      var colortext = colorstext[Math.floor(Math.random() * colorstext.length)];
      ctx.fillStyle = colortext; //text color
      ctx.font = font_size + "px arial";
      //looping over drops
      for (var i = 0; i < drops.length; i++) {
        //a random character to print
        var text = matrix[Math.floor(Math.random() * matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        //incrementing Y coordinate
        drops[i]++;
      }
    }
  }
  var interval = setInterval(draw, 35);
}

/*
window.onresize = function() { onResize(); }
function onResize() {
  clearInterval(interval);
  var x = 0;
  c.height = window.innerHeight;
  c.width = window.innerWidth;
  var columns = c.width/font_size;
  var interval = setInterval(draw, 35);
} */
