import $ from "https://cdn.skypack.dev/jquery@3.6.0";

var housesPerRow = 3;
var game = "";
var turn = "x";
var isGameOn = true;

function resetGameContainer() {
  for (var i = 0; i < housesPerRow; i++) {
    var temp = "<div class = \"row\">";
    for (var j = 0; j < housesPerRow; j++) {
      temp += "<div class = \"house\"></div>";
      if (j != housesPerRow - 1) {
        temp += "<span class = \"v-line\"></span>";
      }
    }
    temp += "</div>";
    if (i != housesPerRow - 1) {
      temp += "<span class = \"h-line\"></span>";
    }
    game += temp;
  }
  $("#ticTacToeContainer").html(game);
}

var houses = document.getElementsByClassName("house");

$(".house").on("click", function(){
  if (isGameOn && $(this).text() == "") {
  $(this).text(turn);
  changeColor($(this));
  checkForWin();
  changeTurn();
  }
});

function changeTurn(elem) {
  if (turn == "x") {
    turn = "o";
  } else {
    turn = "x";
  }
}

function changeColor(elem) {
  if (turn == "x") {
    elem.addClass("x-house");
  } else {
    elem.addClass("o-house");
  }
}

function checkForWin() {
  // Check Rows
  for (var i = 0; i < housesPerRow; i++) {
    var counter = 0;
    for (var j = 0; j < housesPerRow - 1; j++) {
      var houseNum = i * housesPerRow + j;
      if ($(houses[houseNum + 1]).text() === $(houses[houseNum]).text() && $(houses[houseNum]).text() === turn) {
        counter++;
      }
      else {
        break;
      }
    }
    if (counter == housesPerRow - 1) {
      alert(turn + " Won!");
      isGameOn = false;
      break;
    }
    counter = 0;
  }
  // End Check Rows
  
  // Check Columns
  for (var i = 0; i < housesPerRow; i++) {
    var counter = 0;
    for (var j = 0; j < housesPerRow - 1; j++) {
      var houseNum = i + j * housesPerRow;
      if ($(houses[houseNum + housesPerRow]).text() === $(houses[houseNum]).text() && $(houses[houseNum]).text() === turn) {
        counter++;
      }
      else {
        break;
      }
    }
    if (counter == housesPerRow - 1) {
      alert(turn + " Won!");
      isGameOn = false;
      break;
    }
    counter = 0;
  }
  
  // End Check Columns
  
  // Check Diagonals
  for (var i = 0; i + housesPerRow + 1 <= (housesPerRow * housesPerRow); i += housesPerRow + 1) {
    if ($(houses[i + housesPerRow + 1]).text() === $(houses[i]).text() && $(houses[i]).text() === turn) {
      counter++;
    }
    else {
      break;
    }
    if (counter == housesPerRow - 1) {
      alert(turn + " Won!");
      isGameOn = false;
      break;
    }
  }
  counter = 0;
  for (var i = 2; i + 2 <= (housesPerRow * housesPerRow) - 1; i += 2) {
    if ($(houses[i + 2]).text() === $(houses[i]).text() && $(houses[i]).text() === turn) {
      counter++;
    }
    else {
      break;
    }
    if (counter == housesPerRow - 1) {
      alert(turn + " Won!");
      isGameOn = false;
      break;
    }
  }
  // End Check Diagonals
}