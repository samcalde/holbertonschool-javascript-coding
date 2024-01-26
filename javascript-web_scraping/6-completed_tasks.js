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
  const tasks_response = JSON.parse(body);
  let completed_tasks = {}
  for (let i = 0; i < tasks_response.length; i++) {
    current_task = tasks_response[i];
    if (current_task['completed'] === true) {
      const userId = current_task['userId'];
      if (completed_tasks[userId] >= 0) {
        completed_tasks[userId]++;
      } else {
        completed_tasks[userId] = 1;
      }
    }
  }
  console.log(completed_tasks);
});
