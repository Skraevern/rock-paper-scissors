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
let playerImage = document.getElementById(`player-image`);
let computerImage = document.getElementById(`computer-image`);
let resultsImage = document.getElementById(`results-image`);

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
  playerImage.src = "./images/question.png";
  computerImage.src = "./images/question.png";
  resultsImage.src = "./images/question.png";
};

// Random computer selection
let computerPlay = function () {
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    computerImage.src = "./images/img_rock.png";
    return `Rock`;
  }
  if (randomNumber === 1) {
    computerImage.src = "./images/img_paper.png";
    return `Paper`;
  }
  if (randomNumber === 2) {
    computerImage.src = "./images/img_scissors.png";
    return `Scissors`;
  }
};

// Game
let game = function (player, computer) {
  console.log(player, computer);
  if (player === computer) {
    resultsImage.src = "./images/draw.png";
    return;
  }
  if (player === `Rock`) {
    if (computer === `Scissors`) {
      playerScoreFunction(1);
      resultsImage.src = "./images/player_wins.png";
    } else {
      computerScoreFunction(1);
      resultsImage.src = "./images/computer_wins.png";
    }
  }
  if (player === `Scissors`) {
    if (computer === `Paper`) {
      playerScoreFunction(1);
      resultsImage.src = "./images/player_wins.png";
    } else {
      computerScoreFunction(1);
      resultsImage.src = "./images/computer_wins.png";
    }
  }
  if (player === `Paper`) {
    if (computer === `Rock`) {
      playerScoreFunction(1);
      resultsImage.src = "./images/player_wins.png";
    } else {
      computerScoreFunction(1);
      resultsImage.src = "./images/computer_wins.png";
    }
  }

  checkWinner();
  return;
};

let playRound = function (playerSelection) {
  game(playerSelection, computerPlay());
};

const playRoundRock = function () {
  playerImage.src = "./images/img_rock.png";
  return playRound(`Rock`);
};
const playRoundPaper = function () {
  playerImage.src = "./images/img_paper.png";
  return playRound(`Paper`);
};
const playRoundScissors = function () {
  playerImage.src = "./images/img_scissors.png";
  return playRound(`Scissors`);
};

btnRock.addEventListener(`click`, playRoundRock);
btnPaper.addEventListener(`click`, playRoundPaper);
btnScissors.addEventListener(`click`, playRoundScissors);
btnNewGame.addEventListener(`click`, newGame);
