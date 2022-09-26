// PROBLEMA 5
// Pedir para o usuário digitar a nota de duas provas mostrar um boolean indicando se a média for maior que 5
// exibir as mesagens "Parabéns! Você foi aprovado." ou "Desculpe, mas não foi dessa vez."

let n1 = prompt('Aluno digite a sua primeira nota');

//converter em número inteiro
n1 = parseInt(n1);

//pedir para o usuário digitar outro número
let n2 = prompt('Aluno digite a sua segunda nota');

//converter em número inteiro
n2 = parseInt(n2);

const resultadoMedia = (n1 + n2) / 2;
const exibeMedia = document.querySelector('.media');
exibeMedia.innerHTML += `<p>O número ${n1} mais o número ${n2} tem a média: ${resultadoMedia}. </p>`

const texteBoolean = resultadoMedia > 5;
if(texteBoolean === true){
   alert("Parabéns! Você foi aprovado.")
} else {
   alert("Desculpe, mas não foi dessa vez.")
}

// const exibeBoolean = document.querySelector('.comparacao');
// exibeBoolean.innerHTML += `<p>A média: ${resultadoMedia} é maior do que o número 5? Resposta: ${texteBoolean}. </p>`

console.log(typeof(texteBoolean));