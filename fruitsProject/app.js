const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name (if not present, it will be created)
const dbName = 'fruitsDB';

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Use connect method to connect to the Mongo Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log('Connected successfully to the server');

  const db = client.db(dbName);

  // ------- insert documents with this block -----------
  //   insertDocuments(db, function() {
  //     client.close();
  // }); // only closes connection on document insert

  // ------- find documents with this block -----------
  findDocuments(db, function() {
    client.close();
  });
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Insert some documents
  collection.insertMany(
    [
      { name: 'mango', score: 10, review: 'zee loves it' },
      { name: 'banana', score: 8, review: 'kiki loves it' },
      { name: 'apple', score: 9, review: 'we all love it' }
    ],
    function(err, result) {
      assert.equal(err, null); // validate to be sure the are no insert errors
      assert.equal(3, result.result.n); // validate to ensure there are three results inserted (this and next line)
      assert.equal(3, result.ops.length);
      console.log('Inserted 3 documents into the collection');
      callback(result);
    }
  );
};

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log('Found the following records');
    console.log(fruits);
    callback(fruits);
  });
};
