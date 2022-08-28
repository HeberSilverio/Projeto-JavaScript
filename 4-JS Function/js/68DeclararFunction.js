// Declaração de função (Function hoisting)
/*Hoisting é uma técnica JavaScript que move variáveis ​​e declarações de função para o topo de seu escopo antes que a execução do código comece . */

falaOi();
function falaOi() {
   console.log("Oie");
}

// First-class objects
/*
Em JavaScript, as funções são objetos de primeira classe , o que significa que podem ser: armazenadas em uma variável, objeto ou array. passado como um argumento para uma função. retornado de uma função.
*/

// Function Expression
const souUmDado = function() {
   console.log('Sou um dado.');
};

function executaFuncao(funcao) {
   console.log('Vou executar sua função abaixo:');
   funcao();
}
executaFuncao(souUmDado);

// Arrow Function
/*
Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas como construtoras (constructors).
*/
const funcaoArrow = () => {
   console.log('Sou uma arrow function');
};
funcaoArrow();

setInterval(function() {

}, 1000);

// setInterval(afunction, 1000);

//Dentro de um objeto
const obj = {
   falar: function() {
      console.log('estou falando...');
   }
};
obj.falar();

const objeto = {
   falante() { // posso criar esse objeto sem a palavra function e sem os dois pontos
      console.log('Sou um objeto falante...');
   }
};
objeto.falante();