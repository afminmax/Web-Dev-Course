const mongoose = require('mongoose');

// ------------------- FRUITS EXAMPLE START -------------------------- //
mongoose.connect('mongodb://localhost:27017/fruityDB', {
  useNewUrlParser: true
});

// Step 1: Create schema for each document
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

// Step 2: Create a mongoose model, with a collection called fruits (first paramater) using the fruit schema in step 1.
const Fruit = mongoose.model('Fruit', fruitSchema); //Note: name the collection in singular!

// Step 3: Creating a new fruit:
const Jackfruit = new Fruit({
  name: 'Jackfruit',
  rating: 8,
  review: 'You are so juicy'
});

// Step 4: Saving the fruit to the mongo db:
Jackfruit.save();

// // ------------------- FRUITS EXAMPLE END -------------------------- //

// ------------------- PEOPLE EXAMPLE START -------------------------- //
mongoose.connect('mongodb://localhost:27017/gdprDB', {
  useNewUrlParser: true
});

// // Step 1: Create schema for each document
// const peopleSchema = new mongoose.Schema({
//   fname: String,
//   lname: String,
//   email: String,
//   age: Number,
//   occupation: String
// });

// Step 1a (ALT): Create schema for each document with validation and a subdocument (relationship)
const peopleSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: String,
  email: String,
  age: {
    type: Number,
    min: 1,
    max: 2000
  },
  occupation: String,
  faveFruit: fruitSchema
});

// Step 2: Create a mongoose model, with a collection called peeople (first paramater) using the people schema in step 1.
const Person = mongoose.model('Person', peopleSchema); //Note: name the collection in singular!

// Step 3: Creating a new person:
const person = new Person({
  fname: 'Jaina',
  lname: 'Solo',
  email: 'jaina@nannybots.cor',
  age: 1,
  occupation: 'Jedi Baby',
  faveFruit: Jackfruit
});

// Step 4: Saving the person to the mongo db:
person.save();

// Step 5: Updating the person in the mongo db:
// Person.updateOne(
//   { _id: '5e66a48d36a5672c088a1fff' },
//   { fname: 'Rheebel' },
//   function(err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('record updated');
//     }
//   }
// );

// Step 6: Deleting a person from the mongo db:
// Person.deleteOne({ _id: '5e66a389de9b1a240c0eb569' }, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('record deleted');
//   }
// });

// Step 7: Establishing a Relationship

// ------------------- PEOPLE EXAMPLE END -------------------------- //

// ------------------- ADDING MANY BEGIN -------------------------- //
// const Luke = new Person({
//   fname: 'Luke',
//   lname: 'Earthwalker',
//   email: 'luke@lasthope.com',
//   age: 23,
//   occupation: 'Jedi Knight'
// });

// const Leia = new Person({
//   fname: 'Leia',
//   lname: 'Earthwalker',
//   email: 'leia@lasthope.com',
//   age: 23,
//   occupation: 'Jedi Apprentice'
// });

// const ObiWan = new Person({
//   fname: 'ObiWan',
//   lname: 'Benobi',
//   email: 'geezer@jeditemple.com',
//   age: 75,
//   occupation: 'Jedi Master'
// });

// Person.insertMany([Luke, Leia, ObiWan], function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('all fruits saved!');
//   }
// });

// ------------------- ADDING MANY END -------------------------- //

// ------------------- FINDING DATA  -------------------------- //

// peopleArray = []; //could use this too

// Person.find(function(err, people) {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     peopleArray = people;
//     console.log(people);
//     console.log(peopleArray); //could use this too
//     people.forEach(function(person) {
//       console.log(person.fname + ' ' + person.lname);
//     });
//   }
// });
