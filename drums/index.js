// select the elements that have the drum class:
var buttonCollection = document.querySelectorAll('.drum');
// convert the returned html-collection into an array:
var buttonCollectionArray = Array.from(buttonCollection);
// add an event-listener to each element withthe forEach method:
buttonCollectionArray.forEach(function(item) {
  item.addEventListener('click', function() {
    var buttonInnerHTML = this.innerHTML; //note: 'this' used to capture the specific key press
    switch (buttonInnerHTML) {
      case 'w':
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
      case 'a':
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
      case 's':
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
      case 'd':
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
      case 'j':
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
      case 'k':
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
      case 'l':
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
      default:
        console.log(buttonInnerHTML);
    }
  });
});

// function play() {
//   audio.play();
// }

// function play() {
//     console.log((this.style.color = 'white'));
//   }
