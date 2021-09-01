const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const [a, b, c] = lines.shift().split(' ');

const triangle = (a * c) / 2.0;
const circle = Math.pow(c, 2) * 3.14159;
const trapezium = ((parseFloat(a) + parseFloat(b)) * c) / 2.0;
const square  = b * b;
const rectangle = a * b;

console.log(`TRIANGULO: ${triangle.toFixed(3)}`);
console.log(`CIRCULO: ${circle.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezium.toFixed(3)}`);
console.log(`QUADRADO: ${square.toFixed(3)}`);
console.log(`RETANGULO: ${rectangle.toFixed(3)}`);
