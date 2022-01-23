// computer choose randomly beetwen rock paper or scissor
// define the three variable to choose from

function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    const random = choice[Math.floor(Math.random()*choice.length)];
    return random;
}

// single round of the game
// two parameters from player and computer that will be defined later
// it should return a string that declares who won the round and how

function playRound (playerSelection, computerSelection) {

    let playerSelFix = playerSelection.charAt(0).toUpperCase() + (playerSelection.slice(1)).toLowerCase();

    computerWinRound = `You lose! ${computerSelection} beats ${playerSelFix}`;

    playerWinRound = `You win! ${playerSelFix} beats ${computerSelection}`;

    drawRound = `Draw! You both choose ${playerSelFix}`;

    if (playerSelFix === computerSelection) {
        return drawRound;
    } else if (playerSelFix === "Rock" & computerSelection === "Scissors" || playerSelFix === "Scissors" & computerSelection === "Paper" || playerSelFix === "Paper" & computerSelection === "Rock") {
        return playerWinRound;
    } else return computerWinRound;    
}

// function that plays 5 round of the game
// loop or call 5 times prev function
// use console to display the result
// get input from the player
// helper functions?


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    for (let i = 1; i < 6; i++) {
        switch(playRound(prompt("Rock, Paper or Scissors?"), computerPlay())) {
            case drawRound:
                drawScore++;
                break;
            case playerWinRound:
                playerScore++;
                break;
            case computerWinRound:
                computerScore++;
                break; 
        }
    }
    console.log(playerScore);
    console.log(computerScore);
    console.log(drawScore);
}