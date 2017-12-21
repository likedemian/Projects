// function reference() {
//   console.log("실버:", ((24 / 54) * 100).toFixed(0) + "%");
//   console.log("골드:", ((15 / 54) * 100).toFixed(0) + "%");
//   console.log("에메랄드:", ((7 / 54) * 100).toFixed(0) + "%");
//   console.log("다이아:", ((4 / 54) * 100).toFixed(0) + "%");
//   console.log("크리스탈:", ((2 / 54) * 100).toFixed(0) + "%");
//   console.log("조커:", ((1 / 54) * 100).toFixed(0) + "%");
//   console.log("메가:", ((1 / 54) * 100).toFixed(0) + "%");
// }

var roulette = document.getElementById('roulette');
var param = document.getElementById('result');
var btnContainer = document.getElementById('button-container');

// var silver = document.getElementById('silver');
// var gold = document.getElementById('gold');
// var emerald = document.getElementById('emerald');
// var diamond = document.getElementById('diamond');
// var crystal = document.getElementById('crystal');
// var joker = document.getElementById('joker');
// var mega = document.getElementById('mega');



var count = 0;

var user = {
  "name": "카이지",
  "money": 10000
};

money.innerHTML = user.money;

function bettingPercentage() {
  var bet = Math.floor(Math.random() * 54);
  if (bet >= 0 && bet < 24) {
    param.innerHTML = "실버";
  } else if (bet >= 24 && bet < 39) {
    param.innerHTML = "골드";
  } else if (bet >= 39 && bet < 46) {
    param.innerHTML = "에메랄드";
  } else if (bet >= 46 && bet < 50) {
    param.innerHTML = "다이아몬드";
  } else if (bet >= 50 && bet < 52) {
    param.innerHTML = "크리스탈";
  } else if (bet >= 52 && bet < 53) {
    param.innerHTML = "조커";
  } else if (bet >= 53 && bet < 54) {
    param.innerHTML = "메가";
  }
}



// var btn_container = document.getElementById('button-container');



function bettingSelect() {
  for (var i = 0; i < 7; i++) {
    var bettingBtn = document.createElement('button');
    bettingBtn.id = i;
    bettingBtn.innerText = i;
    btnContainer.append(bettingBtn);
    bettingBtn.addEventListener("click", function() {
      this.style.backgroundColor = "red";
    })
  }
};

bettingSelect();