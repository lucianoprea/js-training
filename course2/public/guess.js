// guess the word module
let guessTheWord = function() {
  // "config" options
  const MAX_FAILS = 6;
  const BONUS_PER_LETTER = 5; // bitcoins
  // declare an object for "word list"
  const WORD_LIST = ['JavaScript', 'Office', 'Ness'];
  let nrFails, score;
  // keep a reference for the currently selected word
  let selectedWord;
  // declare an object for the current state of the word
  let currentState;
  // declare a function that generates a random integer between two numbers
  let getRandomWordPosition = function() {
    return Math.floor(Math.random() * Math.floor(WORD_LIST.length));
  }

  // initialize the guessing game
  let init = function() {
    // reset game state
    currentState = '';
    nrFails = 0;
    score = 0;
    // randomly pick a word from the word list
    selectedWord = WORD_LIST[getRandomWordPosition()];
    // return the current state of the word
    currentState = new Array(selectedWord.length);
    currentState = currentState.fill('_').join('');
    return currentState;
  };

  // will receive a letter as argument and will return true or false
  let guessLetter = function(letter) {
    // implement this function
    let letterMatch = new RegExp(letter, 'ig');
    let matches = selectedWord.match(letterMatch);
    if (null === matches) {
      nrFails++;
      return false;
    } else {
      // get first match
      var match = letterMatch.exec(selectedWord);
      while (match) {
        currentState = currentState.slice(0, match.index)
          + letter.toUpperCase()
          + currentState.slice(match.index + 1);
        score += BONUS_PER_LETTER;
        // get next match
        match = letterMatch.exec(selectedWord);
      }
      return true;
    }
  };

  let isValidLetter = function(letter) {
    // implement this function
    return /^[a-zA-Z]$/.test(letter);
  };

  let getLeftFailTries = () => {
    return MAX_FAILS - nrFails;
  };

  // return an object with the functions we want exposed
  return {
    init,
    guessLetter,
    isValidLetter,
    getCurrentStateWord: function() {
      return currentState;
    },
    // es2015
    getScore() {
      return score;
    },
    getLeftFailTries
  };
};

// when the page is initialized, init the game and
$(document).ready(function() {

  // declare the game variable
  let game = guessTheWord();

  // initialize the game
  let initialWordState = game.init();

  // update the view with the initial word state
  updateWord(initialWordState);

  // update the fail tries count
  updateFailTriesCount(game.getLeftFailTries())

  startGame(game);
});
