const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const a = Number(lines.shift());
const b = Number(lines.shift());

const media = ((a * 3.5) + (b * 7.5)) / 11;

console.log(`MEDIA = ${media.toFixed(5)}`);
