"use strict";
let playerScore = 0;
let computerScore = 0;

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
    playerScore++;
    computerScore++;
    return console.log(`Draw! Both picked ${player}.`);
  }
  if (player === `Rock`) {
    if (computer === `Scissors`) {
      playerScore++;
      return console.log(`Player wins. Rock beats Scissors!`);
    } else {
      computerScore++;
      return console.log(`Computer wins! Paper beats Rock!`);
    }
  }
  if (player === `Scissors`) {
    if (computer === `Paper`) {
      computerScore++;
      return console.log(`Player wins! Scissors beat Paper!`);
    } else {
      playerScore++;
      return console.log(`Computer wins! Rock beats Scissors!`);
    }
  }
  if (player === `Paper`) {
    if (computer === `Rock`) {
      playerScore++;
      return console.log(`Player wins! Paper beats Rock!`);
    } else {
      computerScore++;
      return console.log(`Computer wins! Scissors beat Paper!`);
    }
  }
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
