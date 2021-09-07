const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const km = Number(lines.shift());
const spentFuel = Number(lines.shift())

const kml = km / spentFuel;

console.log(`${kml.toFixed(3)} km/l`);
