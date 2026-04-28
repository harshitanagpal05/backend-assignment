// Merge two objects (deep vs shallow)
const a = { x: 1 };
const b = { y: 2 };

const merged = { ...a, ...b };

console.log(merged); 
