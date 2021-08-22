const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const a = Number(lines.shift());
const b = Number(lines.shift());
const c = Number(lines.shift());
const d = Number(lines.shift());

const difference = (a * b) - (c * d);

console.log(`DIFERENCA = ${difference}`);
