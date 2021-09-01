const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const radius = Number(lines.shift());

const volume = (4 / 3) * 3.14159 * Math.pow(radius, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);
