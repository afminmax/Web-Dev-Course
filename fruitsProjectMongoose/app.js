const mongoose = require('mongoose');

// ------------------- FRUITS EXAMPLE START -------------------------- //
// mongoose.connect('mongodb://localhost:27017/fruityDB', {
//   useNewUrlParser: true
// });

// // Step 1: Create schema for each document
// const fruitSchema = new mongoose.Schema({
//   name: String,
//   rating: Number,
//   review: String
// });

// // Step 2: Create a mongoose model, with a collection called fruits (first paramater) using the fruit schema in step 1.
// const Fruit = mongoose.model('Fruit', fruitSchema); //Note: name the collection in singular!

// // Step 3: Creating a new fruit:
// const fruit = new Fruit({
//   name: 'Pear',
//   rating: 8,
//   review: 'Anya likes Apples'
// });

// // Step 4: Saving the fruit to the mongo db:
// fruit.save();

// ------------------- FRUITS EXAMPLE END -------------------------- //

// ------------------- PEOPLE EXAMPLE START -------------------------- //
mongoose.connect('mongodb://localhost:27017/gdprDB', {
  useNewUrlParser: true
});

// Step 1: Create schema for each document
const peopleSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  age: Number,
  occupation: String
});

// Step 2: Create a mongoose model, with a collection called peeople (first paramater) using the people schema in step 1.
const Person = mongoose.model('Person', peopleSchema); //Note: name the collection in singular!

// Step 3: Creating a new fruit:
const person = new Person({
  fname: 'Kyler',
  lname: 'Stevens',
  email: 'ks@SpeechGrammarList.com',
  age: 39,
  occupation: 'Photographer'
});

// Step 4: Saving the fruit to the mongo db:
person.save();

// ------------------- PEOPLE EXAMPLE END -------------------------- //
