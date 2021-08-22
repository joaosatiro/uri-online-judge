const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const a = Number(lines.shift());
const b = Number(lines.shift());
const c = Number(lines.shift());

const media = ((a * 2) + (b * 3) + (c * 5)) / 10;

console.log(`MEDIA = ${media.toFixed(1)}`);
