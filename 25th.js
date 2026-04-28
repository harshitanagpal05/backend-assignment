// Convert keys ↔ values (invert object)
const obj = { a: 1, b: 2 };

const inverted = Object.entries(obj).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});

console.log(inverted);