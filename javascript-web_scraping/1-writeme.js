#!/usr/bin/node

const fs = require('fs');

if (process.argv.length < 4) {
  console.error('No file provided.');
  process.exit(1);
}

const path = process.argv[2];
const data = process.argv[3];

fs.writeFile(path, data, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
