const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const hours = parseInt(lines.shift());
const km = parseInt(lines.shift());
const liters = (hours * km) / 12;

console.log(liters.toFixed(3));
