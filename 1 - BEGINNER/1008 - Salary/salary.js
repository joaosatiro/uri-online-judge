const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const numberEmployee = Number(lines.shift());
const workedHours = Number(lines.shift());
const salaryHours = Number(lines.shift());

const salaryTotal = workedHours * salaryHours;

console.log(`NUMBER = ${numberEmployee}`);
console.log(`SALARY = U$ ${salaryTotal.toFixed(2)}`);
