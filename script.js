"use strict";

// Random cumputer selection
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
    return `Draw! Both picked ${player}.`;
  }
  if (player === `Rock`) {
    if (computer === `Scissors`) {
      return `Player wins. Rock beats Scissors!`;
    } else {
      return `Computer wins! Paper beats Scissors!`;
    }
  }
  if (player === `Scissors`) {
    if (computer === `Rock`) {
      return `Computer wins! Rock beats Scissors!`;
    } else {
      return `Player wins! Scissors beat Paper!`;
    }
  }
  if (player === `Paper`) {
    if (computer === `Rock`) {
      return `Player wins! Paper beats Rock!`;
    } else {
      return `Computer wins! Scissors beat Paper!`;
    }
  }
};
/*
let playerPrompt = prompt();
let playerSelection = capitalize(playerPrompt);
let computerSelection = computerPlay();

console.log(
  `Player picked ${playerSelection}. 
Computer picked ${computerSelection}`
);
console.log(singleGame(playerSelection, computerSelection));
*/
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
};

fiveGames();
