"use strict";
let playerScore = 0;
let computerScore = 0;
const displayPlayerScore = document.getElementById(`playerScore`);
const displayComputerScore = document.getElementById(`computerScore`);
const displayWinner = document.getElementById(`winner`);

displayPlayerScore.textContent = playerScore;
displayComputerScore.textContent = computerScore;

// Functions for adding scores
let playerScoreFunction = function (score) {
  playerScore += score;
  displayPlayerScore.textContent = playerScore;
};
let computerScoreFunction = function (score) {
  computerScore += score;
  displayComputerScore.textContent = computerScore;
};
// Check winner score
let checkWinner = function () {
  if (playerScore === 5) {
    displayWinner.textContent = `Player wins!`;
  } else if (computerScore === 5) {
    displayWinner.textContent = `Computer wins!`;
  }
};

// Random computer selection
let computerPlay = function () {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return `Rock`;
  }
  if (randomNumber === 1) {
    return `Paper`;
  }
  if (randomNumber === 2) {
    return `Scissors`;
  }
};

// Game
let game = function (player, computer) {
  if (player === computer) {
    playerScoreFunction(1);
    computerScoreFunction(1);
  }
  if (player === `Rock`) {
    if (computer === `Scissors`) {
      playerScoreFunction(1);
    } else {
      computerScoreFunction(1);
    }
  }
  if (player === `Scissors`) {
    if (computer === `Paper`) {
      playerScoreFunction(1);
    } else {
      computerScoreFunction(1);
    }
  }
  if (player === `Paper`) {
    if (computer === `Rock`) {
      playerScoreFunction(1);
    } else {
      computerScoreFunction(1);
    }
  }

  checkWinner();
  return;
};

let playRound = function (playerSelection) {
  game(playerSelection, computerPlay());
};

const playRoundRock = function () {
  return playRound(`Rock`);
};
const playRoundPaper = function () {
  return playRound(`Paper`);
};
const playRoundScissors = function () {
  return playRound(`Scissors`);
};

document.getElementById(`btn-rock`).addEventListener(`click`, playRoundRock);
document.getElementById(`btn-paper`).addEventListener(`click`, playRoundPaper);
document
  .getElementById(`btn-scissors`)
  .addEventListener(`click`, playRoundScissors);
