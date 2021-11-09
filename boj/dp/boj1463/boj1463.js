const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let n = Number(input);
const arr = Array.from({ length: n + 1 }, () => n);

arr[n] = 0;

while (n > 1) {
  if (n % 3 === 0) {
    const r = Number(n / 3);
    arr[r] = Math.min(arr[r], arr[n] + 1);
  }
  if (n % 2 === 0) {
    const r = Number(n / 2);
    arr[r] = Math.min(arr[r], arr[n] + 1);
  }
  const r = n - 1;
  arr[r] = Math.min(arr[r], arr[n] + 1);

  n--;
}

console.log(arr[1]);
