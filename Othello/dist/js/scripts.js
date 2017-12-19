var board = document.getElementById('board');
var count = 0;

for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    var matrix = document.createElement('button');
    matrix.id = [i + 1, j + 1];
    board.appendChild(matrix);
    // matrix.innerHTML = [Number(i + 1) + " , " + Number(j + 1)];
    // matrix.innerHTML = "";
    matrix.addEventListener("click", function putStone() {
      count++;
      console.log(count);
      if (count % 2 === 0) {
        this.classList.add('white');
      } else {
        this.classList.add('black');
      }
        console.log(this);
    })
  }
};
