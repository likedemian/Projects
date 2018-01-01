var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var dx = 0;
// var canvasWidth = 
// var canvasWidth = 
function rotateSquare() {
  dx++;
  
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.rotate(Math.PI / 180);
  ctx.translate(-canvas.width / 2, -canvas.height / 2);
  ctx.fillRect(475, 475, 50, 50);
  requestAnimationFrame(rotateSquare);
}

requestAnimationFrame(rotateSquare);