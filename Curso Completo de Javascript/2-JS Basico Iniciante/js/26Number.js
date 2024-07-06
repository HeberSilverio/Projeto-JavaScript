let num1 = 10.500200;
let num2 = 2.5;
let temp = num1 * 'Ola';

// console.log(num1.toString() + num2);
// console.log(num1.toString(2));// binario
// console.log(num1.toFixed(2));// Estabelece casas decimais
// console.log(Number.isInteger(num1)); // O número é inteiro?
// console.log(Number.isNaN(temp)); // O número é um not a number?

//PADRÃO JAVASCRIPT - IEEE 754-2008
let number1 = 0.7;
let number2 = 0.1;
let resulta = number1 + number2;
console.log(resulta);
resulta = parseFloat(resulta.toFixed(2))
console.log(resulta);
number1 += number2; // 0.8
number1 += number2; // 0.9
number1 += number2; // 1.0
number1 += number2; // 1.1
number1 += number2; // 1.2
number1 += number2; // 1.3
console.log(number1);
