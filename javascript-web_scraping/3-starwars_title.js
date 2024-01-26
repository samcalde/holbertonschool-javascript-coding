#!/usr/bin/node

const request = require('request');

if (process.argv.length < 3) {
  console.error('No episode number provided.');
  return;
}

const episode_id = process.argv[2];
const url = 'https://swapi-api.hbtn.io/api/films/' + episode_id;

request.get((url), (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const movie_object = JSON.parse(body);
  console.log(movie_object['title']);
})
