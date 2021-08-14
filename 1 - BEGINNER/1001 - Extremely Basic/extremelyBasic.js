const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const a = Number(lines.shift());
const b = Number(lines.shift());

const x = a + b;

console.log(`X = ${x}`);