const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const [a, b, c] = lines.shift().split(' ').map(item => parseInt(item));

const result = (a + b + Math.abs(a - b)) / 2;
const greatest = (c + result + Math.abs(c - result)) / 2;

console.log(`${greatest} eh o maior`);
