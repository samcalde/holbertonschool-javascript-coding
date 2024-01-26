#!/usr/bin/node

const request = require('request');

if (process.argv.length < 3) {
  console.error('No url provided.');
  return;
}

const url = process.argv[2];

request.get((url), (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const tasksResponse = JSON.parse(body);
  let completedTasks = {}
  for (let i = 0; i < tasksResponse.length; i++) {
    current_task = tasksResponse[i];
    if (current_task['completed'] === true) {
      const userId = current_task['userId'];
      if (completedTasks[userId] >= 0) {
        completedTasks[userId]++;
      } else {
        completedTasks[userId] = 1;
      }
    }
  }
  console.log(completedTasks);
});
