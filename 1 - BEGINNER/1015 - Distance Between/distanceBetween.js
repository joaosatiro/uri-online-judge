const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const [x1, y1] = lines.shift().split(' ');
const [x2, y2] = lines.shift().split(' ');

const distanceBetween = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

console.log(distanceBetween.toFixed(4));
