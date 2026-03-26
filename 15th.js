// Sliding window sum
const arr = [1, 2, 3, 4];
const k = 2;
const result = [];

let windowSum = 0;

// First window
for (let i = 0; i < k; i++) {
  windowSum += arr[i];
}
result.push(windowSum);

// Slide window
for (let i = k; i < arr.length; i++) {
  windowSum = windowSum - arr[i - k] + arr[i];
  result.push(windowSum);
}

console.log(result); 