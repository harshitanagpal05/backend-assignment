// Remove item at index
const arr = [1, 2, 3];
const i = 1;

const result = [
  ...arr.slice(0, i),
  ...arr.slice(i + 1)
];

console.log(result); 