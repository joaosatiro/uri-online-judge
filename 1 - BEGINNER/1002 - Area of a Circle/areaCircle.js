const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const PI = 3.14159;
const raio = Number(lines.shift());

const area = PI * Math.pow(raio, 2);

console.log(`A=${area.toFixed(4)}`);