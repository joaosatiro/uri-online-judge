const input = require('fs').readFileSync('../../stdin', 'utf8');
const lines = input.split('\n');

const product1 = lines.shift().split(' ');
const product2 = lines.shift().split(' ');

const codeProduct1 = Number(product1.shift());
const unit1 = Number(product1.shift());
const price1 = Number(product1.shift());

const codeProduct2 = Number(product2.shift());
const unit2 = Number(product2.shift());
const price2 = Number(product2.shift());

const valueToPay = (unit1 * price1) + (unit2 * price2);

console.log(`VALOR A PAGAR: R$ ${valueToPay.toFixed(2)}`);
