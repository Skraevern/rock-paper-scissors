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

// Ensures correct capitalization of prompt
let capitalize = function (inputString) {
  let firstLetter = inputString.substring(1, -9999);
  let firstLetterCapitalize = firstLetter.toUpperCase();
  let remainingString = inputString.slice(1);
  let lowerCaseRemaining = remainingString.toLowerCase();
  return `${firstLetterCapitalize}${lowerCaseRemaining}`;
};

// Game
let singleGame = function (player, computer) {
  if (player === computer) {
    playerScore++;
    computerScore++;
    return `Draw! Both picked ${player}.`;
  }
  if (player === `Rock`) {
    if (computer === `Scissors`) {
      playerScore++;
      return `Player wins. Rock beats Scissors!`;
    } else {
      computerScore++;
      return `Computer wins! Paper beats Scissors!`;
    }
  }
  if (player === `Scissors`) {
    if (computer === `Rock`) {
      computerScore++;
      return `Computer wins! Rock beats Scissors!`;
    } else {
      playerScore++;
      return `Player wins! Scissors beat Paper!`;
    }
  }
  if (player === `Paper`) {
    if (computer === `Rock`) {
      playerScore++;
      return `Player wins! Paper beats Rock!`;
    } else {
      computerScore++;
      return `Computer wins! Scissors beat Paper!`;
    }
  }
};

// Plays the game five times, displays each rounds winner and the total winner after 5 games.
let fiveGames = function () {
  for (let index = 0; index < 5; index++) {
    let playerPrompt = prompt();
    let playerSelection = capitalize(playerPrompt);
    let computerSelection = computerPlay();

    console.log(
      `Player picked ${playerSelection}. 
       Computer picked ${computerSelection}`
    );
    console.log(singleGame(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log(`Player wins! ${playerScore} - ${computerScore}`);
  } else {
    console.log(`Computer wins 5 games! ${computerScore} - ${playerScore}`);
  }
};

fiveGames();
