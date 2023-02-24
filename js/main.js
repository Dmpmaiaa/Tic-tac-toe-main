// CRIAR UM COIN FLIP PARA DECIDIR QUEM COMEÇA A JOGAR.

const cell = document.querySelectorAll(".cell"); // <- cria uma constante com uma função que cria um array com as divs pertencentes à class= "cell"
cell.forEach((element) => element.addEventListener("click", setSymbol)); //<-- loop que adiciona um eventlistener a cada cell => chama a função setSymbol a cada click
let p1Turn = true; // variavel  q define o turno dos jogadores
let p2Turn = false; // variavel same
// WINNING CONDITIONS
const winCon = [
  ["tl", "tc", "tr"],
  ["cl", "cc", "cr"],
  ["bl", "bc", "br"],
  ["tl", "cl", "bl"],
  ["tc", "cc", "bc"],
  ["tr", "cr", "br"],
  ["tl", "cc", "br"],
  ["tr", "cc", "bl"],
];

// 1-> loop de cada elemento do array winCon em que cada elemento do winCon é um array.
// 2-> loop no primeiro elemento da array

let p1Play = []; // array das jogadas p1
let p2Play = []; // array p2

function setSymbol(event) {
  let targ = document.querySelector(`#${event.target.id}`); //<- seleciona o ID da cell em que se carrega

  if (p1Turn === true) {
    if (targ.innerHTML === "") {
      targ.innerHTML = "X";
      p1Play.push(event.target.id);
      p1Turn = false;
      p2Turn = true;
      console.log("wwww");
    }
  } else if (p2Turn === true) {
    if (targ.innerHTML === "") {
      targ.innerHTML = "O";
      p2Play.push(event.target.id);
      p1Turn = true;
      console.log("wwww");
    }
  }
  let p1Result = winCon.map((element) =>
    element.every((item) => p1Play.includes(item))
  );
  let p2Result = winCon.map((element) =>
    element.every((item) => p2Play.includes(item))
  );

  if (p1Result.includes(true)) {
    console.log("Player 1 Wins!");
  } else if (p2Result.includes(true)) {
    console.log("Player 2 Wins!");
  }
}

const startBtn = document.querySelector(".start");
const boardGame = document.querySelector(".board-container");
const startScreen = document.querySelector(".screen");
startBtn.addEventListener("click", startGame);

function startGame() {
  startScreen.classList.add("hidden");
  boardGame.classList.remove("hidden");
  console.log(startScreen.className);
}

const quitGame = document.querySelector(".quit");
quitGame.addEventListener("click", endGame);

function endGame() {
  boardGame.classList.add("hidden");
  startScreen.classList.remove("hidden");
}

// function GFG_Fun() {
//   document.getElementsByClassName('child1')[0].
//   style.visibility = 'hidden';
//   down.innerHTML = "Element is hidden";

// function winner() {
//     console.log(p1Play)
//    console.log(p1Play == winCon[0])
//    console.log(winCon[0])
// }
// winner()
