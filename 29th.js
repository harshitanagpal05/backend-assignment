// Pick subset of properties
const obj = { id: 1, name: 'A', email: 'a@x' };
const keys = ['id', 'email'];

const result = keys.reduce((acc, key) => {
  if (key in obj) acc[key] = obj[key];
  return acc;
}, {});

console.log(result); 