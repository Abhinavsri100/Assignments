/** @format */
//A timer is maintained by by webApi for the async operation when the async task is fulfilled then
//the task goes to callback queue and when finally Call stack is free then that async opeartion output is seen and processed by user

const fs = require("fs");
//async file read operation
fs.readFile("a.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
//expensive operation
for (let i = 0; i < 10000000000; i++) {}
