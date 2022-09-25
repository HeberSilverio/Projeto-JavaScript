/*
   <br>// Problema 2
   <br>// Pedir para o usuário digitar dois números e mostrar a soma
*/

const n1 = parseInt(prompt('Digite um número'));
const n2 = parseInt(prompt('Digite outro número'));
const soma = n1 + n2;

const cupom = document.querySelector('.promocao');

cupom.innerHTML += `<p> Os números digitados foram  ${n1} e ${n2}. <br> A soma desses números tem o valor de:<b> ${soma} </b></p>`

