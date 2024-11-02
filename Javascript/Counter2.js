/** @format */

//counter without using setInterval
let count = 0;
function Counter() {
  count++;
  console.log(count);
  setTimeout(Counter, 1000);
}
setTimeout(Counter, 1000);
