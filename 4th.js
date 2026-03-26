// Minimum value using reduce
const arr = [1, 2, 3, 4, 5];
const min = arr.reduce((min, v) => v < min ? v : min, arr[0]);
console.log(min);