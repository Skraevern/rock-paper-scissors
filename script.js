"use strict";
let playerScore = 0;
let computerScore = 0;
const displayPlayerScore = document.getElementById(`playerScore`);
const displayComputerScore = document.getElementById(`computerScore`);
const displayWinner = document.getElementById(`winner`);
const btnRock = document.getElementById(`btn-rock`);
const btnPaper = document.getElementById(`btn-paper`);
const btnScissors = document.getElementById(`btn-scissors`);
const btnNewGame = document.getElementById(`btn-new-game`);

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
  if (playerScore >= 5) {
    displayWinner.textContent = `Player wins!`;
    disableButtons();
  }
  if (computerScore >= 5) {
    displayWinner.textContent = `Computer wins!`;
    disableButtons();
  }
};

// Function for disable buttons
const disableButtons = function () {
  btnRock.disabled = true;
  btnPaper.disabled = true;
  btnScissors.disabled = true;
};

// Function for resetting game/new game
const newGame = function () {
  playerScore = 0;
  computerScore = 0;
  displayPlayerScore.textContent = playerScore;
  displayComputerScore.textContent = computerScore;
  btnRock.disabled = false;
  btnPaper.disabled = false;
  btnScissors.disabled = false;
  displayWinner.textContent = "";
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
  console.log(player, computer);
  if (player === computer) {
    return;
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

btnRock.addEventListener(`click`, playRoundRock);
btnPaper.addEventListener(`click`, playRoundPaper);
btnScissors.addEventListener(`click`, playRoundScissors);
btnNewGame.addEventListener(`click`, newGame);
