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

// PROBLEMA 2
// Pedir para o usuário digitar um número
let n1 = prompt('Digite um número');

//converter em número inteiro
n1 = parseInt(n1);

//pedir para o usuário digitar outro número
let n2 = prompt('Digite outro número');

//converter em número inteiro
n2 = parseInt(n2);

const resultado = (n1 % n2);

// alert(`O resto da divisão de ${n1} por ${n2} é: ${resultado}`);
const cupom = document.querySelector('.promocao');

cupom.innerHTML += `<p>O resto da divisão de ${n1} por ${n2} é: ${resultado}. </p>`

//Mostrar num alert o seguinte texto:
//O número (n1) elevado a (n2) é: (potencia);
const potencia = n1 ** n2;
alert(`O número ${n1} elevado a ${n2} é: ${potencia};`)

const exibePotencia = document.querySelector('.potencia');

exibePotencia.innerHTML += `<p>O número ${n1} elevado a ${n2} é: ${potencia}. </p>`