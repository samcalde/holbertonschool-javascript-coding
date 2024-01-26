#!/usr/bin/node

const request = require('request');

if (process.argv.length < 3) {
  console.error('No URL provided.');
  return;
}

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log('code: ' + response.statusCode);
})
