#!/usr/bin/node

const request = require('request');
const fs = require('fs');

if (process.argv.length < 4) {
  console.error('You must provide both the url and target file');
  return;
}

const url = process.argv[2];
const path = process.argv[3];

request.get((url), (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  fs.writeFile(path, body, 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
})
