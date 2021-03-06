// button listener that trigger the playRound with the choosen button id

const btn = document.querySelectorAll('button');

btn.forEach(b => b.addEventListener('click', playerPlay));

function playerPlay (player) {
    if (this.id == "rock") {
        player = "Rock";
    } else if (this.id == "paper") {
        player = "Paper";
    } else player = "Scissors";
    return playRound(player, computerPlay());
}

let playerScore = 0;
let cpuScore = 0;
// computer choose randomly beetwen rock paper or scissor

function computerPlay() {
    const choice = ["Rock", "Paper", "Scissors"];
    const random = choice[Math.floor(Math.random()*choice.length)];
    return random;
}

// I just need to confront them and print the result in a div, create const div on the DOM

const result = document.querySelector("#result");

const score = document.createElement("p");

const playerCount = document.querySelector("#player");
const cpuCount = document.querySelector("#cpu");

const reset = document.createElement("button");
reset.textContent = "Reset";

reset.addEventListener('click', () => document.location.reload());

function playRound (player, cpu) {
    if (player === cpu) {
        return result.textContent = `Draw! You both choose ${player}`;
    } else if (player === "Rock" & cpu === "Scissors" || player === "Scissors" & cpu === "Paper" || player === "Paper" & cpu === "Rock") {
        return playerWinRound(`${player}`, `${cpu}`);
    } else return cpuWinRound(`${cpu}`, `${player}`);  
}
// need to add the game counter, one more div for the game results, and one more for the victory/lose text

function playerWinRound(player, cpu) {
    playerScore += 1;
    
    result.textContent = `You win this round! ${player} beats ${cpu}`;
    playerCount.textContent = `Player Score: ${playerScore}`; 

    if (playerScore === 5) {
        score.textContent = "You win the game!";
        result.appendChild(score);
        btn.forEach(b => b.removeEventListener('click', playerPlay));
        result.appendChild(res);
    }
}

function cpuWinRound(cpu, player) {
    cpuScore += 1;
    
    result.textContent = `You lose! ${cpu} beats ${player}`;
    cpuCount.textContent = `Cpu Score: ${cpuScore}`;
  
    if (cpuScore === 5) {
        score.textContent = "Cpu win the game!";
        result.appendChild(score);
        btn.forEach(b => b.removeEventListener('click', playerPlay));
        result.appendChild(reset);
    }
}






// single round of the game
// two parameters from player and computer that will be defined later
// it should return a string that declares who won the round and how

//  function playRound (playerSelection, computerSelection) {
//  
//      computerWinRound = `You lose! ${computerSelection} beats ${playerSelection}`;
//  
//      playerWinRound = `You win! ${playerSelection} beats ${computerSelection}`;
//  
//      drawRound = `Draw! You both choose ${playerSelection}`;
//  
//      if (playerSelection === computerSelection) {
//          console.log(drawRound);
//          return drawRound;
//      } else if (playerSelection === "Rock" & computerSelection === "Scissors" || playerSelection === "Scissors" & computerSelection === "Paper" || playerSelection === "Paper" & computerSelection === "Rock") {
//          return playerWinRound;
//      } else return computerWinRound;    
//  }

// function that plays 5 round of the game
// loop or call 5 times prev function
// use console to display the result
// get input from the player
// helper functions?


//function game() {
//    let playerScore = 0;
//    let computerScore = 0;
//    let drawScore = 0;
//
//    for (let i = 1; i < 6; i++) {
//        switch(playRound(prompt("Rock, Paper or Scissors?"), computerPlay())) {
//            case drawRound:
//                drawScore++;
//                break;
//            case playerWinRound:
//                playerScore++;
//                break;
//            case computerWinRound:
//                computerScore++;
//                break; 
//        }
//    }
//    console.log(playerScore);
//    console.log(computerScore);
//    console.log(drawScore);
//}