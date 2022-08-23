let num1 = 9.4578;
let num2 = Math.floor(num1); // arrendonda para baixo
let num3 = Math.ceil(num1); // arrendonda para cima
let num4 = Math.round(num1); // arrendonda para cima

// console.log(num2);
// console.log(num3);
// console.log(num4);
// console.log(Math.max(1,2,3,5,9,5,22,676,15)); //retorna o maior
// console.log(Math.min(1,2,3,5,9,5,22,676,15)); //retorna o menor
// const aleatorio = Math.random(); // gera um número aleatório entre 0 e 1 mas nunca o número 1
// const aleatorio = Math.random() * (10 - 5) + 5; // gera um número aleatório entre 5 e 10
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // gera um número aleatório entre 5 e 10 arrendodo para cima pelo Math.round

console.log(aleatorio);

console.log(Math.pow(2, 10));
console.log(2 ** 10); // elevado a 10
console.log(9 ** 0.5); // raiz quadrada
console.log(100 / 0); // O JavaScript aceita essa conta e diz que é infinity
console.log(!!(100 / 0)); // Valida se é verdadeiro
