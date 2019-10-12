
<!DOCTYPE html>
<html>
<body>

<canvas id="myCanvas" width="300" height="300" style="border:1px solid #d3d3d3;">
Your browser does not support the HTML5 canvas tag.</canvas>

<script>

function circ(x,y,r,color, ctx) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}

function draw_circle(x, y, sx, sy, N, color, ctx) {
  circ( (x - 1.0 /2.0) * sx / N, (y - 1.0 /2.0) * sy / N, sx/2.5/N, color, ctx);
}

function draw_board(sx, sy, N, ctx) {
  ctx.beginPath();
  ctx.strokeStyle = "blue";
  var i;
  for (i = 0; i < N + 1; i++) { 
    ctx.moveTo(0, i * sx / N);
    ctx.lineTo(sy, i * sx / N);
  
  }
  
  for (i = 0; i < N + 1; i++) { 
    ctx.moveTo(i * sy / N, 0);
    ctx.lineTo(i * sy / N, sx);
  
  }
 ctx.stroke(); 
 
 for (i = 1; i <= N; i++) { 
   for (j = 1; j <= N; j++) { 
     if( i === 5 ) {
     draw_circle(i, j, sx, sy, N, "red", ctx);
     } else {
     draw_circle(i, j, sx, sy, N, "blue", ctx);
     }
    }
 }


}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();



draw_board(300, 300, 10, ctx);

ctx.stroke();
</script> 

</body>
</html>
