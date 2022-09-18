// PROBLEMA 2
// Pedir para o usuário digitar dois números e mostrar um boolean indicando se a média for maior que 5
let n1 = prompt('Digite um número');

//converter em número inteiro
n1 = parseInt(n1);

//pedir para o usuário digitar outro número
let n2 = prompt('Digite outro número');

//converter em número inteiro
n2 = parseInt(n2);

const resultadoMedia = (n1 + n2) / 2;

const exibeMedia = document.querySelector('.media');

exibeMedia.innerHTML += `<p>O número ${n1} mais o número ${n2} tem a média: ${resultadoMedia}. </p>`