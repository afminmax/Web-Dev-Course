gamePattern = [];
buttonColors = ['red', 'blue', 'green', 'yellow'];

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push[randomChosenColor];
  return randomChosenColor;
}

$('.testbtn').css('background-color', 'pink');
$('#red').css('background-color', 'pink');
// $('');
