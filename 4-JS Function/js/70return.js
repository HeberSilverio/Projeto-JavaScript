// Return - Retorna um valor e termina a função
function soma(a, b) {
   return a + b;
}


// Essa função muda a cor do background do body ao clicar
// document.addEventListener('click', function() {
//    document.body.style.backgroundColor = '#02a698';
// });

function criaPessoa(nome, sobrenome) {
   return {
      nome, // basta deixar nome porque o JavaScript já assume nome: nome, 
      sobrenome // basta deixar nome porque o JavaScript já assume sobrenome: sobrenome
   };
}
// Essas duas variáveis criam o objeto, mesmo escrevendo diferente
const p1 = criaPessoa('Heber', 'Silvério');
const p2 = { nome: 'Joao', sobrenome: 'Oliveira' };
console.log(p1);
console.log(p2);

function falaFrase(comecoDaFrase) {
   function falaResto(finalDaFrase) {
      return comecoDaFrase + ' ' + finalDaFrase;
   }
   return falaResto;
}
const olaMundo = falaFrase('Olá');
console.log(olaMundo('mundo!'));

const fala = falaFrase('Héber');
const finalDaFrase = fala('Lindo!');
console.log(finalDaFrase);

//Utilização prática de uma função dentro da outra
function duplica(n) {
   return n * 2;
}
function triplica(n) {
   return n * 3;
}
function quadriplica(n) {
   return n * 4;
}
console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
/*
Closures
Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.
*/

function criaMultiplicador(multiplicador){
   //multiplicador
   return function(n) {
      return n * multiplicador
   }
}
const duplica1 = criaMultiplicador(2);
const triplica1 = criaMultiplicador(3);
const quadriplica1 = criaMultiplicador(4);

console.log(duplica1(3));
console.log(triplica1(3));
console.log(quadriplica1(3));
// Então podemos retornar qualquer coisa de uma função - podemos return outra função, um objeto, os valores primitivos, um setInterval 
