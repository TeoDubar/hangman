var word = document.querySelector('.word');
var img = document.getElementById('hangmanImg');
var mistakes = 0;
var wordToGuess = 'house';
var wrongLetters = [];
var previousGuesses = [];
var btn = document.querySelector('button');

function storePrevGuess(letter) {
  previousGuesses.push(letter);
};

function isDuplicateGuess(letter) {
  for (i = 0; i < previousGuesses.length; i++) {
    if (previousGuesses[i] === letter) {
      alert('You have already entered this letter!');
      return true;
    }
  }
  return false;
}

function isLetter(character) {
  var result = character.length === 1 && character.match(/[a-z]/i)
  return result;
}

function updateImg(index) {
  img.src = 'mistake' + index + '.png';
};

function initGame() {
  var wordLength = wordToGuess.length;

  for (i = 0; i < wordLength; i++) {
    word.textContent += '_ ';
  }
};

function playGame() {
  while (word.textContent !== wordToGuess || mistakes <= 6) {

    var letter = prompt('Enter a letter: ');

    if (isLetter(letter) && !isDuplicateGuess(letter)) {

      storePrevGuess(letter);
      var guessedLetter = false;

      for (i = 0; i < wordToGuess.length; i++) {
        if (letter === wordToGuess[i]) {
          guessedLetter = true;
          word.textContent[i * 2] = letter;
        }
      }
      if (!guessedLetter) {
        wrongLetters.push(letter);
        mistakes++;
        updateImg(mistakes);
        alert('Bad guess! Try again!');
      }
      else{
        alert('Your guess was correct!');
      }
    }
    else {
      alert('Your input is either duplicate or invalid!');
    }
  }
}

initGame();
btn.onclick = playGame();

if(mistakes === 6){
  alert('Game over, you failed!')
}
else{
  alert('You win nothing! Good day, sir!');
  alert('I SAID GOOD DAY.')
}  