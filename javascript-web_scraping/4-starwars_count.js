#!/usr/bin/node

const request = require('request');

if (process.argv.length < 3) {
  console.error('No url provided.');
  process.exit(1);
}

const url = process.argv[2];

request.get((url), (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const movies = (JSON.parse(body))['results'];
  let appearances = 0;
  for (let i = 0; i < movies.length; i++) {
    current_movie = movies[i];
    if (current_movie['characters'].includes("https://swapi-api.hbtn.io/api/people/18/")) {
      appearances++;
    }
  }
  console.log(appearances);
});
