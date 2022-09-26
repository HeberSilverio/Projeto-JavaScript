// PROBLEMA 9
// Pedir para o usuário digitar um número e mostrar a tabuada desse número de 1 0 1000.
// Deve ter a possibilidade do usuário digitar outro número e também de limpar a tabuada gerada previamente

const nome = prompt('Digite o seu nome');
alert('Bem vindo, ' + nome);

const output = document.querySelector('#output');
let mensagem = '';

for(var i = 0; i< 1001; i++){
   mensagem += 'i: ' + i + '<br>';
}
output.innerHTML = mensagem;