const TicTacToe = (function(){
  let gameBoard = [
    ["","",""],
    ["","",""],
    ["","",""]
  ]

  let isTurn = false;
  let player1 = createPlayer("player 1", "X");
  let player2 = createPlayer("player 2", "O");
  let score1=0;
  let score2=0;

  function playRound(move){
    
    let [moveA, moveB] = move.split("").map(Number); 

    if(moveA >=3 || moveB>= 3){
      console.log("Invalid Move");
      return;
    }

      if (isTurn === false){
        if(gameBoard[moveA][moveB] !== ""){
          console.log("spot taken");
          return;
        }
        gameBoard[moveA][moveB] = player1.symbol;
        console.log(gameBoard);
        renderBoard();
        isTurn = true;
      }
      else if(isTurn === true){
        if(gameBoard[moveA][moveB] !== ""){
          console.log("spot taken");
         return;
        }
        gameBoard[moveA][moveB] = player2.symbol;
        console.log(gameBoard);
        renderBoard();
        isTurn = false;
      }

      gameOver();
    
    }

    function gameOver(){
      for(let i=0;i<3;i++){
      if(gameBoard[i][0] == "X" && gameBoard[i][1] == "X" && gameBoard[i][2] == "X"){
        console.log("Player 1 wins");
        showGameResult("Player 1 Wins");
        TicTacToe.score1++;
        updateScores();
        clearBoard();
        return;
      }
      else if(gameBoard[0][i] == "X" && gameBoard[1][i] == "X" && gameBoard[2][i] == "X"){
        console.log("Player 1 wins");
        showGameResult("Player 1 Wins");
        TicTacToe.score1++;
        updateScores();
        clearBoard();
        return;
      }
    }

    if(gameBoard[0][0] == "X" && gameBoard[1][1] == "X" && gameBoard[2][2] == "X"){
      console.log("Player 1 wins");
      showGameResult("Player 1 Wins");
      TicTacToe.score1++;
      updateScores();
      clearBoard();
      return;
    }
    if(gameBoard[0][2] == "X" && gameBoard[1][1] == "X" && gameBoard[2][0] == "X"){
      console.log("Player 1 wins");
      showGameResult("Player 1 Wins");
      TicTacToe.score1++;
      updateScores();
      clearBoard();
      return;
    }

    for(let i=0;i<3;i++){
      if(gameBoard[i][0] == "O" && gameBoard[i][1] == "O" && gameBoard[i][2] == "O"){
        console.log("Player 2 wins");
        showGameResult("Player 2 Wins");
        TicTacToe.score2++;
        updateScores();
        clearBoard();
        return;
      }
      else if(gameBoard[0][i] == "O" && gameBoard[1][i] == "O" && gameBoard[2][i] == "O"){
        console.log("Player 2 wins");
        showGameResult("Player 2 Wins");
        TicTacToe.score2++;
        updateScores();
        clearBoard();
        return;
      }
    }

    if(gameBoard[0][0] == "O" && gameBoard[1][1] == "O" && gameBoard[2][2] == "O"){
      console.log("Player 2 wins");
      showGameResult("Player 2 Wins");
      TicTacToe.score2++;
      updateScores();
      clearBoard();
      return;
    }
    if(gameBoard[0][2] == "O" && gameBoard[1][1] == "O" && gameBoard[2][0] == "O"){
      console.log("Player 2 wins");
      showGameResult("Player 2 Wins");
      TicTacToe.score2++;
      updateScores();
      clearBoard();
      return;
    }

    let full =0;

    for(let i =0;i<9;i++){
      if (gameBoard[Math.floor(i/3)][i%3] != "")
      {
       full++
      }
    }

    if(full == 9){
      showGameResult("Draw");
      clearBoard();
    }

  }

  function renderBoard(){
    let board = document.querySelectorAll(".inner-board");
    for(let i =0; i< 9;i++){
      board[i].textContent = gameBoard[Math.floor(i/3)][i%3];
    }
  }

  function clearBoard(){
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
          gameBoard[i][j] = "";
      }
  }

    let squares = document.querySelectorAll(".inner-board");
    squares.forEach(square =>{
      square.textContent ="";
    });

    isTurn = false;
  }

  function resetScores(){
    TicTacToe.score1=0;
    TicTacToe.score2=0;
    updateScores();
  }

  return{
    playRound,
    clearBoard,
    resetScores,
    score1,
    score2
  };
 

})();

function createPlayer(player, symbol){
    
  return{
    player,
    symbol
  }
}

function setupBoard(){

  let square1 = document.getElementById("board1");
  square1.addEventListener("click", function(){
    TicTacToe.playRound("00");
  });

  let square2 = document.getElementById("board2");
  square2.addEventListener("click", function(){
    TicTacToe.playRound("01");
  });

  let square3 = document.getElementById("board3");
  square3.addEventListener("click", function(){
    TicTacToe.playRound("02");
  });

  let square4 = document.getElementById("board4");
  square4.addEventListener("click", function(){
    TicTacToe.playRound("10");
  });

  let square5 = document.getElementById("board5");
  square5.addEventListener("click", function(){
    TicTacToe.playRound("11");
  });

  let square6 = document.getElementById("board6");
  square6.addEventListener("click", function(){
    TicTacToe.playRound("12");
  });

  let square7 = document.getElementById("board7");
  square7.addEventListener("click", function(){
    TicTacToe.playRound("20");
  });

  let square8 = document.getElementById("board8");
  square8.addEventListener("click", function(){
    TicTacToe.playRound("21");
  });

  let square9 = document.getElementById("board9");
  square9.addEventListener("click", function(){
    TicTacToe.playRound("22");
  });

}

let player1Input = document.getElementById("player1Input");
let player1Button = document.getElementById("player1Button");
let player1Name = document.getElementById("player1Name");

player1Button.addEventListener("click", function(){
  player1Name.textContent = player1Input.value;
});

let player2Input = document.getElementById("player2Input");
let player2Button = document.getElementById("player2Button");
let player2Name = document.getElementById("player2Name");

player2Button.addEventListener("click", function(){
  player2Name.textContent = player2Input.value;
});

let clearButton = document.getElementById("clearButton");

clearButton.addEventListener("click", function(){
  TicTacToe.clearBoard();
});

let restartButton = document.getElementById("restartButton");

restartButton.addEventListener("click",function(){
  player1Name.textContent="";
  player2Name.textContent="";
  TicTacToe.resetScores();
  TicTacToe.clearBoard();
});

function updateScores(){
let player1Score = document.getElementById("player1Score");
let player2Score = document.getElementById("player2Score");

player1Score.textContent = TicTacToe.score1;
player2Score.textContent = TicTacToe.score2;
}

function showGameResult(message){
  let gameResultBanner = document.getElementById("gameResultBanner");
  let gameResultMessage = document.getElementById("gameResultMessage");

  gameResultMessage.textContent = message;
  gameResultBanner.style.display = "block";
}

let gameResultButton = document.getElementById("gameResultButton");
gameResultButton.addEventListener("click", function(){
  let gameResultBanner = document.getElementById("gameResultBanner");
  gameResultBanner.style.display = "none";
})

document.addEventListener("DOMContentLoaded", setupBoard);



