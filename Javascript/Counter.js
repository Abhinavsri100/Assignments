/** @format */
let count = 0;
function Counter() {
  count++;
  console.log(count);
}
setInterval(Counter, 1000);
