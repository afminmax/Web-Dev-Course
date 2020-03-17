// load modules
const https = require('https');
const fetch = require('node-fetch');
const express = require('express');

const app = express();
// load module for file reading:
const fs = require('fs');

const keyPath =
  'X:/Coding/Udemy Webdev Bootcamp/Section 5 - Personal/gw2-api/keys/';

const apiEndpointRoot =
  'https://api.guildwars2.com/v2/account/wallet/?access_token=';

let naGold = 0;
let euGold = 0;
let goldSum = 0;

app.post('/', function(req, res) {
  fs.readFile(keyPath + 'key-na.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    //   console.log('NA key: ' + data);
    let naKey = data;
    let url = apiEndpointRoot + data;
    //   console.log(naApiUrl);

    //   console.log('starting api call.... ');

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        //   console.log(data);
        let gold = data[0].value;
        //   console.log(gold);
        naGold = gold;
        goldSum = goldSum + naGold;
        console.log('NA Gold: ' + naGold);
        console.log('Final Gold Sum: ' + goldSum);
        res.write('<h3>NA Gold: ' + naGold + '</h3>');
        res.write('<h3>Final Gold: ' + goldSum + '</h3>');
        res.send();
      });
  });

  fs.readFile(keyPath + 'key-eu.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    //   console.log('EU key: ' + data);
    let euKey = data;
    let url = apiEndpointRoot + data;
    //   console.log(euApiUrl);

    //   console.log('starting api call.... ');

    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        //   console.log(data);
        let gold = data[0].value;
        //   console.log(gold);
        euGold = gold;
        goldSum = goldSum + euGold;
        console.log('EU Gold: ' + euGold);
        res.write('<h3>EU Gold: ' + euGold + '</h3>');
        //   console.log('Gold Sum: ' + goldSum);
      });
  });
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function() {
  console.log('Server is running on port 3000 ... ');
});
