let url = 'https://api.guildwars2.com/v2/commerce/listings?ids=19683,19688';
console.log('hello');

let promise = fetch(url); // fetch data from the url above
promise.then(gotData); // when promise "fulfilled", call the gotData function
promise.catch(gotErr);

// this function displays the data. function when successful
function gotData(data) {
  console.log(data);
}

// this function displays errors. function when there is an error
function gotErr(err) {
  console.log(err);
}
