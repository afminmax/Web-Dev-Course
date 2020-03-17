// load module for api requests:
const https = require('https');

// load module for file reading:
const fs = require('fs');

const keyPath =
  'X:/Coding/Udemy Webdev Bootcamp/Section 5 - Personal/gw2-api/keys/';

const apiEndpointRoot =
  'https://api.guildwars2.com/v2/account/wallet/?access_token=';

var naApiUrl = '';

fs.readFile(keyPath + 'key-na.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  //   console.log('NA key: ' + data);
  let naKey = data;
  let url = apiEndpointRoot + data;
  //   console.log(naApiUrl);

  console.log('starting api call.... ');

  https.get(url, function(apiResponse) {
    console.log('submitting the following url: ' + url);
    console.log('the get status response code is: ' + apiResponse.statusCode);
    apiResponse.on('data', function(data) {
      const accountData = JSON.parse(data);
      console.log(accountData);
    });
  });
});

// fs.readFile(keyPath + 'key-eu.txt', 'utf-8', (err, data) => {
//   if (err) throw err;
//   console.log('EU key: ' + data);
//   let euKey = data;
//   let euApiUrl = apiEndpointRoot + data;
//   console.log(euApiUrl);
// });

// 0.value
