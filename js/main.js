// CRIAR UM COIN FLIP PARA DECIDIR QUEM COMEÇA A JOGAR.

const startBtn = document.querySelectorAll(".start");
const boardGame = document.querySelector(".board-container");
const startScreen = document.querySelector(".screen");
const winScreen = document.querySelector(".winScreen");
const quitGame = document.querySelectorAll(".quit");





startBtn.forEach((element) => element.addEventListener("click", gamesFires)); 



function gamesFires() {
    // *********************************+*******
    // ***** Hides screen and shows board ******
    // *****************************************
    startScreen.classList.add("hidden");
    winScreen.classList.add('hidden')
    boardGame.classList.remove("hidden");

    // *********************************+*******
    // ***** ADDS E.LISTENERS TO CELLS ******
    // *****************************************
    const cell = document.querySelectorAll(".cell"); // <- cria uma constante com uma função que cria um array com as divs pertencentes à class= "cell"
    cell.forEach((element) => element.addEventListener("click", placeSymbol)); //<-- loop que adiciona um eventlistener a cada cell => chama a função setSymbol a cada click

    /// *********************************+*******
    // ***** Winning conditions ******
    // *****************************************

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

    /// *********************************+*******
    // ***** PLAYERS MOVES AND TURNS ********
    // *****************************************

    let p1Play = []; // array das jogadas p1
    let p2Play = []; // array p2
    let p1Turn = true; // variavel  q define o turno dos jogadores
    let p2Turn = false; // variavel same

    /// *********************************+*******
    // ***** GAME LOGIC *****************
    // *****************************************
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
            winScreen.classList.remove('hidden')
            boardGame.classList.add('hidden')
        } else if (p2Result.includes(true)) {
            console.log("Player 2 Wins!");
        }
    }

    /// *********************************+*******
    // ***** QUIT GAME BUTTON ******
    // *****************************************
    
    quitGame.forEach((element) => element.addEventListener("click", endGame)); 

    function endGame() {
        boardGame.classList.add("hidden");
        winScreen.classList.add('hidden');
        startScreen.classList.remove("hidden");
    }
}
