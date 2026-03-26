// Count element frequency
const arr = [a, b, c, a, b];
const freq = {};
for(let i=0; i<arr.length; i++){
    const val = arr[i];
    freq[val] = (freq[val] || 0) + 1;
}
console.log(freq);