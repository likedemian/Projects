function board() {
  var arr = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  var m1 = document.getElementById('m1');
  var m2 = document.getElementById('m2');
  var m3 = document.getElementById('m3');
  var m4 = document.getElementById('m4');
  var m5 = document.getElementById('m5');
  var m6 = document.getElementById('m6');
  var m7 = document.getElementById('m7');
  var m8 = document.getElementById('m8');
  var m9 = document.getElementById('m9');

  arr[0][0] = m1;
  arr[0][1] = m2;
  arr[0][2] = m3;
  arr[1][0] = m4;
  arr[1][1] = m5;
  arr[1][2] = m6;
  arr[2][0] = m7;
  arr[2][1] = m8;
  arr[2][2] = m9;

  return arr;
}

function clickMatrix(arr) {
  var count = 0;
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      arr[i][j].onclick = function() {
        if (count % 2 === 0 && this.innerText != "X") {
          this.innerText = "O";
          count++;
        } else if (count % 2 !== 0 && this.innerText != "O") {
          this.innerText = "X"
          count++;
        }
      }
    }
  }
  return arr;
}

function checkWinner(arr) {
  if (arr[0][0] == arr[0][1] && arr[0][2]) {
    console.log(arr[0][0], "이 이김");
  }
  return arr;
}



(function() {

  var matrix = board();
  clickMatrix(matrix);
  checkWinner(matrix);
})();