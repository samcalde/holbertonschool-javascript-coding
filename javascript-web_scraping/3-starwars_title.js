#!/usr/bin/node

const request = require('request');

if (process.argv.length < 3) {
  console.error('No episode number provided.');
  process.exit(1);
}

const episodeId = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + episodeId;

request.get((url), (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const movieObject = JSON.parse(body);
  console.log(movieObject.title);
});
