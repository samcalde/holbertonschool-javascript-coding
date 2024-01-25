#!/usr/bin/node

const fs = require('fs');

if (process.argv.length < 3) {
  console.error('No file provided.');
  process.exit(1);
}

const path = process.argv[2];

fs.readFile(path, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data)
});
