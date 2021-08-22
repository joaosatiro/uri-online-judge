const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const nameSeller = lines.shift();
const salarySeller = Number(lines.shift());
const sale = Number(lines.shift());

const bonus = sale * 0.15;
const salaryTotal =  bonus + salarySeller;

console.log(`TOTAL = R$ ${salaryTotal.toFixed(2)}`);
