'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;

let guessClass = document.querySelector('.guess');

const displayMessage = function (messege) {
  document.querySelector('.message').textContent = messege;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const changeWidth = function (rem) {
  document.querySelector('.number').style.width = rem;
};

const displayHighscore = function (score) {
  document.querySelector('.highscore').textContent = score;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessClass.value);

  if (!guess) {
    displayMessage('Please enter the number');
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('You win!');
    changeBackgroundColor('#60b347');
    changeWidth('30rem');
    if (score > highScore) {
      highScore = score;
      displayHighscore(highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      displayScore(score);
    } else {
      displayScore(0);
      displayMessage('You Lose');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  guessClass.value = '';
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  changeBackgroundColor('#222');
  changeWidth('15rem');
});
