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
  const tasksResponse = JSON.parse(body);
  const completedTasks = {};
  for (let i = 0; i < tasksResponse.length; i++) {
    const currentTask = tasksResponse[i];
    if (currentTask.completed === true) {
      const userId = currentTask.userId;
      if (completedTasks[userId] >= 0) {
        completedTasks[userId]++;
      } else {
        completedTasks[userId] = 1;
      }
    }
  }
  console.log(completedTasks);
});
