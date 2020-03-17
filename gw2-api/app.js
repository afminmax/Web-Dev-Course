// load module for api requests:
const https = require('https');

// load module for file reading:
const fs = require('fs');

const keyPath =
  'X:/Coding/Udemy Webdev Bootcamp/Section 5 - Personal/gw2-api/keys/';

const apiEndpointRoot =
  'https://api.guildwars2.com/v2/account/wallet/?access_token=';

fs.readFile(keyPath + 'key-na.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('NA key: ' + data);
  let naKey = data;
  let naApiCall = apiEndpointRoot + data;
  console.log(naApiCall);
});

fs.readFile(keyPath + 'key-eu.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('EU key: ' + data);
  let euKey = data;
  let euApiCall = apiEndpointRoot + data;
  console.log(euApiCall);
});
