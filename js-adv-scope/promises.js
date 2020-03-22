let url = 'http://api.guildwars2.com/v2/commerce/prices?ids=19683,19684';
// console.log('hello');

// // STEP 1: BRUTE FORCE -----------------------------------------------------------------------
// this function displays the data from a fetch. functions when successful

// function gotData(data) {
//   console.log(data);
// }

// // this function displays errors from a fetch. functions when there is an error
// function gotErr(err) {
//   console.log(err);
// }

// let promise = fetch(url); // fetch data from the url above
// promise.then(gotData); // when promise "fulfilled", call the gotData function
// promise.catch(gotErr);

// STEP 2: CHAINING THE THEN AND CATCH  ---------------------------------------------------------
// function gotData(data) {
//   console.log(data);
// }

// // // this function displays errors from a fetch. functions when there is an error
// function gotErr(err) {
//   console.log(err);
// }

// fetch(url)
//   .then(gotData)
//   .catch(gotErr);

// STEP 3: USING ANON FUNCTIONS ---------------------------------------------------------
// one can sequence the then and catch with their associated functions:
// fetch(url)
//   .then(function gotData(data) {
//     console.log(data);
//   })
//   .catch(function gotErr(err) {
//     console.log(err);
//   });

// STEP 4: USING ANON FUNCTIONS ---------------------------------------------------------
// convert to simpler syntax with arrow functions
// fetch(url)
//   .then(data => console.log(data)) //fulfilled
//   .catch(err => console.log(err)); //error is console logged

// STEP 5: GET THE ACTUAL JSON DATA ---------------------------------------------------------
// but... we need the data not in raw form but in readable json:
// no call back hell!
// fetch(url)
//   .then(response => response.json()) // first get the fulfilled response and convert it to json via the json method
//   .then(json => console.log(json)) // show the json
//   .catch(err => console.log(err)); //error is console logged

// STEP 6: GET SPECIFIC JSON DATA ---------------------------------------------------------
// now lets get an actual value out of the json nest:
fetch(url)
  .then(anetResponse => anetResponse.json()) // first get the fulfilled response and convert it to json via the json method
  .then(data => {
    console.log(data);
    gold = data[0].buys.unit_price;
    console.log('gold: ', gold);
  })
  .catch(err => console.log(err)); //error is console logged

// // APPENDIX 1: VERBOSE FETCH
// fetch(url)
//   .then(anetResponse => {
//     return anetResponse.json();
//   })
//   .then(data => {
//     console.log(data);
//     let gold = data[0].buys.unit_price;
//     console.log('gold value: ', gold);
//   });
