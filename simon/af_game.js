gamePattern = [];
userClickedPattern = [];
buttonColors = ['red', 'blue', 'green', 'yellow'];
var randomChosenColor = '';
var level = 0;

// key event handler - starts the game
$('body').keypress(function(e) {
  color = nextSequence();
  console.log('step1: ' + color);
  $('h1').text('Level 0');
});
// $('body').keypress(function(e) {
//   $('body').off('keypress');
// });

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
    case 'wrong':
      var wrong = new Audio('sounds/wrong.mp3');
      wrong.play();
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
  playAudio(randomChosenColor);
  animatePress(randomChosenColor);
  flashButton(randomChosenColor);
  console.log(
    'next random color: ' + randomChosenColor + ' and level: ' + level
  );
  level = level + 1;
  return randomChosenColor;
}

// function to flash a button
function flashButton(color) {
  $('#' + color)
    .fadeIn(100)
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

// function to restart
function startOver() {
  userClickedPattern = [];
  gamePattern = [];
  level = 0;
  // $('h1').text('Press a Key to Start');
  // $('body').keypress(function() {

  // color = '';
  // nextSequence();
  // // console.log('step1: ' + color);
  // $('h1').text('Level 0');
}

// function to check answer
function checkAnswer() {
  if (userClickedPattern.length === gamePattern.length) {
    console.log('arrays are equal... checking now...');
    console.log('game pattern length: ' + gamePattern.length);
    console.log('user pattern length: ' + userClickedPattern.length);
    if (JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)) {
      console.log('correct!, next round!');
      userClickedPattern = [];
      $('h1').text('Level ' + level);
      setTimeout(function() {
        nextSequence();
      }, 1000);
    } else {
      console.log('game over');
      $('h1').text('Game Over!');
      color = 'wrong';
      playAudio(color);
      $('body').addClass('game-over');
      setTimeout(function() {
        $('body').removeClass('game-over');
      }, 200);
      $('h1').text('Press Any Key to Restart');
      // $('body').keypress(function() {
      //   $('h1').text('Press a Key to Restart');
      //   startOver();
      // });
    }
  }
}

// button click via mouse handler - continues the game
$('.container .row')
  .find('.btn')
  .click(function(e) {
    var userChosenColor = $(this).attr('id');
    console.log('user clicked: ' + userChosenColor);
    // playAudio(userChosenColor);
    animatePress(userChosenColor);
    userClickedPattern.push(userChosenColor);
    checkAnswer();
  });
