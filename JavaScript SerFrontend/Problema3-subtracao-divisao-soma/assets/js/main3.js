/*
   <br>// Problema 3
   <br>// Pedir para o usuário digitar um números 
   <br>// Converter o número para inteiro
   <br>// Pedir para o usuário digitar outro número
   <br>// Converter o segundo número para inteiro
   <br>// Mostrar a subtração concatenando com o texto "a subtração é: ..."
   <br>// Mostrar a divisão concatenando com o texto "a divisão é: ..."
   <br>// Mostrar a soma concatenando com o texto "a soma é: ..."
   */


// Pedir para o usuário digitar um número
let n1 = prompt('Digite um número');

//converter em número inteiro
n1 = parseInt(n1);

//pedir para o usuário digitar outro número
let n2 = prompt('Digite outro número');

//converter em número inteiro
n2 = parseInt(n2);

const subtracao = n1 - n2;
const multiplicacao = n1 * n2;
const divisao = n1 / n2;
const soma = n1 + n2;
const potencia = n1 ** n2;



// Exibe o resultado da subtração no html
const showSubtracao = document.querySelector('.subtracao');
showSubtracao.innerHTML += `<p>A subtração de ${n1} e ${n2} é: ${subtracao}. </p>`


// Exibe o resultado da multiplicação no html
const showMultiplicacao = document.querySelector('.multiplicacao');
showMultiplicacao.innerHTML += `<p>A multiplicação de ${n1} por ${n2} é: ${multiplicacao}. </p>`

// Exibe o resultado da divisao no html
const showDivisao = document.querySelector('.divisao');
showMultiplicacao.innerHTML += `<p>A divisão de ${n1} por ${n2} é: ${divisao}. </p>`

// Exibe o resultado da divisao no html
const showSoma = document.querySelector('.soma');
showSoma.innerHTML += `<p>A soma de ${n1} por ${n2} é: ${soma}. </p>`

//O número (n1) elevado a (n2) é: (potencia);
const exibePotencia = document.querySelector('.potencia');
exibePotencia.innerHTML += `<p>O número ${n1} elevado a ${n2} é: ${potencia}. </p>`
