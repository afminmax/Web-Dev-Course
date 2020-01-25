// document.querySelector('button').addEventListener('click', handleClick);

// function handleClick() {
//   alert('clique!');
// }

// document.querySelector('button').addEventListener('click', function() {
//   //this is an anonymous function
//   alert('clique!');
// });

// document.querySelectorAll('button').addEventListener('click', function() {
//   alert('serenity adams!');
// });
var audio = new Audio('sounds/tom-3.mp3');
var buttonCollection = document.querySelectorAll('.drum');
var buttonCollectionArray = Array.from(buttonCollection);
buttonCollectionArray.forEach(function(item) {
  item.addEventListener('click', play);
});

function play() {
  console.log((this.style.color = 'white'));
}

// function play() {
//   audio.play();
// }
