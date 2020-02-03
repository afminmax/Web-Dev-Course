$('h1').text('jQuery');

// manipulate text:
$('button').text('click me!');

$('button').html('<em>click me!</em>');

// manipulate attributes:
console.log($('img').attr('src')); // gets the name of the image file being used

$('a').attr('href', 'https://www.yahoo.com'); //changes the link

console.log($('h1').attr('class')); // displays css classes belonging to the h1 tag

// event listeners - basic on click
$('h1').click(function() {
  $('h1').css('color', 'purple');
});

// vanilla javascript for multiple clicks
// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll('button')[i].addEventListener('click', function() {
//     document.querySelector('h1').style.color = 'green';
//   });
// }

// jquery basic for the same vanilla javascript! no for loops
$('button').click(function() {
  $('button').css('color', 'purple');
});

// jquery keypress event listenere
$('input').keypress(function(e) {
  $('h1').text(e.key);
});

// jquery more generic event listener, change color to red on mouse over (MDN DOM events is the reference)
$('h1').on('mouseover', function() {
  $('h1').css('color', 'red');
});
