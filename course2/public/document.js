// this file holds functions used for manipulating document objects (input, button, etc)

// function to update a word
let updateWord = function(word) {
  let wordLetters = '';
  word.split('').forEach((letter) => {
    wordLetters += `<span class="badge badge-secondary">${letter}</span>\n`;
  });
  $('#word').html(wordLetters);
};

// function to update score function
let updateScore = function(newScore) {
  $('#staticScore').val(newScore);
};
// function to update score function
let updateFailTriesCount = function(fails) {
  $('#staticTries').val(fails);
};
// function to show a popover
let showPopover = function($element, message) {
  $element.popover('dispose');
  $element.popover({
    trigger: 'manual',
    placement: 'top',
    content: message
  }).popover('show');
  let hidePopover = function(myLog) {
    $element.popover('hide');
    myLog('Popover hidden');
  };
  setTimeout(function() {
    hidePopover(function(log) {
      console.log(log);
    });
  }, 5 * 1000 /*5 sec*/);
};

let guessLetter = function(game) {
  let guessedLetter = $('#inputLetter').val();
  // check the input of the letter
  if (game.isValidLetter(guessedLetter)) {
    // guess letter
    let letterIsGuessed = game.guessLetter(guessedLetter);
    if (letterIsGuessed) {
      // update the view with the new word state
      updateWord(game.getCurrentStateWord());
      // update the score
      updateScore(game.getScore());
      showPopover($('#word'), 'Word updated!');
      $('#inputLetter').val('').focus();
    } else {
      // update the trial count
      updateFailTriesCount(game.getLeftFailTries())
      showPopover($('#inputLetter'), 'The letter was incorrect!');
      $('#inputLetter').focus().select();
    }
    let wordIsGuessed = false; // TODO check if the word is guessed
    let gameIsOver = false; // TODO check if the game is over
    if (wordIsGuessed) {
      // TODO show success message and propose retry
    } else if (gameIsOver) {
      // TODO show game over
    }
  } else {
    showPopover($('#inputLetter'), 'The input is not a valid letter');
    $('#inputLetter').focus().select();
  }
};

function startGame(game) {
  // guess button click handler
  $('#guess').click(function() {
    guessLetter(game);
  });
  // keyup event on the input (detect enter)
  $('#inputLetter').keyup(function(e) {
    if (13 === e.keyCode) {
      // enter detected
      guessLetter(game);
    }
  });
}
