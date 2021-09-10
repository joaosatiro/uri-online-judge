const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const km = parseInt(lines.shift());
const distance = km * 2;

console.log(`${distance} minutos`)
