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
