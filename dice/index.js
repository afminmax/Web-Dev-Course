imageArray = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png',];
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

console.log(randomNumber1);
console.log(imageArray[randomNumber1 - 1]);

var newImage = imageArray[randomNumber1 - 1];

document.querySelector('.dice .img1').setAttribute('src',newImage);
