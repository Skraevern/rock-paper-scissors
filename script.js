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
  playerImage.classList.add("shake");
  displayPlayerScore.classList.add("shake");
};
let computerScoreFunction = function (score) {
  computerScore += score;
  displayComputerScore.textContent = computerScore;
  computerImage.classList.add("shake");
  displayComputerScore.classList.add("shake");
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

// change image every 1 second after player picks function
let delay = function (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
};

// call delay function
let rpsDelay = function () {
  resultsImage.src = "./images/question.png";
  playerImage.src = "./images/img_rock.png";
  computerImage.src = "./images/img_rock.png";
  delay(700).then(() => (playerImage.src = "./images/img_paper.png"));
  delay(700).then(() => (computerImage.src = "./images/img_paper.png"));
  delay(1400).then(() => (playerImage.src = "./images/img_scissors.png"));
  delay(1400).then(() => (computerImage.src = "./images/img_scissors.png"));
};
// Game
let game = function (player, computer) {
  console.log(player, computer);
  if (player === computer) {
    resultsImage.src = "./images/draw.png";
    playerImage.classList.add("shake");
    computerImage.classList.add("shake");
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
  delay(500).then(() => playerImage.classList.remove("shake"));
  delay(500).then(() => computerImage.classList.remove("shake"));
  delay(500).then(() => displayPlayerScore.classList.remove("shake"));
  delay(500).then(() => displayComputerScore.classList.remove("shake"));
};

const playRoundRock = function () {
  rpsDelay();
  delay(2100).then(() => (playerImage.src = "./images/img_rock.png"));
  delay(2100).then(() => playRound(`Rock`));
};
const playRoundPaper = function () {
  rpsDelay();
  delay(2100).then(() => (playerImage.src = "./images/img_paper.png"));
  delay(2100).then(() => playRound(`Paper`));
};
const playRoundScissors = function () {
  rpsDelay();
  delay(2100).then(() => (playerImage.src = "./images/img_scissors.png"));
  delay(2100).then(() => playRound(`Scissors`));
};

btnRock.addEventListener(`click`, playRoundRock);
btnPaper.addEventListener(`click`, playRoundPaper);
btnScissors.addEventListener(`click`, playRoundScissors);
btnNewGame.addEventListener(`click`, newGame);
