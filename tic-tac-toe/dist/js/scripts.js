var matrixContainer = document.getElementById('matrix__container');
var display = document.getElementById('display');
var reset = document.getElementById('reset-btn');
var count = 0;


function board() {
  display.innerHTML = "O의 차례입니다."
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var matrix = document.createElement('button');
      matrixContainer.append(matrix);
      matrix.classList.add("matrix");
      matrix.innerHTML = "­­­ ";
      matrix.id = [i, j];
      matrix.onclick = function() {
        if (count % 2 === 0 && this.innerHTML != "X") {
          this.innerHTML = "O";
          display.innerHTML = "X의 차례입니다.";
          count++;
        } else if (count % 2 !== 0 && this.innerHTML != "O") {
          this.innerHTML = "X"
          display.innerHTML = "O의 차례입니다.";
          count++;
        }
      }
    }
  }
  console.log(matrix.id.split(',')[0]);
}


board();