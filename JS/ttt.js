console.log("JS is working");

const player1 = "X";
const player2 = "O";

let turnNumber = 1;

let player1name = "Player X";
let player2name = "Player O";

let currentPlayer = player1;
let firstPlayer = player2;

player1CurrentScore = 0;
player2CurrentScore = 0;

// $(".welcomescreen").delay(0).fadeOut(1500);

//scoreboard button
$("#winicon").on('click', function() {
    $(".scoreboard").delay(0).fadeIn(1500);

    $(".scoreboard-text").html(player1name + "<br>" + player1CurrentScore + "<br>" + "<br>" + player2name + "<br>" + player2CurrentScore);
  })


//scoreboard out
$(".scoreboard").on('click', function() {
  $(".scoreboard").delay(0).fadeOut(2000)})

//reset game button
$("#reseticon").on('click', function() {
    $(".game-cell").text(""); turnNumber=1})



// Watch for click event and execute functions
$(".game-cell").on('click', function() {
// Is the cell empty? If so, fill it and switch current player.
  if ($(event.target).text()===""){
// Set the text to the value of the current player & add celebration image to cell
    ($(event.target).html(currentPlayer + "<img id='turn" + turnNumber + "' class='player" + currentPlayer + " celebrationimage' src='images/fireworks_final_speed.gif?" + turnNumber + "' alt='fireworks should be here'></img>"));


// Increase turn number
  turnNumber = (turnNumber + 1);


// Check for Win

// Switch Current Player
        if (currentPlayer === player1) {
          currentPlayer = player2;
            $(".rotation3").addClass("xturnrotation");
              $(".rotation2").removeClass("oturnrotation")
        }
          else {currentPlayer = player1;
            $(".rotation2").addClass("oturnrotation")          
          $(".rotation3").removeClass("xturnrotation")

        };


          checkWinHardcoding();
            if (turnNumber === 10){$(".game-cell").text(""); turnNumber=1};
  }
});

      // FUNCTIONS

// Check Wins (hardcode) & Execute Win Function
let checkWinHardcoding = function() {

  // X Wins
    // Vertical
  if ($("#A1, #A2, #A3").text() === "XXX"){winnerFunctionX();}

  if ($("#B1, #B2, #B3").text() === "XXX"){winnerFunctionX()};
  if ($("#C1, #C2, #C3").text() === "XXX"){winnerFunctionX()};
    //Horizontal
  if ($("#A1, #B1, #C1").text() === "XXX"){winnerFunctionX()};
  if ($("#A2, #B2, #C2").text() === "XXX"){winnerFunctionX()};
  if ($("#A3, #B3, #C3").text() === "XXX"){winnerFunctionX()};
    //Diagonal
  if ($("#A1, #B2, #C3").text() === "XXX"){winnerFunctionX()};
  if ($("#C1, #B2, #A3").text() === "XXX"){winnerFunctionX()};

  // O wins
    // Vertical
  if ($("#A1, #A2, #A3").text() === "OOO"){winnerFunctionO()};
  if ($("#B1, #B2, #B3").text() === "OOO"){winnerFunctionO()};
  if ($("#C1, #C2, #C3").text() === "OOO"){winnerFunctionO()};
    // Horizontal
  if ($("#A1, #B1, #C1").text() === "OOO"){winnerFunctionO()};
  if ($("#A2, #B2, #C2").text() === "OOO"){winnerFunctionO()};
  if ($("#A3, #B3, #C3").text() === "OOO"){winnerFunctionO()};
    // Diagonal
  if ($("#A1, #B2, #C3").text() === "OOO"){winnerFunctionO()};
  if ($("#C1, #B2, #A3").text() === "OOO"){winnerFunctionO()};
}


// What to do when the game is won by X
let winnerFunctionX = function () {
  $(".playerX#turn0").delay(0).fadeIn(0);
  $(".playerX#turn1").delay(166).fadeIn(0);
  $(".playerX#turn2").delay(333).fadeIn(0);
  $(".playerX#turn3").delay(500).fadeIn(0);
  $(".playerX#turn4").delay(665).fadeIn(0);
  $(".playerX#turn5").delay(831).fadeIn(0);
  $(".playerX#turn6").delay(1000).fadeIn(0);
  $(".playerX#turn7").delay(1166).fadeIn(0);
  $(".playerX#turn8").delay(1332).fadeIn(0);

  $(".rotation2").addClass("winrotation");
  $(".rotation3").addClass("winrotation2");

    if (player1 === "X"){(player1CurrentScore = player1CurrentScore + 1);
    $("#p1score").text(player1CurrentScore);
    }
      else if (player2 === "X"){(player2CurrentScore = player2CurrentScore + 1);
      $("#p2score").text(player2CurrentScore);
      }



  // Change who goes first
    if (firstPlayer === player1) {firstPlayer = player2}
      else {firstPlayer = player1};
          currentPlayer = firstPlayer;


          ($("img").on('click', function() {$(".game-cell").text("")
          $(".rotation2").removeClass("winrotation");
          $(".rotation3").removeClass("winrotation2");

        }))
turnNumber = 1;
console.log("X has won " + player1CurrentScore);
console.log("O has won " + player2CurrentScore);
  }


// What to do when the game is won by O
let winnerFunctionO = function () {
  $(".playerO#turn0").delay(0).fadeIn(0);
  $(".playerO#turn1").delay(166).fadeIn(0);
  $(".playerO#turn2").delay(333).fadeIn(0);
  $(".playerO#turn3").delay(500).fadeIn(0);
  $(".playerO#turn4").delay(665).fadeIn(0);
  $(".playerO#turn5").delay(831).fadeIn(0);
  $(".playerO#turn6").delay(1000).fadeIn(0);
  $(".playerO#turn7").delay(1166).fadeIn(0);
  $(".playerO#turn8").delay(1332).fadeIn(0);

$(".rotation2").addClass("winrotation");
$(".rotation3").addClass("winrotation2");



    if (player1 === "O"){(player1CurrentScore = player1CurrentScore + 1);
      $("#p1score").text(player1CurrentScore)
    }
    else if (player2 === "O"){(player2CurrentScore = player2CurrentScore + 1);
      $("#p2score").text(player2CurrentScore)}

      // Change who goes first
    if (firstPlayer === player1) {firstPlayer = player2}
      else {firstPlayer = player1};


    currentPlayer = firstPlayer;




    ($("img").on('click', function() {
      $(".game-cell").text("")
      $(".rotation2").removeClass("winrotation");
      $(".rotation3").removeClass("winrotation2");
    }))
    turnNumber = 1;
    console.log("X has won " + player1CurrentScore);
    console.log("O has won " + player2CurrentScore);
}


// Who is the current player?
let findCurrentPlayerName = function () {
  if (currentPlayer === player1) {return player1name}
  else {return player2name}
}
