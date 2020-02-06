gamePattern = [];
buttonColors = ['red', 'blue', 'green', 'yellow'];

// $('#red').css('background-color', 'pink');

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

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push[randomChosenColor];

  return randomChosenColor;
}

function invokeAV(color) {
  playAudio(color);
  $('#' + color)
    .fadeOut(100)
    .fadeIn(100);
}

color = nextSequence();
invokeAV(color);
console.log(color);

// $('#' + color)
//   .fadeOut(100)
//   .fadeIn(100);
