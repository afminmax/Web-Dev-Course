// scoped variables - works
function getGold() {
  console.log('first level in function');
  let retrievedGold = parseAPI();
  console.log('retrievedGold = ', retrievedGold);
  function parseAPI() {
    let parsedGold = 1000;
    return parsedGold;
  }
  return retrievedGold;
}

let actualGold = getGold();
console.log('actual gold = ', actualGold);

// ----------------------------------------------------------------------------------//
// 1 - Named function with two parameters
function sum(a, b) {
  return a + b;
}

//1. remove function name, both "function" prefix and the actual name
//2. assign the function to a variable
//3. remove return and the braces, whatever comes after is assumed to be returned

let sum2 = (a, b) => a + b;
// -----------------------------------------------------------------------------------//

// 2 - Named function with one parameter
function isPositive(number) {
  return number >= 0;
}

let isPositive2 = number => number >= 0;
//if one variable, then the parentheses around the variable name can be removed.
let isPositive2 = number => number >= 0;

// -----------------------------------------------------------------------------------//

// 3 - Named function with no parameter
function randomNumber() {
  return Math.random;
}

let randomNumber2 = () => Math.random;

// -----------------------------------------------------------------------------------//

// 4 - Anonymous function
document.addEventListener('click', function() {
  console.log('click!');
});

document.addEventListener('click', () => console.log('click!'));

// -----------------------------------------------------------------------------------//

// scoped variables - works
function getGold() {
  console.log('first level in function');
  let retrievedGold = parseAPI();
  console.log('retrievedGold = ', retrievedGold);

  function parseAPI() {
    let parsedGold = 1000;
    return parsedGold;
  }
  return retrievedGold;
}

let actualGold = getGold();
console.log('actual gold = ', actualGold);

let getGold2 = () => console.log('first level in function');
