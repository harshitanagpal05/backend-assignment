// Delete property immutably
const obj = { name: 'A', password: 'x' };

const { password, ...rest } = obj;

console.log(rest);