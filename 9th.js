// Rotate array by k steps

const arr = [1, 2, 3, 4, 5];
const k = 2;
k = k%arr.length;
const result = [
    ...arr.slice(-k),
    ...arr.slice(0, arr.length-k)
];
console.log(result);
