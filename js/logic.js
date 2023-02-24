const startBtn = document.querySelector(".start");
const boardGame = document.querySelector(".board-container");
const startScreen = document.querySelector(".screen");
const cell = document.querySelectorAll(".cell");
const quitGame = document.querySelector(".quit");


// EVENT LISTENERS

startBtn.addEventListener("click", gamesFires);
cell.forEach((element) => element.addEventListener("click", placeSymbol));


// LOGIC



let p1Play = []; // array das jogadas p1
let p2Play = []; // array p2
let p1Turn = true; // variavel  q define o turno dos jogadores
let p2Turn = false; // variavel same

 
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


    function placeSymbol(event) {
        let targ = document.querySelector(`#${event.target.id}`); //<- seleciona o ID da cell em que se carrega

        /// *********************************+*******
        // ******** PLAYER 1 PLAYS *****************
        // *****************************************
        if (p1Turn === true) {
            if (targ.innerHTML === "") {
                targ.innerHTML = "X";
                p1Play.push(event.target.id);
                p1Turn = false;
                p2Turn = true;
            }
            /// *********************************+*******
            // ***** PLAYER 2 PLAYS******
            // *****************************************
        } else if (p2Turn === true) {
            if (targ.innerHTML === "") {
                targ.innerHTML = "O";
                p2Play.push(event.target.id);
                p1Turn = true;
            }
        }

        /// *********************************+*******
        // ********** CHECKS WINS **************
        // *****************************************
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

    /// *********************************+*******
    // ***** QUIT GAME BUTTON ******
    // *****************************************
   
    quitGame.addEventListener("click", endGame);

    function endGame() {
        boardGame.classList.add("hidden");
        startScreen.classList.remove("hidden");
    }
}
