// Omit properties (opposite of pick)
const obj = { user: 'A', password: 'x' };

const { password, ...rest } = obj;

console.log(rest);