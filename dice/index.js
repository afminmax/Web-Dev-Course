imageArray = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png',];

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

// console.log(randomNumber1);
// console.log(imageArray[randomNumber1 - 1]);
// console.log(randomNumber2);
// console.log(imageArray[randomNumber2 - 1]);

var newImage1 = imageArray[randomNumber1 - 1];
var newImage2 = imageArray[randomNumber2 - 1];

document.querySelector('.dice .img1').setAttribute('src',newImage1);
document.querySelector('.dice .img2').setAttribute('src',newImage2);

if(newImage1 > newImage2){
    // document.getElementById('player1-text').innerText = 'Player 1 Wins!';
    document.querySelector('h1').innerText = 'Player 1 Wins!';
}
else if(newImage1 < newImage2){
    // document.getElementById('player1-text').innerText = 'Player 1 Wins!';
    document.querySelector('h1').innerText = 'Player 2 Wins!';
}
else {
    document.querySelector('h1').innerText = "It's a draw :(";
}
