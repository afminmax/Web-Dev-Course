gamePattern = [];
userClickedPattern = [];
buttonColors = ['red', 'blue', 'green', 'yellow'];
var randomChosenColor = '';
var level = 0;

// function to play audio of the button
function playAudio(color) {
  switch (color) {
    case 'red':
      var red = new Audio('sounds/red.mp3');
      red.play();
    case 'blue':
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
    case 'green':
      var green = new Audio('sounds/green.mp3');
      green.play();
    case 'yellow':
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;
    default:
    // console.log(letter);
  }
}

// function to get a random color (runs only once)
function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  level = level + 1;
  console.log(
    'next random color: ' + randomChosenColor + ' and level: ' + level
  );
  return randomChosenColor;
}

// function to flash a button
function flashButton(color) {
  $('#' + color)
    .fadeOut(100)
    .fadeIn(100);
}

// function to animate on
function animatePress(color) {
  $('#' + color).addClass('pressed');
  flashButton(color);
  setTimeout(function() {
    $('#' + color).removeClass('pressed');
  }, 100);
}

// function to check answer
function checkAnswer() {
  if (JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)) {
    console.log('correct!, next round!');
  } else {
    console.log('game over');
    //reset level
    //reset both arrays
    //set header back to original
  }
}

// key event handler - starts the game
$('body').keypress(function(e) {
  color = nextSequence();
  console.log('step1: ' + color);
  animatePress(color);
  playAudio(color);
  $('h1').text('Level 0');
  console.log('game pattern: ' + gamePattern);
});

// button click via mouse handler - continues the game
$('.container .row')
  .find('.btn')
  .click(function(e) {
    var userChosenColor = $(this).attr('id');
    console.log('user clicked: ' + userChosenColor);
    playAudio(userChosenColor);
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
    console.log('user pattern: ' + userClickedPattern);
    $('h1').text('Level ' + level);
    checkAnswer();
    nextSequence();
  });

// color = nextSequence();
// invokeAV(color);
// console.log(color);

// $('#green').css('background-color', 'purple');
